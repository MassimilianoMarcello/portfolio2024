"use client";

import styled from "@emotion/styled";
import { css } from "@emotion/react";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { getProjects } from "@/sanity/sanity.query";
import { PortableText } from "@portabletext/react";
import { ThemeProvider } from "@emotion/react";
import theme from "@/app/theme_emotion";

const Section = styled.section`
  background-color: #f0f0f0;
  padding: 20px;
  margin-top: 6rem;
`;

const TextContainer = styled.div`
  text-align: center;
  color: #0f2556;
  margin: 5rem auto;
  font-family: "Amatic SC", sans-serif;

  padding-top: 1rem;

  background-color: #0f2556;
  background-color: #feeb64;
  box-shadow: 0 8px 32px 0 rgba(7, 12, 74, 0.37);

  border-bottom-right-radius: 3rem;
  border-bottom-left-radius: 3rem;
  /* border: 1px solid rgba(255, 255, 255, 0.18); */
  .greeting {
    margin-top: -1rem;
    font-size: 1.7rem;
  }

  .section-title {
    font-size: 3rem;
    margin-top: -2.5rem;
    padding: 0;
    color: #b29d6e;
    margin-bottom: 0rem;
  }
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  z-index: 999;
  @media (max-width: 600px) {
    margin-top: 5.1rem;

    .section-title {
      font-size: 2rem;
      margin-top: -2rem;
      padding: 0;
      color: #b29d6e;
    }
  }
`;

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 5rem;
`;

const ProjectCard = styled.div`
  /* flex-grow: 1;  */
  /* Rettangoli occupano tutto lo spazio disponibile */
  min-width: 30rem;
  max-width: 40rem;
  max-height: 30rem;

  margin: 4rem;
  margin-top: 4rem;
  background-color: rgba(0, 0, 255, 0.2);
  border: 0.2rem solid yellow;
  transition: all 0.2s ease;
  overflow: hidden;
  position: relative;
  cursor: pointer;

  &:hover {
    max-width: 100%; /* Larghezza massima aumenta solo al passaggio del mouse */
    max-height: 100%;
  }

  &:hover .project-info {
    opacity: 1; /* Mostra le informazioni del progetto al passaggio del mouse */
    transform: translateY(0);
  }
`;

const ImageProject = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  img {
    width: 100%;
    height: 40%;
    @media screen and (min-width: 720px) {
      width: 100%;
      height: 40%;
      margin: 0 auto;
    }
    @media screen and (min-width: 1000px) {
      width: 100%;
      height: 40%;

      margin: 0 auto;
    }
  }
  .project-technologies {
    padding: 1rem;
    margin: 1rem;

    & > * {
      /* Applica lo stile a ogni singolo elemento figlio */
      margin: 1.5rem;
      padding: 1.5rem;
      background-color: rgba(0, 0, 255, 0.1);
      border-radius: 0.5rem;
    }
  }
  h3 {
    margin: 0.5rem 0;
    margin-left: 2rem;
   
    font-weight: ${theme.fontWeight.bold};
    font-family: ${theme.fontFamily.customFont};
    color: #fff;
    font-size: 2rem;
  }
`;

const ProjectInfo = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  padding: 10px;
  margin-right: -1rem;
  margin-top: 0rem;
  /* background-color: rgba(0, 0, 255, 0.4); */
  background-color: #1d3b7a;
  color: white;
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateY(100%);
  h3 {
    font-family: ${theme.fontFamily.customFont};
  

    margin: 0;
    padding-left: 2rem;
    background-color: #fff;
    color: #1d3b7a;
    font-size: 2rem;
  }

  .my-portable-text {
    font-size: 1rem;
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: inherit;
`;
const Content =styled.div`
    .details {
    font-size: 2rem;
  }
`



export default async function Home() {
  const projects = await getProjects();

  return (
    <ThemeProvider theme={theme}>
      <Section>
        <TextContainer>
          <p className="greeting">Hello everyone! Check out </p>
          <h2 className="section-title">My Projects</h2>
        </TextContainer>

        <ProjectContainer className="project-container">
          {projects.map((project, index) => (
            <ProjectCard key={index}>
              <StyledLink href={`/projects/${project.slug}`}>
                <ImageProject>
                  <h3>{project.name}</h3>
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    width={300}
                    height={200}
                    className="project-image"
                    key={project._id}
                  />
                  <p className="project-technologies">{project.technologies}</p>
                </ImageProject>
                <ProjectInfo className="project-info">
                  <h3>{project.name}</h3>
                  <Content className="my-portable-text">
                    <PortableText value={project.content[0]} />
                  </Content>

                  <div className="text-details">
                    {/* <p className="status">Status project: {project.status}</p> */}
                    {/* <p className="last-update">
                      Last update:{" "}
                      {moment(project._updateAt).format("DD-MM-YYYY")}
                    </p> */}
                    {/* <p className="date-creation">
                      Created: {moment(project._createdAt).format("DD-MM-YYYY")}
                    </p> */}
                    <p className="details">Click for Details 🚀</p>
                  </div>
                </ProjectInfo>
              </StyledLink>
              {/* <Link href={project.url}>
                  <h1>Visit website</h1>
                </Link>
                <Link href={project.githubUrl}>
                  <h1>See code</h1>
                </Link> */}
            </ProjectCard>
          ))}
        </ProjectContainer>
      </Section>
    </ThemeProvider>
  );
}
// const ImageProject = styled.div``
// const TextContainer = styled.div`
//   text-align: center;
//   color: #0f2556;
//   margin: 6rem auto;
//   font-family: "Amatic SC", sans-serif;

//   padding-top: 1rem;

//   background-color: #0f2556;
//   background-color: #feeb64;
//   box-shadow: 0 8px 32px 0 rgba(7, 12, 74, 0.37);

//   border-bottom-right-radius: 3rem;
//   border-bottom-left-radius: 3rem;
//   /* border: 1px solid rgba(255, 255, 255, 0.18); */
//   .greeting {
//     margin-top: -1rem;
//     font-size: 1.7rem;
//   }

//   .section-title {
//     font-size: 3rem;
//     margin-top: -2.5rem;
//     padding: 0;
//     color: #b29d6e;
//     margin-bottom: 0rem;
//   }
//   position: fixed;
//   top: 0;
//   left: 50%;
//   transform: translateX(-50%);
//   width: 100%;
//   z-index: 999;
//   @media (max-width: 600px) {
//     margin-top: 5.1rem;

//     .section-title {
//       font-size: 2rem;
//       margin-top: -2rem;
//       padding: 0;
//       color: #b29d6e;
//     }
//   }
// `;

// const StyledLink = styled(Link)`
//   border-radius: 12px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   overflow: hidden;
//   transition: transform 0.3s ease;
//   height: 10rem;
//   width: 40rem;
//   margin: 2rem;

//   background-color: #eaf6f9;
//   text-decoration: none;
//   font-size: 2rem;
//   align-items: center;
//   color: #afae7f;
//   font-family: "Quicksand", sans-serif;
//   text-transform: uppercase;
//   font-weight: 200;
//   display: flex;
//   justify-content: center;
//   align-items: flex-start;
// box-shadow: blue 0px 0px 0px 2px inset, rgb(255, 255, 255) 10px -10px 0px -3px;
// transition: background-color 0.3s ease;
// &:hover {
//   border: 2px solid #ff69b4;
// border-image: linear-gradient(to right, #1c09c8, #a1a0ff) 1;
// }

// @media (max-width: 600px) {
//     width: 80%;
//   }

//   &:hover {
//     transform: scale(1.05);
//   }

//   .project-name {
//     margin-top: 1rem;
//     margin-right: 1rem;
//     background-color: #254fa9;
//     padding: 1rem 0;
//     width: 100%;
//     text-align: center;
//     color: #fff;
//     transition: transform 0.3s ease;
//   &:hover {
//     transform: scale(1.1);
//   }
//   }

//   &:nth-child(even) {
//     margin-right: auto;
//     margin-left: 2rem;
//     border-right: solid 1rem #254fa9;
//   }

//   &:nth-child(odd) {
//     margin-left: auto;
//     margin-right: 2rem;
//     border-left: solid 1rem #254fa9;
//   }
// `;

// const Section = styled.section`
//   background-color: #171d35;
//   height: auto;
//   display: flex;
//   flex-direction: row;
//   align-items: center;

// `;

// const StyledLink = styled(Link)``;

// const Section = styled.section`
//   margin-top: 20rem;
// `;

// const ProjectContainer = styled.div``;
