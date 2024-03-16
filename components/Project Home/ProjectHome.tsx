"use client";
import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { getProjects } from "@/sanity/sanity.query";
import { PortableText } from "@portabletext/react";
import { ThemeProvider } from "@emotion/react";
import theme from "@/app/theme_emotion";
import { FilterButtons } from "./FilterButtons";
import { HeaderSection } from "./HeaderSection";

const Section = styled.section`
  background-color: #f0f0f0;
  padding: 1rem;
  margin-top: 26rem;
`;

const TextContainer = styled.div`
  text-align: center;
  color: #0f2556;
  margin: 5rem auto;
  font-family: "Amatic SC", sans-serif;
  padding-top: 1rem;
  background-color: #feeb64;
  box-shadow:
    0 2px 4px rgba(0, 0, 0, 0.1),
    0 4px 8px rgba(0, 0, 0, 0.1),
    0 6px 12px rgba(0, 0, 0, 0.1),
    0 8px 16px rgba(0, 0, 0, 0.1);
  border-bottom-right-radius: 3rem;
  border-bottom-left-radius: 3rem;
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
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 5rem;
`;

const ProjectCard = styled.div`
  min-width: 30rem;
  max-width: 40rem;
  max-height: 30rem;
  margin: 4rem;
  margin-top: 4rem;
  background-color: #f0fff4;
  border: 0.2rem solid yellow;
  transition: all 0.2s ease;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  &:hover {
    max-width: 100%;
    max-height: 100%;
  }
  &:hover .project-info {
    opacity: 1;
    transform: translateY(0);
  }
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 15%;
    background-color: #feeb64;
    z-index: 1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  &:hover:before {
    opacity: 1;
  }
`;

const ImageProject = styled.div`
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
    *:first-of-type {
      margin: 1.5rem;
      padding: 1.5rem;
      background-color: #254fa9;
      border-radius: 0.5rem;
    }
  }
  h3 {
    margin: 0.5rem 0;
    margin-left: 2rem;
    background-color: #aaebfe;
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
  background-color: #1d3b7a;
  color: white;
  transition: all 0.6s ease;
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

export default function Home() {
    const [projects, setProjects] = useState([]);
    const [selectedTechnology, setSelectedTechnology] = useState(null);
  
    useEffect(() => {
      async function fetchProjects() {
        try {
          const projectsData = await getProjects();
          setProjects(projectsData);
        } catch (error) {
          console.error("Error fetching projects:", error);
        }
      }
  
      fetchProjects();
    }, []); // Empty dependency array to run effect only once
  
    const handleFilterByTechnology = (technology) => {
      setSelectedTechnology(technology);
    };
  
    const filteredProjects = selectedTechnology
      ? projects.filter((project) =>
          project.technologies.includes(selectedTechnology)
        )
      : projects;
  
    return (
      <ThemeProvider theme={theme}>
        <HeaderSection/>
     <Section>
          <ProjectContainer>
            {filteredProjects.map((project, index) => (
              <ProjectCard key={index}>
                <Link href={`/projects/${project.slug}`} passHref>
                  <StyledLink>
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
                      <p className="project-technologies">
                        {project.technologies}
                      </p>
                    </ImageProject>
                    <ProjectInfo className="project-info">
                      <h3>{project.name}</h3>
                      <PortableText value={project.content} />
                      <div className="text-details">
                        <p className="details">Click for Details 🚀</p>
                      </div>
                    </ProjectInfo>
                  </StyledLink>
                </Link>
              </ProjectCard>
            ))}
          </ProjectContainer>
          <FilterButtons
            technologies={Array.from(
              new Set(projects.flatMap((project) => project.technologies))
            )}
            selectedTechnology={selectedTechnology}
            onClick={handleFilterByTechnology}
            onClearClick={() => setSelectedTechnology(null)}
          />
        </Section>
      </ThemeProvider>
    );
  }