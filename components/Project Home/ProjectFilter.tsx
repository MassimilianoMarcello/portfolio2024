import { useState } from 'react';
import styled from '@emotion/styled';



const ProjectFilter = ({ projects, setFilteredProjects }) => {
  const [selectedTechnology, setSelectedTechnology] = useState('');

  const allTechnologies = projects.reduce((technologies, project) => {
    project.technologies.forEach(tech => {
      if (!technologies.includes(tech)) {
        technologies.push(tech);
      }
    });
    return technologies;
  }, []);

  const handleFilterByTechnology = (technology) => {
    if (selectedTechnology === technology) {
      // Se la stessa tecnologia è già selezionata, annulla il filtro
      setSelectedTechnology('');
      setFilteredProjects(projects);
    } else {
      // Altrimenti, filtra i progetti per la tecnologia selezionata
      setSelectedTechnology(technology);
      const filteredProjects = projects.filter(project =>
        project.technologies.includes(technology)
      );
      setFilteredProjects(filteredProjects);
    }
  };

  return (
    <Filter>
      {allTechnologies.map((technology) => (
        <button
          key={technology}
          onClick={() => handleFilterByTechnology(technology)}
          style={{ backgroundColor: selectedTechnology === technology ? 'blue' : 'gray', color: 'white' }}
        >
          {technology}
        </button>
      ))}
    </Filter>
  );
};

export default ProjectFilter;



const Filter = styled.section`
margin-top: 13rem;
`
