import styled from "@emotion/styled";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";


export  const ExpandedProjectCard = ({ project, onCloseClick }) => (
    <ExpandedCard onClick={onCloseClick}>
      <ExpandedCardContent>
        <div className="title-box">
          <h2>{project.name}</h2>
          <Image
            src={project.image}
            alt={project.imageAlt}
            width={140}
            height={100}
            className="project-image"
            key={project._id}
          />
        </div>
        <PortableText value={project.content[0]} />
        <Link href={`/projects/${project.slug}`}>In detail</Link>
      </ExpandedCardContent>
    </ExpandedCard>
  );
  

  const ExpandedCard = styled.div`
  /* Stili per la scheda espansa */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  /* hhhh */
`;

const ExpandedCardContent = styled.div`
  /* Stili per il contenuto della scheda espansa */
  background-color: white;
  padding: 2rem;
  padding-bottom: 0;
  border-radius: 1rem;
  max-width: 80%;
  max-height: 80%;
  overflow-y: auto;

  .title-box {
    display: flex;
    justify-content: space-between;
    margin-top: -2rem;
    h2{
      margin-top: 1rem;
      margin-left: -2rem;
      background-color:#feeb64 ;
      padding: 1rem;
      text-transform:uppercase;
    }

  }
  a{
      text-decoration:none;
      background-color:#feeb64 ;
      font-size:1.5rem;
      text-transform:uppercase;
      text-align:  right;
      margin-left: 20rem;
      margin-bottom: -2rem;

    }
  @media (min-width: 62rem) {
    max-width: 40%;
    max-height: 40%;
  }
`;