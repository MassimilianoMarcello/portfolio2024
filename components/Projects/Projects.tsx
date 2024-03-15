"use client";
import { HeaderSection } from './HeaderSection';
import { StyledProjectCard} from './ProjectCard';
import {  ExpandedProjectCard} from './ExpandedProjectCard';
import {FilterButtons } from './FilterButtons';

import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";
import { getProjects } from "@/sanity/sanity.query";
import { PortableText } from "@portabletext/react";
import { ThemeProvider } from "@emotion/react";
import theme from "@/app/theme_emotion";




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
        <HeaderSection />
        <ProjectContainer>
          {filteredProjects.map((project, index) => (
            <StyledProjectCard key={index} project={project} onClick={handleCardClick} />
          ))}
        </ProjectContainer>
        {expandedProject && (
          <ExpandedProjectCard project={expandedProject} onCloseClick={handleCloseClick} />
        )}
        <FilterButtons
          technologies={Array.from(new Set(projects.flatMap((project) => project.technologies)))}
          selectedTechnology={selectedTechnology}
          onClick={handleFilterByTechnology}
          onClearClick={() => setSelectedTechnology(null)}
        />
      </Section>
    </ThemeProvider>
  );
}


const ProjectCard = styled.div`
  /* Stili per la carta di progetto */
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

const Section = styled.section`
  font-family: ${theme.fontFamily.customFont};
  margin-top: 10rem;
`;


const ProjectContainer = styled.div`
  /* Stili per il container dei progetti */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
`;

// const StyledProjectCard = styled.div`
//   /* Stili per la carta di progetto */
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

