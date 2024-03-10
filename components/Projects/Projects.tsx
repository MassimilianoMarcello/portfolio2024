"use client";

import { getProjects } from "@/sanity/sanity.query";
import Image from "next/image";
import Link from "next/link";
import styled from "@emotion/styled";

export default async function Home() {
  const projects = await getProjects();

  return (
    <Section>
      <TextContainer>
        <p className="greeting">Hello everyone! Check out my projects!</p>
        <h2 className="section-title">My Projects</h2>
      </TextContainer>

      <ProjectContainer className="project-container">
        {projects.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project._id}
            className="project-link"
          >
            {/* {project.image && (
              <Image
                src={project.image}
                alt={project.name}
                width={150}
                height={150}
                className="project-image"
              />
            )} */}
            <div className="project-name">{project.name}</div>
          </Link>
        ))}
      </ProjectContainer>
    </Section>
  );
}
const TextContainer = styled.div`
  text-align: center;
  color: #0f2556;
  margin: 6rem auto;
  font-family: "Amatic SC", sans-serif;

  padding-top: 1rem;

  background-color: #0f2556;
  background-color: #feeb64;
  box-shadow: 0 8px 32px 0 rgba(7, 12, 74, 0.37);

  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  .greeting {
    margin-top: -0.7rem;
    font-size: 1.7rem;
  }

  .section-title {
    font-size: 3rem;
    margin-top: -0.7rem;
    padding: 0;
    color: #b29d6e;
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

const Section = styled.section`
  background-color: #171d35;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProjectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding-top: 0rem;
  margin-top:20rem;

  .project-link {
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.3s ease;
    height: 20rem;
    width: 20rem;
    margin: 2rem;
    border-left: solid 1rem #254fa9;
    background-color: #eaf6f9;
    text-decoration: none;
    font-size: 3rem;
    align-items: center;
    color: #afae7f;
    font-family: "Amatic SC", sans-serif;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;

  @media (max-width: 600px) {
    padding-top: 0rem;
    flex-direction: column;
  }

  
    &:hover {
      transform: scale(1.05);
    }

    .project-name {
      margin-top: 1rem;
      margin-right:1rem;
      background-color: #254fa9;
      padding: 1rem 0;
      width: 100%;
      text-align: center;
      color: #fff;
    }
  }
`;