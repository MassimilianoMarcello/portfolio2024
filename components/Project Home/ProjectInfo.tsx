import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { getProjects } from '@/sanity/sanity.query';
import { PortableText } from '@portabletext/react';
import { ThemeProvider } from '@emotion/react';
import theme from '@/app/theme_emotion';
// import { HeaderSection } from './HeaderSection';

const ProjectInfos = ({ project, openProjectId }) => {


  return (
    
        <ProjectInfo className={`project-info ${project._id === openProjectId ? 'visible' : 'hidden'}`}>
                <h3>{project.name}</h3>
                <PortableText value={project.content[0]} />
                <div className="text-details">
                <StyledLink href={`/projects/${project.slug}`}>Click for Details 🚀</StyledLink>
                
                </div>
              </ProjectInfo>
    
  )
}

export default ProjectInfos

const ProjectInfo = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  padding: 10px;
  margin-right: -1rem;
  margin-top: 0rem;
  background-color: #1d3b7a;
  color: white;
  transition: all 0.7s ease;
  opacity: 0;
  transform: translateY(-100%);
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