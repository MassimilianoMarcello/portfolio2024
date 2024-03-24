// codice filtro prima della sua asciugatura
// import React, { useState, useEffect, useCallback } from "react";
// import styled from "@emotion/styled";
// import theme from "@/app/theme_emotion";
// import NoProjectsMessage from "./NoProjectMessage";



// const ProjectFilter = ({ projects, setFilteredProjects, setOpenProjectId }) => {
//     const [selectedTechnologies, setSelectedTechnologies] = useState([]);
//     const [noProjectsMessage, setNoProjectsMessage] = useState(false);
//     const [showInvalidCombination, setShowInvalidCombination] = useState(false);
  
//     const allTechnologies = useCallback(() => {
//       return projects.reduce((technologies, project) => {
//         project.technologies.forEach((tech) => {
//           if (!technologies.includes(tech)) {
//             technologies.push(tech);
//           }
//         });
//         return technologies;
//       }, []);
//     }, [projects]);
  
//     useEffect(() => {
//       const filteredProjects = projects.filter((project) =>
//         selectedTechnologies.every((tech) => project.technologies.includes(tech))
//       );
//       setFilteredProjects(filteredProjects);
  
//       setNoProjectsMessage(filteredProjects.length === 0);
  
//       setOpenProjectId(null);
  
//       const filteredTechnologies = allTechnologies().filter(tech =>
//         selectedTechnologies.includes(tech)
//       );
  
//       setShowInvalidCombination(
//         selectedTechnologies.length > 0 && filteredProjects.length === 0
//       );
  
//     }, [selectedTechnologies, projects, setFilteredProjects, setOpenProjectId, allTechnologies]);
  
//     const handleToggleTechnology = (technology) => {
//       setSelectedTechnologies((prevTechnologies) => {
//         if (prevTechnologies.includes(technology)) {
//           return prevTechnologies.filter((tech) => tech !== technology);
//         } else {
//           return [...prevTechnologies, technology];
//         }
//       });
//     };
  
//     const handleClearSelection = () => {
//       setSelectedTechnologies([]);
//       setShowInvalidCombination(false);
//     };
  
//     return (
//       <div>
//         <Filter>
//           {allTechnologies().map((technology) => (
//             <TheButton
//               key={technology}
//               onClick={() => handleToggleTechnology(technology)}
//               style={{
//                 backgroundColor: selectedTechnologies.includes(technology)
//                   ? (showInvalidCombination ? "#ff0000" : "#feeb64")
//                   : "#1d3b7a",
//                 color: selectedTechnologies.includes(technology) ? "#1d3b7a" : "#fff",
//               }}
//             >
//               {technology}
//             </TheButton>
//           ))}
//           <ClearButton onClick={handleClearSelection}>Clear</ClearButton>
//         </Filter>
//         {noProjectsMessage && (
//           <NoProjectsMessage handleClearSelection={handleClearSelection} />
//         )}
//       </div>
//     );
//   };
  
//   export default ProjectFilter;
  
//   const Filter = styled.section`
//     margin-top: -14rem;
//     margin-left: -50rem;
  
//     display: flex;
//     flex-wrap: wrap;
//     flex-direction: column;
//     gap: 0.5rem;
//     position: fixed;
//     z-index: 111111111111;
//     animation: slideIn 1.5s forwards;
//     animation-fill-mode: forwards;
//     @media (max-width: 600px) {
//       margin-top: -4rem;
//     }
//     @keyframes slideIn {
//       from {
//         margin-left: -50rem;
//       }
//       to {
//         margin-left: 0;
//       }
//     }
//   `;
  
//   const TheButton = styled.button`
//     font-family: ${theme.fontFamily.primaryFont};
//     letter-spacing: 0.07rem;
//     padding: 0.7rem 1rem;
//     padding-left: 0.2;
//     border: none;
//     border-radius: 0.5rem;
//     transition: background-color 0.3s ease, color 0.3s ease;
//     cursor: pointer;
//     margin-left: 1rem;
  
//     &:hover {
//       background-color: #feeb64;
//     }
//   `;
  
//   const ClearButton = styled.button`
//     background-color: white;
//     color: #1d3b7a;
//     border: 2px solid #1d3b7a;
//     transition: background-color 0.3s ease, color 0.3s ease;
  
//     &:hover {
//       background-color: #feeb64;
//       color: #1d3b7a;
//     }
//   `;
  