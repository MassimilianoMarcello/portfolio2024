
import styled from '@emotion/styled';








// import { useState, useEffect } from 'react';

// const ProjectFilter = ({ projects, setFilteredProjects }) => {
//   const [selectedTechnologies, setSelectedTechnologies] = useState([]);
//   const [noProjectsMessage, setNoProjectsMessage] = useState(false);

//   const allTechnologies = projects.reduce((technologies, project) => {
//     project.technologies.forEach(tech => {
//       if (!technologies.includes(tech)) {
//         technologies.push(tech);
//       }
//     });
//     return technologies;
//   }, []);

//   useEffect(() => {
//     // Filtra i progetti ogni volta che le tecnologie selezionate cambiano
//     const filteredProjects = projects.filter(project =>
//       selectedTechnologies.every(tech => project.technologies.includes(tech))
//     );
//     setFilteredProjects(filteredProjects);

//     if (filteredProjects.length === 0) {
//       setNoProjectsMessage(true);
//     } else {
//       setNoProjectsMessage(false);
//     }
//   }, [selectedTechnologies, projects, setFilteredProjects]);

//   const handleToggleTechnology = (technology) => {
//     if (selectedTechnologies.includes(technology)) {
//       setSelectedTechnologies(selectedTechnologies.filter(tech => tech !== technology));
//     } else {
//       setSelectedTechnologies([...selectedTechnologies, technology]);
//     }
//   };

//   const handleClearSelection = () => {
//     setSelectedTechnologies([]);
//   };

//   return (
//     <Filter>
//       {allTechnologies.map((technology) => (
//         <button
//           key={technology}
//           onClick={() => handleToggleTechnology(technology)}
//           style={{ backgroundColor: selectedTechnologies.includes(technology) ? 'blue' : 'gray', color: 'white' }}
//         >
//           {technology}
//         </button>
//       ))}
//       <button onClick={handleClearSelection}>Clear</button>

//       {noProjectsMessage && (
//         <div style={{ backgroundColor: 'red', color: 'white', padding: '10px', marginTop: '10px' }}>
//         Oops! It looks like there are no projects with this combination of technologies yet.
//         </div>
//       )}
//     </Filter>
//   );
// };

// export default ProjectFilter;

import { useState, useEffect } from 'react';

const ProjectFilter = ({ projects, setFilteredProjects, setOpenProjectId }) => {
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

  useEffect(() => {
    // Filtra i progetti ogni volta che le tecnologie selezionate cambiano
    const filteredProjects = projects.filter(project =>
      selectedTechnologies.every(tech => project.technologies.includes(tech))
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
      setSelectedTechnologies(selectedTechnologies.filter(tech => tech !== technology));
    } else {
      setSelectedTechnologies([...selectedTechnologies, technology]);
    }
  };

  const handleClearSelection = () => {
    setSelectedTechnologies([]);
  };

  return (
    <Filter>
      {allTechnologies.map((technology) => (
        <TheButton
          key={technology}
          onClick={() => handleToggleTechnology(technology)}
          style={{
            backgroundColor: selectedTechnologies.includes(technology) ? '#feeb64' : 'gray',
            color: selectedTechnologies.includes(technology) ? 'blue' : 'white'
          }}        >
          {technology}
        </TheButton>
      ))}
      <ClearButton onClick={handleClearSelection}>Clear</ClearButton>

      {noProjectsMessage && (
        <SorryMessage style={{ backgroundColor: 'red', color: 'white', padding: '10px', marginTop: '30px' }}>
          Sorry, there are currently no projects with these technologies.
        </SorryMessage>
      )}
    </Filter>
  );
};

export default ProjectFilter;




const Filter = styled.section`
margin-top: 13rem;
`

const TheButton = styled.button`
  background-color: #11182d;
  color: white;
  padding: 10px 20px;
  border: none;
  border-bottom: 3px solid #feeb64; 
  border-right: 3px solid  #feeb64;
  transition: all 0.3s ease;

  &:hover {
    background-color: #feeb64; 

  }

  &:active {
    transform: translateY(2px); 
    border-bottom: 3px solid transparent; 
  border-right: 3px solid transparent;
  }
`;

const ClearButton = styled.button`
  background-color: white;
  color: #11182d;
  padding: 10px 20px;
  border: none;
  border-bottom: 3px solid #11182d; 
  border-right: 3px solid #11182d; 
  transition: all 0.3s ease;

  &:hover {
    background-color: #feeb64;

  }

  &:active {
    transform: translateY(2px); 
    border-bottom: 3px solid transparent; 
  border-right: 3px solid transparent;
  }
`;

const SorryMessage = styled.button``




