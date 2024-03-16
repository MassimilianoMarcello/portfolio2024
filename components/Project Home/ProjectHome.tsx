"use client";

import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { getProjects } from '@/sanity/sanity.query';
import { PortableText } from '@portabletext/react';
import { ThemeProvider } from '@emotion/react';
import theme from '@/app/theme_emotion';

const Section = styled.section`
  background-color: #f0f0f0;
  padding: 20px;
  margin-top: 6rem;
`;

const TextContainer = styled.div`
  text-align: center;
  color: #0f2556;
  margin: 5rem auto;
  font-family: 'Amatic SC', sans-serif;
  padding-top: 1rem;
  background-color: #feeb64;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.1),
    0 6px 12px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1);
  border-bottom-right-radius: 3rem;
  border-bottom-left-radius: 3rem;
  .greeting {
    margin-top: -1rem;
    font-size: 1.7rem;
  }
  .section-title {
    font-size: 3rem;
    margin-top: -2.5rem;
    padding: 0;
    color: #b29d6e;
    margin-bottom: 0rem;
  }
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  z-index: 999;
  @media (max-width: 600px) {
    margin-top: 5.1rem;
    .section-title {
      font-size: 2rem;
      margin-top: -2rem;
      padding: 0;
      color: #b29d6e;
    }
  }
`;

const ProjectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 5rem;
`;

const ProjectCard = styled.div`
  min-width: 30rem;
  max-width: 40rem;
  max-height: 30rem;
  margin: 4rem;
  background-color: #f0fff4;
  border: 0.2rem solid yellow;
  transition: all 0.2s ease;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  
`;

const ImageProject = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  img {
    width: 100%;
    height: 40%;
    @media screen and (min-width: 720px), (min-width: 1000px) {
      margin: 0 auto;
    }
  }
  .project-technologies {
    padding: 1rem;
    margin: 1rem;
    *:first-of-type {
      margin: 1.5rem;
      padding: 1.5rem;
      background-color: #254fa9;
      border-radius: 0.5rem;
    }
  }
  h3 {
    margin: 0.5rem 0;
    margin-left: 2rem;
    background-color: #aaebfe;
    font-weight: ${theme.fontWeight.bold};
    font-family: ${theme.fontFamily.customFont};
    color: #fff;
    font-size: 2rem;
  }
`;

const ProjectInfo = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  padding: 10px;
  margin-right: -1rem;
  margin-top: 0rem;
  background-color: #1d3b7a;
  color: white;
  transition: all 0.6s ease;
  opacity: 0;
  transform: translateY(100%);
  h3 {
    font-family: ${theme.fontFamily.customFont};
    margin: 0;
    padding-left: 2rem;
    background-color: #fff;
    color: #1d3b7a;
    font-size: 2rem;
  }
  .my-portable-text {
    font-size: 1rem;
  }

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }

  &.hidden {
    opacity: 0;
    pointer-events: none; 
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: inherit;
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
        <TextContainer>
          <p className="greeting">Hello everyone! Check out </p>
          <h2 className="section-title">My Projects</h2>
        </TextContainer>
        <ProjectContainer className="project-container">
          {projects.map((project) => (
            <ProjectCard key={project._id} onClick={() => toggleProjectInfo(project._id)}>
              <ImageProject>
                <h3>{project.name}</h3>
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  width={300}
                  height={200}
                  className="project-image"
                  key={project._id}
                />
                <p className="project-technologies">{project.technologies}</p>
              </ImageProject>
              <ProjectInfo className={`project-info ${project._id === openProjectId ? 'visible' : 'hidden'}`}>
                <h3>{project.name}</h3>
                <PortableText value={project.content} />
                <div className="text-details">
                  <p className="details">Click for Details 🚀</p>
                </div>
              </ProjectInfo>
            </ProjectCard>
          ))}
        </ProjectContainer>
      </Section>
    </ThemeProvider>
  );
}
