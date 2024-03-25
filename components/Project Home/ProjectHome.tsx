"use client";

import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import theme from '@/app/theme_emotion';
import { getProjects } from '@/sanity/sanity.query';
import { ThemeProvider } from '@emotion/react';

import HeaderSection from './HeaderSection';
import ProjectList from './ProjectList';
import ProjectFilter from './ProjectFilter';

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
        <HeaderSection
          projects={projects}
          setFilteredProjects={setFilteredProjects}
          setOpenProjectId={setOpenProjectId}
        />
        
        <ProjectFilter 
          projects={projects}
          setFilteredProjects={setFilteredProjects}
          setOpenProjectId={setOpenProjectId}
        />
        <ProjectList
          projects={filteredProjects} 
          openProjectId={openProjectId}
          toggleProjectInfo={toggleProjectInfo}
        />
      </Section>
    </ThemeProvider>
  );
}

const Section = styled.section`

`;
