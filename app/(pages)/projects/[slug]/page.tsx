"use client";
import { getProject } from "@/sanity/sanity.query";
import { PortableText } from "@portabletext/react";
import styled from "@emotion/styled";
import Link from "next/link";
import Image from "next/image";

import theme from '@/app/theme_emotion';
type Props = {
  params: { slug: string };
};

export default async function Project({ params }: Props) {
  const project = await getProject(params.slug);

  return (
    <ProjectContainer>
      <ContentWrapper>
        
         <TitleContainer className="button-container">
          <HowIMade className="HowIMade">How I Made</HowIMade>
          <ProjectName className="title-project">{project.name}</ProjectName>
       </TitleContainer> 
        <ProjectDescription className="project-description">
          <PortableText value={project.content} />
        </ProjectDescription>
        
      </ContentWrapper>

      <Buttons>
          <StyledButton>
            <Link href={project.githubUrl}>
        
              Github
            </Link>
          </StyledButton>

          <StyledButton>
            <Link href={project.url}>Visit Website </Link>
          </StyledButton>
          <StyledButton>
            <Link href={`/projects}`}>Return </Link>
          </StyledButton>
        </Buttons>




        {/* <p className="status">Status project: {project.status}</p> */}
                    {/* <p className="last-update">
                      Last update:{" "}
                      {moment(project._updateAt).format("DD-MM-YYYY")}
                    </p> */}
                    {/* <p className="date-creation">
                      Created: {moment(project._createdAt).format("DD-MM-YYYY")}
                    </p> */}
                          {/* <Link href={project.url}>
                  <h1>Visit website</h1>
                </Link>
                <Link href={project.githubUrl}>
                  <h1>See code</h1>
                </Link> */}
    </ProjectContainer>
  );
}
const ProjectDescription = styled.div`
  margin: 1rem 3rem;
  color: #333333;
  line-height: 1.6;
  letter-spacing: 0.05em;
  margin-top: 3rem;
  font-size:1.3rem;
`;
const ProjectContainer = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: center; */
  height: auto;
  width: 50%;
  margin: 5rem auto;
  margin-top: 7rem;
  background-color: #f5f5f5;
  border-right: 4px solid ${theme.colors.yellow};
  border-left: 4px solid ${theme.colors.yellow};
 /*  */
 @media screen and (max-width: 600px) {
  width: 100%;
 }
`;

const ContentWrapper = styled.div`

  `;

const TitleContainer =styled.div`
  text-align: center;
  margin-top:4rem;
  border-bottom: 4px solid ${theme.colors.yellow};

`

const HowIMade =styled.h1`
 font-family:${theme.fontFamily.primaryFont};
    background-color:${theme.colors.azure};
  font-size: 5rem;
    margin-top: 2rem;
    padding-top: 1rem;
    color: ${theme.colors.blueDarkest};
    margin-bottom: 0rem;
`
const ProjectName =styled.h1`
 font-family:${theme.fontFamily.primaryFont};
    background-color:${theme.colors.blueDarkest} ;
  font-size: 5rem;
  margin-top: 0rem;
    padding: 1rem;
    color: ${theme.colors.azure};
    margin-bottom: 0rem;
`

const Buttons = styled.div`
  display: flex;
align-items:center;

`;

const StyledButton = styled.div`
  text-decoration: none;
  font-family: ${theme.fontFamily.headersFont};
  letter-spacing: 0.07rem;
  padding: 0.4rem 1rem;
  border-radius: 0.5rem;
  transition: background-color 0.3s ease, color 0.3s ease;
  cursor: pointer;
  margin-bottom: 1rem;
  font-weight: 700;
  color: ${theme.colors.blueDark};
  background-color: ${theme.colors.azure};
  border-right: 4px solid ${theme.colors.yellow};
  border-bottom: 4px solid ${theme.colors.yellow};
  display: inline-block;
  margin-left: 0.5rem;

  a {
    text-decoration: none;
    text-align: center;
    font-weight: 700;
    font-size: 0.8rem;
    color: ${theme.colors.blueDark};
  }

  &:hover {
    background-color: ${theme.colors.yellow};
    border-right: 4px solid ${theme.colors.azure};
    border-bottom: 4px solid ${theme.colors.azure};
  }
`;


