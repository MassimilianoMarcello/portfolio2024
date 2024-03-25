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
          <StyledButton>
            <Link href={project.githubUrl}>
              {/* <img
                  src="/assets/social-github-octocat.png"
                  width={30}
                  height={30}
                  alt="github"
                /> */}
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
    font-size: 2.5rem;
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

// const StyledLink = styled.a`
//   position: absolute;
//   bottom: 0;
//   left: 2rem;
// text-decoration: none;
//   font-family: ${theme.fontFamily.headersFont};
//   letter-spacing: 0.07rem;
//   padding: 0.7rem 1rem;
//   border: none;
//   border-radius: 0.5rem;
//   transition: background-color 0.3s ease, color 0.3s ease;
//   cursor: pointer;
//   margin-bottom: 2.5rem;
//   font-size: 2rem;
//   font-weight: 700;
//   color: ${theme.colors.blueDark};
//   text-decoration: none;
//   background-color: ${theme.colors.azure};
//   border-right: 4px solid ${theme.colors.yellow};
//   border-bottom: 4px solid ${theme.colors.yellow};
// `;

// buttons

// const GitHub = styled(Link)`
//   display: flex;
//   align-items: center;
//   gap: 0.5rem;
//   font-size: 2rem;
// `;

const Buttons = styled.div`
  display: flex;
  /* flex-direction: row; */
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
  }
  &:hover {
    background-color: ${theme.colors.yellow};
    border-right: 4px solid ${theme.colors.azure};
    border-bottom: 4px solid ${theme.colors.azure};
  }
`;
