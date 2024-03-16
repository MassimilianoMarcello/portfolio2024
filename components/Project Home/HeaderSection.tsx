import styled from "@emotion/styled";
import theme from "@/app/theme_emotion";


export const HeaderSection = () => (

    <TextContainer>
      <p className="greeting">Hello everyone! Check out </p>
      <h2 className="section-title">My Projects</h2>
    </TextContainer>

    
  );

  
  const TextContainer = styled.div`
  text-align: center;
  color: #0f2556;
  /* margin: 5rem auto; */
  margin-top: 5rem;

  font-family: "Amatic SC", sans-serif;

  padding-top: 1rem;



  /* box-shadow: 0 8px 32px 0 rgba(7, 12, 74, 0.37); */
  /* box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1), 0 1rem 2rem rgba(0, 0, 0, 0.1),
    0 1.5rem 3rem rgba(0, 0, 0, 0.1), 0 2rem 4rem rgba(0, 0, 0, 0.1); */

  /* border-bottom-right-radius: 3rem;
  border-bottom-left-radius: 3rem; */
  /* border: 1px solid rgba(255, 255, 255, 0.18); */
  .greeting {
    margin-top: 1rem;
    padding-top: 3rem;
    font-size: 4.7rem;
  }

  .section-title {
    font-size: 5rem;
    margin-top: -2.5rem;
    padding: 0;
    color: #11182d ;
    margin-bottom: 10rem;
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
      font-size: 2.5rem;
      margin-top: -2rem;
      padding: 0;
      color: #b29d6e;
    }
  }
`;
