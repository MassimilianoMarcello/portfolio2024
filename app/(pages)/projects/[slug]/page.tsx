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

const TitleContainer =styled.div`
  text-align: center;
  margin-top:0rem;
`

const HowIMade =styled.h1`
 font-family:${theme.fontFamily.primaryFont};
    background-color:${theme.colors.platinum} ;
  font-size: 5rem;
    margin-top: 0rem;
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
    color: #b29d6e;
    margin-bottom: 0rem;
`

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
  margin-top: 3rem;
  font-size:1.3rem;
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
  `;

