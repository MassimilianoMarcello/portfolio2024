import styled from "@emotion/styled";
import theme from "@/app/theme_emotion";

export const HeaderSection = () => (
  <TextContainer>
    <Greeting className="greeting">Hello everyone! Check out </Greeting>
    <SectionTitle className="section-title">My Projects:</SectionTitle>
  </TextContainer>
);

const TextContainer = styled.div`
  text-align: center;
  color: #0f2556;
  /* margin: 5rem auto; */
  margin-top: 5rem;

  font-family: "Amatic SC", sans-serif;

  padding-top: 1rem;
  @media screen and (max-width: 600px) {
    margin:  4rem;
  }
`;

const Greeting = styled.h2`
  margin-top: 1rem;
  padding-top: 3rem;
  font-size: 4.7rem;
  @media screen and (min-width: 600px) {
  }
`;

const SectionTitle = styled.h2`
  font-size: 5rem;
  font-weight:700;
  margin-top: -2.5rem;
  padding: 0;
  color: #fff;
  margin-bottom: 1rem;
  background-color: hsl(53, 99%, 69%);
  display: inline-block;

  @media screen and (min-width: 600px) {
  }
`;
