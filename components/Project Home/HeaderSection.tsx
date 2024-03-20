import React, { Component } from 'react';
import styled from "@emotion/styled";
import theme from "@/app/theme_emotion";
import ProjectFilter from './ProjectFilter';

interface HeaderSectionProps {
  projects: any[]; 
  setFilteredProjects: React.Dispatch<React.SetStateAction<any[]>>; 
  setOpenProjectId: React.Dispatch<React.SetStateAction<any>>; 
}

class HeaderSection extends Component<HeaderSectionProps> {
  render() {
    const { projects, setFilteredProjects, setOpenProjectId } = this.props;
    return (
      <Container>
        <TextContainer>
          <p className="greeting">
            Explore My Web Dev Journey:{" "}
            <span className="section-title">Projects</span>{" "}
          </p>
        </TextContainer>
        <ProjectFilter
          projects={projects}
          setFilteredProjects={setFilteredProjects}
          setOpenProjectId={setOpenProjectId}
        />
      </Container>
    );
  }
}

const Container = styled.div`

`;



export default HeaderSection;


const TextContainer = styled.div`
  text-align: center;
  color: #0f2556;
  margin: 1rem auto;
  margin-top: 4rem;
  font-family: ${theme.fontFamily.primaryFont};
  font-weight: 900;
  font-size: 5rem;
  padding-top: 6rem;
  padding-bottom: 2rem;

  background-color: #f0f0f0;

  .greeting {
    margin-top: -2rem;
  }
  .section-title {
    font-size: 5rem;
    margin-top: -5rem;
    padding: 0;
    color: #b29d6e;
    margin-bottom: 0rem;
  }

  width: 100%;
  z-index: 999;
  @media (max-width: 600px) {
    margin-top: 7rem;
    padding-top: 2rem;
    .section-title {
      font-size: 2rem;
      margin-top: -5rem;
      padding: 0;
      color: #b29d6e;
    }
    .greeting {
      margin-top: -1rem;
      margin-left: -1rem;
      font-size: 2rem;
    }
  }
`;
