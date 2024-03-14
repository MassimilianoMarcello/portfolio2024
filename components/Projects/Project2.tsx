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
  font-family: ${theme.fontFamily.customFont};
  margin-top: 10rem;
`;

const TextContainer = styled.div`
  text-align: center;
  color: #0f2556;
  margin: 5rem auto;

  font-family: "Amatic SC", sans-serif;

  padding-top: 1rem;

  background-color: #0f2556;
  background-color: #feeb64;

  /* box-shadow: 0 8px 32px 0 rgba(7, 12, 74, 0.37); */
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1), 0 1rem 2rem rgba(0, 0, 0, 0.1),
    0 1.5rem 3rem rgba(0, 0, 0, 0.1), 0 2rem 4rem rgba(0, 0, 0, 0.1);

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
  /* Stili per il container dei progetti */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
`;

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

const ImageProject = styled.div`
  /*box-> contain title,image,used technologies   */
  text-align: center;
  .project-image {
    width: 100%;
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

const ProjectInfo = styled.div`
  /* Stile project information */
  padding: 0.1rem;
  background-color: #1d3b7a;
  color: #fff;
  font-size: 1.5rem;
  font-weight: 100;
  h3 {
    border-top: solid 2px #feeb64;
    margin: 0.5rem 6rem;
    padding: 0.5rem;
  }
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
  padding: 2rem;
  border-radius: 1rem;
  max-width: 80%;
  max-height: 80%;
  overflow-y: auto;

  .title-box {
    display: flex;
    justify-content: space-around;
  }
  @media (min-width: 62rem) {
    max-width: 40%;
    max-height: 40%;
  }
`;

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
                    height={200}
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
              <PortableText value={expandedProject.content[1]} />
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

const ButtonsBox = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto 0rem;
  padding-top: 2rem;
  margin-bottom: -1rem;

  h4 {
    font-size: 1.5rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 700;
    color: #fff;
    padding: 2rem 0.5rem;
    margin-bottom: 1rem;
    background-color: #254fa9;
    border-top: solid 0.5rem #feeb64;
  }
  /* @media (min-width: 800px) {
    margin-right: 45rem;
  } */
`;

const ListButtonTechnologies = styled.ul`
  border-top: solid 0.5rem #feeb64;
  padding-top: 0.2rem;
  margin-top: 2rem;
  text-decoration: none;
  list-style-type: none;
  display: flex;
  align-items: center;
  /* justify-content: left; */
  background-color: #f2f2f2;
  flex-wrap: wrap;
  li {
    /* padding: 1rem 0; */
  }
`;

const Button = styled.button`
  font-family: ${theme.fontFamily.customFont};
  text-transform: uppercase;
  padding: 0.5rem 1rem;

  border-radius: 0.25rem;

  outline: none;
  border: none;
  font-size: 1.2rem;
  font-weight: 700;
  color: #1b61d8;
  cursor: pointer;
  background-color: #f2f2f2;

  &:hover {
    transition: all 0.3s ease-out;
    background-color: transparent;
    background-color: #feeb64;
    color: #fff;
    border-radius: 0.25rem;
  }
`;

const ClearFilterButton = styled(Button)`
  background-color: #f6ff00;
`;
