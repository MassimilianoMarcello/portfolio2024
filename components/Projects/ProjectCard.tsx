
import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";
import theme from "@/app/theme_emotion";

export const StyledProjectCard = ({ project, onClick }) => (
    <StyledLink onClick={() => onClick(project)}>
      <ImageProject>
        <ProjectInfo>
          <h3>{project.name}</h3>
        </ProjectInfo>
        <Image
          src={project.image}
          alt={project.imageAlt}
          width={200}
          height={250}
          className="project-image"
          key={project._id}
        />
        <BoxTechnologies className="boxlist-technologies">
          {project.technologies.map((technology, techIndex) => (
            <p className="single-technology" key={techIndex}>
              {technology}
            </p>
          ))}
        </BoxTechnologies>
      </ImageProject>
    </StyledLink>
  );

  const StyledLink = styled.a`
  /* Stili per il link */
  text-decoration: none;
  color: inherit;
  /*  */
     width: calc(100% / 1);
  margin: 1rem;
   background-color: #f9f9f9;
  border-radius: 1rem;
   overflow: hidden;
  box-shadow: 0.5rem 1rem 2rem rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;

   &:hover {
    box-shadow: 1rem 2rem 4rem rgba(0, 0, 0, 0.2);
   }

   @media (min-width: 48rem) {
     width: calc(100% / 2);
   }

  @media (min-width: 62rem) {
     width: calc(100% / 3.4);
  } 

`;


  const ProjectInfo = styled.div`
  /* Stile project information */
  padding-bottom: 1rem;
  margin-top: -1rem;
  background-color: #1d3b7a;
  color: #fff;
  font-size: 2rem;
  font-weight: 100;
  h3 {
    font-family: ${theme.fontFamily.customFont};
    border-top: solid 2px #feeb64;
    margin: 0.5rem 0rem;
    padding: 0.5rem;
    font-size: 3rem;
    font-weight:500;
  }
`;


const ImageProject = styled.div`
  /*box-> contain title,image,used technologies   */
  text-align: center;
  padding: 2rem;
  background-color: #1d3b7a ;
  .project-image {
    width: 100%;
    padding-bottom: 2rem;
    border-bottom: solid 2px #feeb64;
  }
`;

const BoxTechnologies = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #1d3b7a;
  .single-technology {
    font-size: 1.2rem;
    padding: 1rem;

    text-transform: uppercase;
    font-weight: 700;
    color: #fff;
  }
`;
  /* Stili per la carta di progetto */

// const StyledProjectCard = styled.div`

//   width: calc(100% / 1);
//   margin: 1rem;
//   background-color: #f9f9f9;
//   border-radius: 1rem;
//   overflow: hidden;
//   box-shadow: 0.5rem 1rem 2rem rgba(0, 0, 0, 0.1);
//   transition: box-shadow 0.3s ease;

//   &:hover {
//     box-shadow: 1rem 2rem 4rem rgba(0, 0, 0, 0.2);
//   }

//   @media (min-width: 48rem) {
//     width: calc(100% / 2);
//   }

//   @media (min-width: 62rem) {
//     width: calc(100% / 3.4);
//   }
// `;

  