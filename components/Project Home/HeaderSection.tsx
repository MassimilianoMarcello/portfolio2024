import styled from "@emotion/styled";


export const HeaderSection = () => (
  <TextContainer>
  <p className="greeting">Explore My Web Dev Journey: </p>
  <h2 className="section-title">Projects</h2>
</TextContainer>
  );

  
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