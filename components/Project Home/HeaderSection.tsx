import React from "react";
import styled from "@emotion/styled";
import theme from "@/app/theme_emotion";


const HeaderSection = ({ projects, setFilteredProjects, setOpenProjectId }) => {
  return (
    <Container>
      <TextContainer>
        <p className="greeting">
          Explore My Web Dev Journey:{" "}
          <span className="section-title">Projects</span>{" "}
        </p>
      </TextContainer>
  
    </Container>
  );
};

const Container = styled.div`

  `;

const TextContainer = styled.div`
  text-align: center;
  color: #0f2556;
  margin: 1rem auto;
  margin-top: 4rem;
  font-family: ${theme.fontFamily.primaryFont};
  font-weight: 900;
  font-size: 5rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
 


  background-color: #f0f0f0;

  .greeting {
    margin-top: 0rem;
    padding-top: 4rem;
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
    margin-top: 4rem;
    padding-top: 2rem;
   
    .greeting {
      margin-top: -1rem;
      margin-left: -1rem;
      font-size: 3rem;
    }
    .section-title {
    font-size: 4rem;
    margin-top: -5rem;
    padding: 0;
    color: #b29d6e;
    margin-bottom: 5rem;
  }

  }
`;

export default HeaderSection;

