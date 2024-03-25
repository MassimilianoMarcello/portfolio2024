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
      <div className="text-details">
        <Buttons>
          <div className="buttons-container">
            <StyledButton>
              <Link href={project.githubUrl}>
                <GitHub className="container">
                  <p>Github</p>
                  <Image
                    src="/assets/social-github-octocat.png"
                    width={30}
                    height={30}
                    alt="github"
                  />
                </GitHub>
              </Link>
            </StyledButton>
          </div>

          <div className="buttons-container">
            <StyledButton>
              <Link href={project.url}>Visit Website 🌐</Link>
            </StyledButton>
          </div>
        </Buttons>

        <StyledLink href={`/projects/${project.slug}`}>
          Click for Details 🚀
        </StyledLink>
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
  background-color: #1d3b7a;
  color: white;
  transition: all 0.7s ease;
  opacity: 0;
  transform: translateY(-100%);
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

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }

  &.hidden {
    opacity: 0;
    pointer-events: none;
  }
`;

const StyledLink = styled.a`
  position: absolute;
  bottom: 0;

  text-decoration: none;
  font-family: ${theme.fontFamily.headersFont};
  letter-spacing: 0.07rem;
  padding: 0.7rem 1rem;
  border: none;
  border-radius: 0.5rem;
  transition: background-color 0.3s ease, color 0.3s ease;
  cursor: pointer;
  margin-bottom: 1rem;

  margin-bottom: 2.5rem;
  margin-left: 2rem;

  font-size: 2rem;
  font-weight: 700;
  display: inline-block;
  padding: 0.5rem 1rem;
  margin-right: 0.5rem;
  color: ${theme.colors.blueDark};
  text-decoration: none;
  background-color: ${theme.colors.azure};
  border-right: 4px solid ${theme.colors.yellow};
  border-bottom: 4px solid ${theme.colors.yellow};
  transition: all 0.3s ease;
`;

// buttons

const GitHub = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 0.5rem;
  font-size: 2rem;
  padding: 0;
 
`;

const Buttons = styled.div`
  /* display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start; */

  .buttons-container {
    display: flex;
    flex-direction: column;
    margin-top: 6rem;
  }
`;

const StyledButton = styled.div`
  /* display: flex;
  align-items: center; */
  text-decoration: none;
  font-family: ${theme.fontFamily.headersFont};
  letter-spacing: 0.07rem;
  padding: 0.7rem 1rem;
  border: none;
  border-radius: 0.5rem;
  transition: background-color 0.3s ease, color 0.3s ease;
  cursor: pointer;
  margin-bottom: 1rem;

  font-weight: 700;
  display: inline-block;
  padding: 0.5rem 1rem;
  margin-right: 0.5rem;
  color: ${theme.colors.blueDark};
  text-decoration: none;
  background-color: ${theme.colors.azure};
  border-right: 4px solid ${theme.colors.yellow};
  border-bottom: 4px solid ${theme.colors.yellow};
  transition: all 0.3s ease;

  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
  a {
    text-decoration: none;
    text-align: center;
  }
  &:hover {
    /* background-color: #0056b3; */
  }
`;

const CloseButton = styled.button`
  background-color: #d5dfd2;
  /* color: white; */
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.5rem;
  /* font-size: 1rem; */
  cursor: pointer;
  transition: padding background-color 0.3s ease;
  height: 4rem;
  width: 6rem;

  margin: 1rem auto a {
    text-decoration: none;
  }

  &:hover {
    transform: scale(1);
    padding-right: 4rem;
  }
`;
