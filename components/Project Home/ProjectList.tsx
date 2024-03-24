import styled from "@emotion/styled";
import theme from "@/app/theme_emotion";
import ProjectInfos from "./ProjectInfo";
import TechnologiesUsed from "./TechnologiesUsed";

const ProjectList = ({ projects, openProjectId, toggleProjectInfo }) => {
  return (
    <ProjectContainer>
      {projects.map((project) => (
        <ProjectCard
          key={project._id}
          onClick={() => toggleProjectInfo(project._id)}
        >
          <ImageProject>
            {/* <ProjectTitle>{project.name}</ProjectTitle> */}
            <ProjectImage src={project.image} alt={project.imageAlt} />
            {/* <ProjectTechnologies>{project.technologies}</ProjectTechnologies> */}
          </ImageProject>
          <TechnologiesUsed technologies={project.technologies} />
          <ProjectInfos project={project} openProjectId={openProjectId} />
        </ProjectCard>
      ))}
    </ProjectContainer>
  );
};

export default ProjectList;

const ProjectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: -6rem;
  margin-left: 2.5rem;
  margin-right: -6rem;
`;

const ProjectCard = styled.div`
  min-width: 28rem;
  max-width: 30rem;
  max-height: 20rem;
  margin: 4rem;
  background-color: #fff;
  border: 0.2rem solid #f5f5f5; 
  transition: all 0.2s ease;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  border-radius: 1rem; 
  box-shadow: 14px 14px 0 -4px black, 14px 14px 0 0 black; /* Aggiunta dell'ombra */
  @media screen and (max-width: 600px) {
    max-width: 20rem;
    min-width: 15rem;
    max-height: 30rem;
    min-height: 25rem;
  }

`;

const ImageProject = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const ProjectTitle = styled.h3`
  margin: 0.5rem 0;
  margin-left: 0.5rem;
  margin-right: -15rem;
  border-bottom: solid 0.02rem #b3a27d;
  font-weight: ${theme.fontWeight.bold};
  font-family: ${theme.fontFamily.primaryFont};
  color: #1d3b7a;
  font-size: 2rem;
  @media screen and (max-width: 600px) {
    margin-right: 0;
  }
`;

const ProjectImage = styled.img`
  width: 94%;
  height: 40%;
  @media screen and (min-width: 720px), (min-width: 1000px) {
    margin: 0 auto;
    /* padding: 0 3rem; */
  }
`;

const ProjectTechnologies = styled.p`
  padding: 1rem;
  margin: 1rem;
  *:first-of-type {
    margin: 1.5rem;
    padding: 1.5rem;
    background-color: #11182d; /* Colore ridotto */
    border-radius: 0.5rem;
    color: #fff; /* Colore del testo aggiunto */
  }
`;
