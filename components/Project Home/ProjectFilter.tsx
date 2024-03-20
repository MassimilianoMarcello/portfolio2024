import styled from "@emotion/styled";
import Image from "next/image";
import { useState, useEffect } from "react";
import theme from "@/app/theme_emotion";

const ProjectFilter = ({ projects, setFilteredProjects, setOpenProjectId }) => {
  const [selectedTechnologies, setSelectedTechnologies] = useState([]);
  const [noProjectsMessage, setNoProjectsMessage] = useState(false);

  const allTechnologies = projects.reduce((technologies, project) => {
    project.technologies.forEach((tech) => {
      if (!technologies.includes(tech)) {
        technologies.push(tech);
      }
    });
    return technologies;
  }, []);

  useEffect(() => {
    // Filtra i progetti ogni volta che le tecnologie selezionate cambiano
    const filteredProjects = projects.filter((project) =>
      selectedTechnologies.every((tech) => project.technologies.includes(tech))
    );
    setFilteredProjects(filteredProjects);

    if (filteredProjects.length === 0) {
      setNoProjectsMessage(true);
    } else {
      setNoProjectsMessage(false);
    }

    // Chiudi eventuali ProjectInfo aperti quando si applica il filtro
    setOpenProjectId(null);
  }, [selectedTechnologies, projects, setFilteredProjects, setOpenProjectId]);

  const handleToggleTechnology = (technology) => {
    if (selectedTechnologies.includes(technology)) {
      setSelectedTechnologies(
        selectedTechnologies.filter((tech) => tech !== technology)
      );
    } else {
      setSelectedTechnologies([...selectedTechnologies, technology]);
    }
  };

  const handleClearSelection = () => {
    setSelectedTechnologies([]);
  };

  return (
    <div>
   <Filter style={{ display: noProjectsMessage ? 'none' : 'flex' }}>
        {allTechnologies.map((technology) => (
          <TheButton
            key={technology}
            onClick={() => handleToggleTechnology(technology)}
            style={{
              backgroundColor: selectedTechnologies.includes(technology)
                ? "#feeb64"
                : "#1d3b7a ",
              color: selectedTechnologies.includes(technology)
                ? "#1d3b7a "
                : "#f0f0f0",
            }}
          >
            {technology}
          </TheButton>
        ))}
        <ClearButton onClick={handleClearSelection}>Clear</ClearButton>
      </Filter>
      {noProjectsMessage && (
        <SorryMessage>
          <Image
            src="/assets/decoration_logoe.png"
            alt="mass dev logo"
            width={70}
            height={70}
          />
          Oops! It looks like there are no projects with this combination of
          technologies yet.
          <ClearButton onClick={handleClearSelection}>Clear</ClearButton>

        </SorryMessage>
      )}
    </div>
  );
};

export default ProjectFilter;

const Filter = styled.section`
  margin-top: -14rem;
  margin-left: -50rem;

  display: flex;
  flex-wrap: wrap;
  flex-direction:column;
  gap: 0.5rem;
  position: fixed;
  z-index: 111111111111;
  animation: slideIn 1.5s forwards;
  animation-fill-mode: forwards;
  @media (max-width: 600px) {
    margin-top: -4rem;
  }
  @keyframes slideIn {
    from {
      margin-left: -50rem;
    }
    to {
      margin-left: 0;
    }
  }
`;

const TheButton = styled.button`
  font-family: ${theme.fontFamily.primaryFont};
  letter-spacing: 0.07rem;
  padding: 0.7rem 1rem;
  padding-left: 0.2;
  border: none;
  border-radius: 0.5rem;
  transition: background-color 0.3s ease, color 0.3s ease;
  cursor: pointer;
margin-left: 1rem;

  &:hover {
    background-color: #feeb64;
  }
`;

const ClearButton = styled.button`
  background-color: white;
  color: #1d3b7a;
  border: 2px solid #1d3b7a;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #feeb64;
    color: #1d3b7a;
  }
`;

const SorryMessage = styled.div`
  background-color: #1d3b7a;
  margin: 8rem;
  margin-top:-12rem;
  margin-bottom: 12rem;
  padding: 1.5rem;
  border-radius: 0.5rem;
  font-size: 1.2rem;
  color: #f0f0f0;
  display: inline-block;
  text-align: center;
  animation: fadeIn 1.5s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-2rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
