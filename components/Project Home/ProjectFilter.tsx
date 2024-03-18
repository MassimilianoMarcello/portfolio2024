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
      <Filter>
        {allTechnologies.map((technology) => (
          <TheButton
            key={technology}
            onClick={() => handleToggleTechnology(technology)}
            style={{
              backgroundColor: selectedTechnologies.includes(technology)
                ? "#feeb64"
                : "blue",
              color: selectedTechnologies.includes(technology)
                ? "blue"
                : "white",
            }}
          >
            {technology}
          </TheButton>
        ))}
        <ClearButton onClick={handleClearSelection}>Clear</ClearButton>
      </Filter>
      {noProjectsMessage && (
        <SorryMessage>
              <Image src="/assets/decoration_logoe.png" alt="mass dev logo" width={70} height={70} />
           
          Oops! It looks like there are no projects with this combination of
          technologies yet.
        </SorryMessage>
      )}
    </div>
  );
};

export default ProjectFilter;

const Filter = styled.section`
  margin-top: 17rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  position: fixed;
  z-index: 11;
`;

const TheButton = styled.button`

  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.5rem;
  transition: background-color 0.3s ease, color 0.3s ease;
  cursor: pointer;

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
  background-color: red;
  margin-top: 10rem;
  color: white;
  padding: 1rem;
  margin: 4rem;
  border-radius: 0.5rem;
  font-size: 4.2rem;
  animation: fadeIn 1.5s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-5rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
