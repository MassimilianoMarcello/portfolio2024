import styled from '@emotion/styled';
import theme from "@/app/theme_emotion";

const StyledTechnologiesUsed = styled.div`
  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    font-family: ${theme.fontFamily.primaryFont};
    letter-spacing: 0.07rem;
    padding: 0.7rem 1.2rem;
    border: none;
    border-radius: 0.5rem;
    transition: background-color 0.3s ease, color 0.3s ease;
    cursor: pointer;
    margin-bottom: 0.5rem;
  }


`;

const TechnologiesUsed = ({ technologies }) => {
  return (
    <StyledTechnologiesUsed>
      <ul>
        {technologies.map((technology, index) => (
          <li key={index}>{technology}</li>
        ))}
      </ul>
    </StyledTechnologiesUsed>
  );
};

export default TechnologiesUsed;

