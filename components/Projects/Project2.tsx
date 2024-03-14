"use client";

import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";
import { getProjects } from "@/sanity/sanity.query";
import { PortableText } from "@portabletext/react";
import { ThemeProvider } from "@emotion/react";
import theme from "@/app/theme_emotion";

const Section = styled.section`
  margin-top: 10rem;
`;

const TextContainer = styled.div`
  /* Stili per il container di testo */
`;

const ProjectContainer = styled.div`
  /* Stili per il container dei progetti */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
`;

const ProjectCard = styled.div`
  /* Stili per la carta di progetto */
  width: calc(100% / 1); /* Inizia con una larghezza del 100% */
  margin: 1rem;
  background-color: #f9f9f9;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  }

  @media (min-width: 768px) {
    width: calc(100% / 2); /* Su tablet, mostra due card per riga */
  }

  @media (min-width: 992px) {
    width: calc(100% / 3.2); /* Su desktop, mostra tre card per riga */
  }
`;

const ImageProject = styled.div`
  text-align: center;
  .image-project {
    width: 95%;
  }
`;

const ProjectInfo = styled.div`
  /* Stili per le informazioni del progetto */
  padding: 20px;
`;

const StyledLink = styled.a`
  /* Stili per il link */
  text-decoration: none;
  color: inherit;
`;

const ExpandedCard = styled.div`
  /* Stili per la scheda espansa */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  /* hhhh */
`;

const ExpandedCardContent = styled.div`
  /* Stili per il contenuto della scheda espansa */
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  max-width: 80%;
  max-height: 80%;
  overflow-y: auto;

  .title-box {
    display: flex;
    justify-content: space-around;
  }
  @media (min-width: 992px) {
    max-width: 40%;
    max-height: 40%;
  }
`;

// Resto del codice rimane invariato

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
      ? projects.filter(project => project.technologies.includes(selectedTechnology))
      : projects;
  
    return (
      <ThemeProvider theme={theme}>
        <Section>
          <TextContainer>{/* Contenuto del container di testo */}</TextContainer>
          {/* Filtri per tecnologie */}
          <div>
            <h4>Filter by Technology:</h4>
            <ul>
              {Array.from(new Set(projects.flatMap(project => project.technologies))).map((technology, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleFilterByTechnology(technology)}
                    style={{ fontWeight: technology === selectedTechnology ? "bold" : "normal" }}
                  >
                    {technology}
                  </button>
                </li>
              ))}
              {selectedTechnology && (
                <li>
                  <button onClick={() => setSelectedTechnology(null)}>Clear Filter</button>
                </li>
              )}
            </ul>
          </div>
          {/* Fine Filtri per tecnologie */}
          <ProjectContainer>
            {/* Mapping dei progetti filtrati */}
            {filteredProjects.map((project, index) => (
              <ProjectCard key={index}>
                <StyledLink onClick={() => handleCardClick(project)}>
                  <ImageProject>
                    <ProjectInfo>
                      <h3>{project.name}</h3>
                    </ProjectInfo>
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      width={200}
                      height={200}
                      className="project-image"
                      key={project._id}
                    />
                    {project.technologies.map((technology, techIndex) => (
                      <p className="project-technologies" key={techIndex}>
                        {technology}
                      </p>
                    ))}
                  </ImageProject>
                </StyledLink>
              </ProjectCard>
            ))}
          </ProjectContainer>
  
          {/* Visualizzazione della scheda espansa */}
          {expandedProject && (
            <ExpandedCard onClick={handleCloseClick}>
              <ExpandedCardContent>
                <div className="title-box">
                  <h2>{expandedProject.name}</h2>
                  <Image
                    src={expandedProject.image}
                    alt={expandedProject.imageAlt}
                    width={140}
                    height={100}
                    className="project-image"
                    key={expandedProject._id}
                  />
                </div>
                <PortableText value={expandedProject.content[0]} />
                <PortableText value={expandedProject.content[1]} />
                <Link href={`/projects/${expandedProject.slug}`}>wgy</Link>
              </ExpandedCardContent>
            </ExpandedCard>
          )}
        </Section>
      </ThemeProvider>
    );
  }
  
  const Description = styled.a``;
  