import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import theme from "@/app/theme_emotion";
import NoProjectsMessage from "./NoProjectMessage";
import MediumBlueBorder from "./MediumBlueBorder";

const ProjectFilter = ({ projects, setFilteredProjects, setOpenProjectId }) => {
  const [selectedTechnologies, setSelectedTechnologies] = useState([]);
  const [noProjectsMessage, setNoProjectsMessage] = useState(false);
  const [showInvalidCombination, setShowInvalidCombination] = useState(false);

  useEffect(() => {
    if (!projects) return;

    const filteredProjects = projects.filter((project) =>
      selectedTechnologies.every((tech) => project.technologies.includes(tech))
    );
    setFilteredProjects(filteredProjects);

    const filteredTechnologies = projects.reduce((technologies, project) => {
      project.technologies.forEach((tech) => {
        if (!technologies.includes(tech)) {
          technologies.push(tech);
        }
      });
      return technologies;
    }, []);

    setNoProjectsMessage(filteredProjects.length === 0);
    setShowInvalidCombination(
      selectedTechnologies.length > 0 && filteredProjects.length === 0
    );
    setOpenProjectId(null);
  }, [selectedTechnologies, projects, setFilteredProjects, setOpenProjectId]);

  const handleToggleTechnology = (technology) => {
    setSelectedTechnologies((prevTechnologies) =>
      prevTechnologies.includes(technology)
        ? prevTechnologies.filter((tech) => tech !== technology)
        : [...prevTechnologies, technology]
    );
  };

  const handleClearSelection = () => {
    setSelectedTechnologies([]);
    setShowInvalidCombination(false);
  };

  return (
    <FilterContainer>
      <MediumBlueBorder/>
      <Filter>
        {projects &&
          projects.reduce((technologies, project) => {
            project.technologies.forEach((tech) => {
              if (!technologies.includes(tech)) {
                technologies.push(tech);
              }
            });
            return technologies;
          }, []).map((technology) => (
            <TheButton
              key={technology}
              onClick={() => handleToggleTechnology(technology)}
              style={{
                backgroundColor: selectedTechnologies.includes(technology)
                  ? showInvalidCombination
                    ? "#ff0000"
                    : "#feeb64"
                  : "#1d3b7a",
                color: selectedTechnologies.includes(technology) ? "#1d3b7a" : "#fff",
              }}
            >
              {technology}
            </TheButton>
          ))}
        <ClearButton onClick={handleClearSelection}>Clear</ClearButton>
      </Filter>
      {noProjectsMessage && (
        <NoProjectsMessage handleClearSelection={handleClearSelection} />
      )}
    </FilterContainer>
  );
};

export default ProjectFilter;


const FilterContainer = styled.div`
margin-top: 8rem;
@media (max-width: 600px){
margin-top: 0rem;
}
`
const Filter = styled.section`
  margin-top: -1rem;
  margin-left: -50rem;

  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 0.5rem;
  z-index: 111111111111;
  animation: slideIn 1.5s forwards;
  animation-fill-mode: forwards;
  
  @media (max-width: 600px) {
 
    flex-direction: row;
    flex-wrap:wrap;
    /* justify-content: space-between; */
    margin-top: 0rem ;
  
    padding: 1rem 0;
    position: initial;
    background-color:${theme.colors.blueDarkest} ;
;

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
  padding: 0.7rem 1.5rem;
  padding-left: 0.2;

  border: none;
  border-radius: 0.5rem;
  transition: background-color 0.3s ease, color 0.3s ease;
  cursor: pointer;



 

  &:hover {
    background-color:${theme.colors.yellow};
  }
  @media (max-width: 600px) {
    margin-left: .4rem;
    padding: 1rem;
    margin-right: .2rem;
    
    margin-top: .5rem;
  }
`;

const ClearButton = styled.button`
  background-color:${theme.colors.white};
  color: ${theme.colors.blueDarker};
  border: 2px solid ${theme.colors.blueDarker};
  transition: background-color 0.3s ease, color 0.3s ease;
margin-right:0;
font-size:.9rem;

padding: 0 .9rem;
margin-top: .5rem;
margin-left: 1rem;
  &:hover {
    background-color:${theme.colors.yellow};
    color: ${theme.colors.blueDarker};
  }
  @media (max-width: 600px) {
    padding: 0 .9rem;
margin-top: .5rem;
margin-left: 10rem;
  }
`;
