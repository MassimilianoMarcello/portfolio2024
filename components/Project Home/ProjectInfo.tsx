import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { getProjects } from "@/sanity/sanity.query";
import { PortableText } from "@portabletext/react";
import { ThemeProvider } from "@emotion/react";
import theme from "@/app/theme_emotion";
// import { HeaderSection } from './HeaderSection';
import Link from "next/link";
import Image from "next/image";

const ProjectInfos = ({ project, openProjectId }) => {
  return (
    <ProjectInfo
      className={`project-info ${
        project._id === openProjectId ? "visible" : "hidden"
      }`}
    >
      <h3>{project.name}</h3>
      {/* <PortableText value={project.content[0]} /> */}
      <ChallengesList>
        <h4>Challenges Faced:</h4>
        <SingleChallenge>Lorem Ipsum lumina solis</SingleChallenge>
        <SingleChallenge>Lorem Ipsum lumina solis</SingleChallenge>
        <SingleChallenge>Lorem Ipsum lumina solis</SingleChallenge>
        <SingleChallenge>Lorem Ipsum lumina solis</SingleChallenge>
        <SingleChallenge>Lorem Ipsum lumina solis</SingleChallenge>
        <SingleChallenge>Lorem Ipsum lumina solis</SingleChallenge>
      </ChallengesList>







      <div className="text-details">
        <Buttons>
          <StyledButton>
            <Link href={project.githubUrl}>
        
              Github
            </Link>
          </StyledButton>

          <StyledButton>
            <Link href={project.url}>Visit Website </Link>
          </StyledButton>
          <StyledButton>
            <Link href={`/projects/${project.slug}`}>Click for Details </Link>
          </StyledButton>
        </Buttons>

        {/* <CloseButton className="close-button">
            <Link href="/projects">
              <Image
                src="/assets/right.png"
                width={50}
                height={50}
                alt="close"
              />
            </Link>
          </CloseButton> */}

      
      </div>
    </ProjectInfo>
  );
};

export default ProjectInfos;

const ProjectInfo = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  padding: 10px;
  margin-right: -1rem;
  margin-top: 0rem;
  background-color: #f1f1f1;
  color: ${theme.colors.white};
  transition: all 0.7s ease;
  opacity: 0;
  transform: translateY(-100%);
  h3 {
    font-family: ${theme.fontFamily.customFont};
    word-spacing: 0.01rem;
    margin-left: 2rem;
    margin-top: 1rem;
    padding-left: 0.5rem;
 
    border-left: 1rem solid ${theme.colors.yellow};
    color: ${theme.colors.blueDark};
    font-size: 2.5rem;
  }

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }

  &.hidden {
    opacity: 0;
    pointer-events: none;
  }
`;

const ChallengesList = styled.ul`
  list-style-type: none;
  padding-left: 3rem;
  margin-right: -6rem;
  margin-top: -0.5rem;
  margin-bottom: 1rem;
  h4 {
    font-size: 1.6rem;
    margin-bottom: 0.7rem;
  }
  @media screen and (max-width: 600px) {
    h4 {
    font-size: 1.7rem;
    color:${theme.colors.platinumText}; 
    margin-bottom: 2rem;
    margin-top: -1rem;
  }
  }
`;

const SingleChallenge = styled.li`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: ${theme.colors.blueLight};
  font-family: ${theme.fontFamily.primaryFont};
  word-spacing: 0.01rem;
  margin-right: 6rem;
  margin-top: 1rem;
  padding: 0.1rem 0.5rem;
  color: ${theme.colors.blueDark};
`;

const Buttons = styled.div`
  display: flex;
  align-items: flex-start;
  position: absolute;
  bottom: 1rem;
`;

const StyledButton = styled.div`
  text-decoration: none;
  font-family: ${theme.fontFamily.headersFont};
  letter-spacing: 0.07rem;
  padding: 0.4rem 1rem;
  border-radius: 0.5rem;
  transition: background-color 0.3s ease, color 0.3s ease;
  cursor: pointer;
  margin-bottom: 1rem;
  font-weight: 700;
  color: ${theme.colors.blueDark};
  background-color: ${theme.colors.azure};
  border-right: 4px solid ${theme.colors.yellow};
  border-bottom: 4px solid ${theme.colors.yellow};
  display: inline-block;
  margin-left: 0.5rem;

  a {
    text-decoration: none;
    text-align: center;
    font-weight: 700;
    font-size: 0.8rem;
    color: ${theme.colors.blueDark};
  }

  &:hover {
    background-color: ${theme.colors.yellow};
    border-right: 4px solid ${theme.colors.azure};
    border-bottom: 4px solid ${theme.colors.azure};
  }
`;