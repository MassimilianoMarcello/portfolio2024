"use client";

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
        <TextContainer>
          <p className="greeting">Hello everyone! Check out </p>
          <h2 className="section-title">My Projects</h2>
        </TextContainer>
        {/* Technologies by filter */}
        {/* BUTTONS */}

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
              {/* <PortableText value={expandedProject.content[1]} /> */}
              <Link href={`/projects/${expandedProject.slug}`}>In detail</Link>
            </ExpandedCardContent>
          </ExpandedCard>
        )}
        <ButtonsBox>
          <h4>Filter:</h4>

          <ListButtonTechnologies>
            {Array.from(
              new Set(projects.flatMap((project) => project.technologies))
            ).map((technology, index) => (
              <li key={index}>
                <Button
                  onClick={() => handleFilterByTechnology(technology)}
                  style={{
                    fontWeight:
                      technology === selectedTechnology ? "bold" : "normal",
                  }}
                >
                  {technology}
                </Button>
              </li>
            ))}
            {selectedTechnology && (
              <li className="clear-button">
                <ClearFilterButton onClick={() => setSelectedTechnology(null)}>
                  All
                </ClearFilterButton>
              </li>
            )}
          </ListButtonTechnologies>
        </ButtonsBox>
      </Section>
    </ThemeProvider>
  );
}

const Description = styled.a``;


