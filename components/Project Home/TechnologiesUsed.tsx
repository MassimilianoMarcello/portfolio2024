import styled from "@emotion/styled";
import theme from "@/app/theme_emotion";

const StyledTechnologiesUsed = styled.div`
  ul {
    margin-top: 2rem;
    list-style-type: none;
    padding: 0;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: .2rem;
    margin-left: 1rem;
    height: auto;
  }

  li {
    font-family: ${theme.fontFamily.headersFont};
    letter-spacing: 0.07rem;
    padding: 0.7rem 1rem;
    border: none;
    border-radius: 0.5rem;
    transition: background-color 0.3s ease, color 0.3s ease;
    cursor: pointer;
    margin-bottom: 1rem;

    font-size: .8rem;
    font-weight:700;

    display: inline-block;
    padding: 0.5rem 1rem;
    margin-right: 0.5rem;
    color: ${theme.colors.blueDark};
    text-decoration: none;
    background-color: ${theme.colors.azure};
    border-right: 4px solid ${theme.colors.yellow};
    border-bottom: 4px solid ${theme.colors.yellow};
    transition: all 0.3s ease;
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
