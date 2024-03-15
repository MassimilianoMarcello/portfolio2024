"use client";
import { HeaderSection } from "./HeaderSection";
import { StyledProjectCard } from "./ProjectCard";
import { ExpandedProjectCard } from "./ExpandedProjectCard";
import { FilterButtons } from "./FilterButtons";

import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";
import { getProjects } from "@/sanity/sanity.query";
import { PortableText } from "@portabletext/react";
import { ThemeProvider } from "@emotion/react";
import theme from "@/app/theme_emotion";
import HeroSvg from "./HeroSvg";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [expandedProject, setExpandedProject] = useState(null);
  const [selectedTechnology, setSelectedTechnology] = useState(null);

  useEffect(() => {
    async function fetchProjects() {
      const fetchedProjects = await getProjects();
      setProjects(fetchedProjects);
    }
    fetchProjects();
  }, []);

  const handleCardClick = (project) => {
    setExpandedProject(project);
  };

  const handleCloseClick = () => {
    setExpandedProject(null);
  };

  const handleFilterByTechnology = (technology) => {
    setSelectedTechnology(technology);
    setExpandedProject(null); // Chiude eventuali schede aperte
  };

  // Filtraggio dei progetti in base alla tecnologia selezionata
  const filteredProjects = selectedTechnology
    ? projects.filter((project) =>
        project.technologies.includes(selectedTechnology)
      )
    : projects;

  return (
    <ThemeProvider theme={theme}>
      <Section>
        <Background>
          <HeroSvg />
          <ProjectContainer>
            {filteredProjects.map((project, index) => (
              <StyledProjectCard
                key={index}
                project={project}
                onClick={handleCardClick}
              />
            ))}
            {expandedProject && (
              <ExpandedProjectCard
                project={expandedProject}
                onCloseClick={handleCloseClick}
              />
            )}
          </ProjectContainer>

          <FilterButtons
            technologies={Array.from(
              new Set(projects.flatMap((project) => project.technologies))
            )}
            selectedTechnology={selectedTechnology}
            onClick={handleFilterByTechnology}
            onClearClick={() => setSelectedTechnology(null)}
          />
        </Background>

        <HeaderSection />
      </Section>
    </ThemeProvider>
  );
}
const Background = styled.div`
  position: relative;
 
  /* height: 100%; */

  /* background-color:#66d4fd  ; */
  background-color: #4aa6db;
  background-color: #3a8abf;
  background-color: #2e6d9e;
  :first-of-type{
    /* height: auto; */
  
  }
`;
const Section = styled.section`
  font-family: ${theme.fontFamily.customFont};
  margin: 0 -1rem;
  margin-top: -5rem;
 
  padding-top: 0rem;
  @media screen and (min-width: 920px) {
    /* margin-top: -45rem; */
    padding-top: 10rem;
   
  }
`;
const ProjectCard = styled.div``;

const ProjectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  margin-left: 2rem;
  margin-top: 0rem;

  /* overflow: hidden; */
  height: auto;
  @media screen and (min-width: 920px) {
     margin-top: -55rem; 
   
   
  }

`;
