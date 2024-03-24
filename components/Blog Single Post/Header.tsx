import React from "react";
import styled from "@emotion/styled";
import theme from "@/app/theme_emotion";
import Image from "next/image";

const StyledImage = styled.img`
  width: 100%; /* Occupa tutta la larghezza della pagina */
  height: 5rem; /* Altezza automatica per mantenere le proporzioni dell'immagine */
  filter: blur(5px); /* Applica uno sfocatura all'immagine */
  /* padding: 0;
  margin-top: -10rem; */
`;

const HeaderSection = ({ title, image }) => {
  return (
    <Container>
      <TextContainer>
        {image && (
          <StyledImage
            src={image}
            alt="Header Image"
            width={500}
            height={500}
          />
        )}
        <div className="greeting">{title}</div>
      </TextContainer>
    </Container>
  );
};

const Container = styled.div`
  /* Stili per il container principale, se necessario */
`;

const TextContainer = styled.div`
  text-align: center;
  color: #0f2556;
  margin: 1rem auto;
  margin-top: 4rem;
  font-family: ${theme.fontFamily.primaryFont};
  font-weight: 900;
  font-size: 5rem;
  padding-top: 6rem;
  padding-bottom: 2rem;

  background-color: #f0f0f0;

  .greeting {
    margin-top: -2rem;
  }

  width: 100%;
  z-index: 999;
  @media (max-width: 600px) {
    margin-top: 7rem;
    padding-top: 2rem;

    .greeting {
      margin-top: -1rem;
      margin-left: -1rem;
      font-size: 2rem;
    }
  }
`;

export default HeaderSection;
