
import { useEffect, useState } from 'react';
import styled from '@emotion/styled';

import theme from '@/app/theme_emotion';

import  ProjectInfos  from './ProjectInfo';


const ProjectList = ({ projects, openProjectId, toggleProjectInfo }) => {
  return (
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
          <ProjectInfos project={project} openProjectId={openProjectId} />
        </ProjectCard>
      ))}
    </ProjectContainer>
  );
};

export default ProjectList;

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

