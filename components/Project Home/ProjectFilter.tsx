
import styled from '@emotion/styled';









import { useState } from 'react';

const ProjectFilter = ({ projects, setFilteredProjects }) => {
  const [selectedTechnologies, setSelectedTechnologies] = useState([]);
  const [noProjectsMessage, setNoProjectsMessage] = useState(false);

  const allTechnologies = projects.reduce((technologies, project) => {
    project.technologies.forEach(tech => {
      if (!technologies.includes(tech)) {
        technologies.push(tech);
      }
    });
    return technologies;
  }, []);

  const handleToggleTechnology = (technology) => {
    if (selectedTechnologies.includes(technology)) {
      setSelectedTechnologies(selectedTechnologies.filter(tech => tech !== technology));
    } else {
      setSelectedTechnologies([...selectedTechnologies, technology]);
    }
  };

  const handleFilterProjects = () => {
    const filteredProjects = projects.filter(project =>
      selectedTechnologies.every(tech => project.technologies.includes(tech))
    );
    setFilteredProjects(filteredProjects);

    if (filteredProjects.length === 0) {
      setNoProjectsMessage(true);
    } else {
      setNoProjectsMessage(false);
    }
  };

  const handleClearSelection = () => {
    setSelectedTechnologies([]);
    setFilteredProjects(projects);
    setNoProjectsMessage(false);
  };

  return (
    <Filter>
      {allTechnologies.map((technology) => (
        <button
          key={technology}
          onClick={() => handleToggleTechnology(technology)}
          style={{ backgroundColor: selectedTechnologies.includes(technology) ? 'blue' : 'gray', color: 'white' }}
        >
          {technology}
        </button>
      ))}
      <button onClick={handleFilterProjects}>Apply Filter</button>
      <button onClick={handleClearSelection}>Clear</button>

      {noProjectsMessage && (
        <div style={{ backgroundColor: 'red', color: 'white', padding: '10px', marginTop: '10px' }}>
          Sorry, there are currently no projects with these technologies.
        </div>
      )}
    </Filter>
  );
};

export default ProjectFilter;




const Filter = styled.section`
margin-top: 13rem;
`
