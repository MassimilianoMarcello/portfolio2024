import styled from "@emotion/styled";
import theme from '@/app/theme_emotion';


export const HeaderSection = () => (
  <TextContainer>
  <p className="greeting">Explore My Web Dev Journey:  <span className="section-title">Projects</span>  </p>
</TextContainer>
  );

  
  const TextContainer = styled.div`
  
  text-align: center;
  color: #0f2556;
  margin: 7rem auto;
  font-family: ${theme.fontFamily.primaryFont};
  font-weight:900;
  font-size:2rem;
  padding-top: 1rem;
  /* background-color: #feeb64; */
  background-color: #f0f0f0 ;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.1),
    0 6px 12px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1);
  /* border-bottom-right-radius: 3rem;
  border-bottom-left-radius: 3rem; */
  .greeting {
    margin-top: -2rem;

  }
  .section-title {
    font-size: 5rem;
    margin-top: -1.5rem;
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
      font-size: 3rem;
      margin-top: -5rem;
      padding: 0;
      color: #b29d6e;
      
    }
    .greeting{
        margin-top: -1rem;
        margin-left: -1rem;
    font-size: 2rem;
      }
  }
`;