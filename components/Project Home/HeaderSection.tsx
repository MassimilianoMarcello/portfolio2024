import React, { Component } from 'react';
import styled from "@emotion/styled";
import theme from "@/app/theme_emotion";
import ProjectFilter from './ProjectFilter';

interface HeaderSectionProps {
  projects: any[]; // Inserisci il tipo corretto dei progetti
  setFilteredProjects: React.Dispatch<React.SetStateAction<any[]>>; // Tipo corretto per setFilteredProjects
  setOpenProjectId: React.Dispatch<React.SetStateAction<any>>; // Tipo corretto per setOpenProjectId
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
  /* Stili per il container principale, se necessario */
`;



export default HeaderSection;


const TextContainer = styled.div`
  text-align: center;
  color: #0f2556;
  margin: 7rem auto;
  font-family: ${theme.fontFamily.primaryFont};
  font-weight: 900;
  font-size: 5rem;
  padding-top: 1rem;
  padding-bottom: 2rem;
  /* background-color: #feeb64; */
  background-color: #f0f0f0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.1),
    0 6px 12px rgba(11, 9, 9, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1);
  /* border-bottom-right-radius: 3rem;
  border-bottom-left-radius: 3rem; */
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
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
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
