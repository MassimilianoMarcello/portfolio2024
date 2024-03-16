"use client";
import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { getProjects } from "@/sanity/sanity.query";
import { PortableText } from "@portabletext/react";
import { ThemeProvider } from "@emotion/react";
import theme from "@/app/theme_emotion";
import { FilterButtons } from "./FilterButtons";
import { HeaderSection } from "./HeaderSection";
import { ProjectsContainer } from "./ProjectContainer";

const Section = styled.section`
  background-color: #f0f0f0;
  padding: 1rem;
  margin-top: 26rem;
`;



export default function Home() {
    const [projects, setProjects] = useState([]);
    const [selectedTechnology, setSelectedTechnology] = useState(null);
  
    

  
    // const filteredProjects = selectedTechnology
    //   ? projects.filter((project) =>
    //       project.technologies.includes(selectedTechnology)
    //     )
    //   : projects;
  
    return (
      <ThemeProvider theme={theme}>
        <HeaderSection/>
     <Section>
         <ProjectsContainer/>
          {/* <FilterButtons
            technologies={Array.from(
              new Set(projects.flatMap((project) => project.technologies))
            )}
            selectedTechnology={selectedTechnology}
            onClick={handleFilterByTechnology}
            onClearClick={() => setSelectedTechnology(null)}
          /> */}
        </Section>
      </ThemeProvider>
    );
  }