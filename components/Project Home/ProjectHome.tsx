"use client";

import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { getProjects } from '@/sanity/sanity.query';
import { PortableText } from '@portabletext/react';
import { ThemeProvider } from '@emotion/react';
import theme from '@/app/theme_emotion';
import { HeaderSection } from './HeaderSection';
import ProjectList from './ProjectList';
import ProjectFilter from './ProjectFilter';
import { keyframes } from '@emotion/react';

const scaleInAnimation = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`;

const Animation = styled.div`
  display: flex;
  flex-direction: column;

  & > * {
    animation: ${scaleInAnimation} 1.3s ease-in-out forwards;
  }
`;



const Section = styled.section`
  background-color: #f0f0f0;
  padding: 1.25rem;
  margin-top: 6rem;
  min-height: calc(100vh - (6rem + 6rem));
`;

export default function Home() {
  const [projects, setProjects] = useState([]);
  const [openProjectId, setOpenProjectId] = useState(null);
  const [filteredProjects, setFilteredProjects] = useState([]);

  const toggleProjectInfo = (projectId) => {
    setOpenProjectId(projectId === openProjectId ? null : projectId);
  };

  useEffect(() => {
    const fetchProjects = async () => {
      const projectsData = await getProjects();
      setProjects(projectsData);
      setFilteredProjects(projectsData); // Inizialmente mostra tutti i progetti
    };
    fetchProjects();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Section>
        <HeaderSection />
        <ProjectFilter projects={projects} setFilteredProjects={setFilteredProjects} setOpenProjectId={setOpenProjectId}  />
       <Animation>
 <ProjectList
          projects={filteredProjects} // Mostra solo i progetti filtrati
          openProjectId={openProjectId}
          toggleProjectInfo={toggleProjectInfo}
        />
       </Animation>
        
      </Section>
    </ThemeProvider>
  );
}




