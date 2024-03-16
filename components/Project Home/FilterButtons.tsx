import styled from "@emotion/styled";
import theme from "@/app/theme_emotion";

export const FilterButtons = ({ technologies, selectedTechnology, onClick, onClearClick }) => (
    <ButtonsBox>
      <h4>Filter:</h4>
      <ListButtonTechnologies>
        {technologies.map((technology, index) => (
          <li key={index}>
            <Button
              onClick={() => onClick(technology)}
              style={{
                fontWeight: technology === selectedTechnology ? "bold" : "normal",
              }}
            >
              {technology}
            </Button>
          </li>
        ))}
        {selectedTechnology && (
          <li className="clear-button">
            <ClearFilterButton onClick={() => onClearClick(null)}>
              All
            </ClearFilterButton>
          </li>
        )}
      </ListButtonTechnologies>
    </ButtonsBox>
  );

  const ButtonsBox = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto 0rem;
  padding-top: 2rem;
  margin-bottom: -1rem;

  h4 {
    font-size: 1.5rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 700;
    color: #fff;
    padding: 2rem 0.5rem;
    margin-bottom: 1rem;
    background-color: #254fa9;
    border-top: solid 0.5rem #feeb64;
  }
  /* @media (min-width: 800px) {
    margin-right: 45rem;
  } */
`;


  const ListButtonTechnologies = styled.ul`
  border-top: solid 0.5rem #feeb64;
  padding-top: 0.2rem;
  margin-top: 2rem;
  text-decoration: none;
  list-style-type: none;
  display: flex;
  align-items: center;
  /* justify-content: left; */
  background-color: #f2f2f2;
  flex-wrap: wrap;
  li {
    /* padding: 1rem 0; */
  }
`;

const Button = styled.button`
  font-family: ${theme.fontFamily.customFont};
  text-transform: uppercase;
  padding: 0.5rem 1rem;

  border-radius: 0.25rem;

  outline: none;
  border: none;
  font-size: 1.2rem;
  font-weight: 700;
  color: #1b61d8;
  cursor: pointer;
  background-color: #f2f2f2;

  &:hover {
    transition: all 0.3s ease-out;
    background-color: transparent;
    background-color: #feeb64;
    color: #fff;
    border-radius: 0.25rem;
  }
`;

const ClearFilterButton = styled(Button)`
  background-color: #f6ff00;
`;

  