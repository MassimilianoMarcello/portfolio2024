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
        <p className="greeting">Hello everyone! Check out </p>
        <h2 className="section-title">My Projects</h2>
      </TextContainer>

      <ProjectContainer className="project-container">
        {projects.map((project) => (
          <StyledLink
            href={`/projects/${project.slug}`}
            key={project._id}
            className="project-link"
          >
            <div className="project-name">{project.name}</div>
          </StyledLink>
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

  border-bottom-right-radius: 3rem;
  border-bottom-left-radius: 3rem;
  /* border: 1px solid rgba(255, 255, 255, 0.18); */
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

const StyledLink = styled(Link)`
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
  height: 10rem;
  width: 40rem;
  margin: 2rem;

  background-color: #eaf6f9;
  text-decoration: none;
  font-size: 2rem;
  align-items: center;
  color: #afae7f;
  font-family: "Quicksand", sans-serif;
  text-transform: uppercase;
  font-weight: 200;
  display: flex;
  justify-content: center;
  align-items: flex-start;
box-shadow: blue 0px 0px 0px 2px inset, rgb(255, 255, 255) 10px -10px 0px -3px;
transition: background-color 0.3s ease;
&:hover {
  border: 2px solid #ff69b4;
border-image: linear-gradient(to right, #1c09c8, #a1a0ff) 1;
}

@media (max-width: 600px) {
    width: 80%;
  }

  &:hover {
    transform: scale(1.05);
  }

  .project-name {
    margin-top: 1rem;
    margin-right: 1rem;
    background-color: #254fa9;
    padding: 1rem 0;
    width: 100%;
    text-align: center;
    color: #fff;
    transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
  }

  &:nth-child(even) {
    margin-right: auto;
    margin-left: 2rem;
    border-right: solid 1rem #254fa9;
  }

  &:nth-child(odd) {
    margin-left: auto;
    margin-right: 2rem;
    border-left: solid 1rem #254fa9;
  }
`;

const Section = styled.section`
  background-color: #171d35;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  
`;

const ProjectContainer = styled.div`
  font-family: "Quicksand", sans-serif;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding-top: 0rem;
  margin-top: 12rem;
`;
