"use client";
import { getProject } from "@/sanity/sanity.query";
import { PortableText } from "@portabletext/react";
import styled from "@emotion/styled";
import Link from "next/link";
import Image from "next/image";

type Props = {
  params: { slug: string };
};

export default async function Project({ params }: Props) {
  const project = await getProject(params.slug);

  return (
    <ProjectContainer>
      <ContentWrapper>
        <div className="button-container">
          <h1 className="title-project">{project.name}</h1>
        </div>
        <ProjectDescription className="project-description">
          <PortableText value={project.content} />
        </ProjectDescription>
        <Buttons>
          <div className="buttons-container">
            <StyledButton>
              <Link href={project.githubUrl}>
                <Image src="/github.png" width={50} height={50} alt="github" />
              </Link>
              Github
            </StyledButton>
          </div>
          <CloseButton className="close-button">
            <Link href="/projects">
              <Image src="/right.png" width={50} height={50} alt="close" />
            </Link>
          </CloseButton>
          <div className="buttons-container">
            <StyledButton>
              <Link href={project.url}>
                <Image src="/go.png" width={60} height={60} alt="github" />{" "}
              </Link>
            </StyledButton>
          </div>
        </Buttons>
      </ContentWrapper>
    </ProjectContainer>
  );
}

const Buttons = styled.div`
  display: flex;
  align-items: center;

  .buttons-container {
    text-align: center;
    margin: 1rem auto;
  }
`;
const ProjectDescription = styled.div`
  margin: 1rem 3rem;
  color: #333333;
  line-height: 1.6;
  letter-spacing: 0.05em;
`;
const ProjectContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 50%;
  margin: 5rem auto;
  background-color: #f5f5f5;
`;

const ContentWrapper = styled.div`
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  h1 {
    background-color: #254fa9;
    color: #fff;
    font-family: "Amatic SC", sans-serif;
    font-size: 2.5rem;
  }
  .button-container {
    text-align: center;
  }
`;

const StyledButton = styled.div`
  /* background-color: #007bff;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  /* cursor: pointer; */
  font-size: 1rem;
  transition: background-color 0.3s ease;
  */ a {
    text-decoration: none;
    text-align: center;
  }
  &:hover {
    /* background-color: #0056b3; */
  }
`;

const CloseButton = styled.button`
  background-color: #d5dfd2;
  /* color: white; */
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.5rem;
  /* font-size: 1rem; */
  cursor: pointer;
  transition: padding background-color 0.3s ease;
  height: 4rem;
  width: 6rem;

  margin: 1rem auto a {
    text-decoration: none;
  }

  &:hover {
    transform: scale(1);
    padding-right: 4rem;
  }
`;
