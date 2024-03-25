
import styled from "@emotion/styled";

const ClearButton = ({ onClick, children }) => {
  return <Button onClick={onClick}>{children}</Button>;
};

export default ClearButton;

const Button = styled.button`
  background-color: white;
  padding: 1rem 2rem;
  color: #1d3b7a;
  border: 2px solid #1d3b7a;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #feeb64;
    color: #1d3b7a;
  }
`;
