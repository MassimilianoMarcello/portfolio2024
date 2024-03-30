import styled from "@emotion/styled";
import theme from "@/app/theme_emotion";

const HeaderSection = () => {
  return (
    <Container>
      <TextContainer>
        <p className="greeting">
          Exploring Frontend: 
         <br />
          <span className="section-title">My Path</span>{" "}
        </p>
      </TextContainer>
    </Container>
  );
};

const Container = styled.div`
padding-bottom: 0rem;

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
  padding-bottom: 4rem;
  background-color: #f0f0f0;
 
  @media (min-width: 1400px) {
    margin-top: -2rem;
  }

  .greeting {
    margin-top: 0rem;
    padding-top: 4rem;
    letter-spacing:.2rem ;
    

  }
  .section-title {
    font-size: 5rem;
    margin-top: -5rem;
    padding: 0;
    padding-bottom: 1rem;
 
    color: #b29d6e;
    margin-bottom: 0rem;
        margin-right: -2rem;
  
    padding-bottom: 2rem;
  }

  width: 100%;
  z-index: 999;
  @media (max-width: 600px) {
    margin-top: 2rem;
    padding-top:0rem;
    margin-bottom: 2rem;
padding-bottom: 2rem;
    .greeting {
      margin-top: -1rem;
      margin-left: -1rem;
      font-size: 4.4rem;
      
    }
    .section-title {
      font-size: 4.5rem;
      margin-top: -5rem;
      padding: 0;
      color: #b29d6e;
      margin-bottom: 5rem;
      padding-bottom:3rem;
      padding: 2rem;
      
    }
  }
  @media (min-width: 1000px) {
    padding-top: 0rem;
    padding-bottom: 0rem;
  }
`;

export default HeaderSection;
