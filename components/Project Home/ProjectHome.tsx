"use client";

import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { getProjects } from '@/sanity/sanity.query';
import { PortableText } from '@portabletext/react';
import { ThemeProvider } from '@emotion/react';
import theme from '@/app/theme_emotion';
import { HeaderSection } from './HeaderSection';
import  ProjectList  from './ProjectList';


const Section = styled.section`
  background-color: #f0f0f0;
  padding: 20px;
  margin-top: 6rem;
`;
















export default function Home() {
  const [projects, setProjects] = useState([]);
  const [openProjectId, setOpenProjectId] = useState(null);

  const toggleProjectInfo = (projectId) => {
    setOpenProjectId(projectId === openProjectId ? null : projectId);
  };

  useEffect(() => {
    const fetchProjects = async () => {
      const projectsData = await getProjects();
      setProjects(projectsData);
    };
    fetchProjects();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Section>
        <HeaderSection />
        <ProjectList
          projects={projects}
          openProjectId={openProjectId}
          toggleProjectInfo={toggleProjectInfo}
        />
      </Section>
    </ThemeProvider>
  );
}