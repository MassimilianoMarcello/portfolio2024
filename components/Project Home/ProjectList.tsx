import styled from "@emotion/styled";
import theme from "@/app/theme_emotion";
import ProjectInfos from "./ProjectInfo";
import TechnologiesUsed from "./TechnologiesUsed";
import { PortableText } from '@portabletext/react';

const ProjectList = ({ projects, openProjectId, toggleProjectInfo }) => {
  return (
    <ProjectContainer>
      {projects.map((project) => (
        <ProjectCard
          key={project._id}
          onClick={() => toggleProjectInfo(project._id)}
        >
          <BoxImageTextProject>
            {/* <ProjectTitle>{project.name}</ProjectTitle> */}
            <ProjectImage src={project.image} alt={project.imageAlt} />
            {/* <ProjectTechnologies>{project.technologies}</ProjectTechnologies> */}
            <PortableStyle>
            <PortableText value={project.content[0]} />
            </PortableStyle>
           
          </BoxImageTextProject>
          <TechnologiesUsed technologies={project.technologies} />
          <ProjectInfos project={project} openProjectId={openProjectId} />
        </ProjectCard>
      ))}
    </ProjectContainer>
  );
};

export default ProjectList;

const PortableStyle = styled.div`
    font-family: ${theme.fontFamily.primaryFont};
color: ${theme.colors.blackParagraph};
font-size:${theme.fontSize.medium};
line-height: 1.8;
height: 14rem;
margin: 1rem;
margin-top: -1rem;
margin-bottom:1rem;
`

const ProjectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: -6rem;
  margin-left: 2.5rem;
  margin-right: -6rem;
  @media screen and (max-width: 600px) {
    margin-top: -8rem;
  margin-left: 0rem;
  margin-right: 0rem;
  }
`;

const ProjectCard = styled.div`

 width: 30rem;
height: 30rem;
  margin: 4rem;
  background-color: #fff;
  border: 0.1rem solid ${theme.colors.blackParagraph}; 
  transition: all 0.02s ease;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  border-radius: 1rem; 
  box-shadow: 14px 14px 0 -4px ${theme.colors.blueDarkest}, 14px 14px 0 0 ${theme.colors.blueDarkest}; //rounded shadow
  @media screen and (max-width: 600px) {
    max-width: 30rem;
    min-width: 25rem;
    max-height: 34rem;
    min-height: 26rem;
  }

`;

const BoxImageTextProject = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin: 1rem;

  
`;

// const ProjectTitle = styled.h3`
//   margin: 0.5rem 0;
//   margin-left: 0.5rem;
//   margin-right: -15rem;
//   border-bottom: solid 0.02rem #b3a27d;
//   font-weight: ${theme.fontWeight.bold};
//   font-family: ${theme.fontFamily.primaryFont};
//   color: #1d3b7a;
//   font-size: 2rem;
//   @media screen and (max-width: 600px) {
//     margin-right: 0;
//   }
// `;

const ProjectImage = styled.img`
  width: 92%;
;
  height: 10rem;
  @media screen and (min-width: 720px), (min-width: 1000px) {
    margin: 0 auto;
  
  }
`;

// const ProjectTechnologies = styled.p`
//   padding: 1rem;
//   margin: 1rem;
//   *:first-of-type {
//     margin: 1.5rem;
//     padding: 1.5rem;
//     background-color: #11182d; /* Colore ridotto */
//     border-radius: 0.5rem;
//     color: #fff; /* Colore del testo aggiunto */
//   }
// `;
