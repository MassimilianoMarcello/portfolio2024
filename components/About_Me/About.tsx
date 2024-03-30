"use client";

import { getAboutMe } from "@/sanity/sanity.query";
import Image from "next/image";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import Link from "next/link";
import "@/app/page.module.css";
import theme from "@/app/theme_emotion";
import HeaderSection from "./HeaderSection";
import ProfileCard from "./ProfileCard";

import React, { useEffect, useState } from "react";

import Skills from "./SkillItem";


export default function About() {
  const [aboutData, setAboutData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAboutMe();
      setAboutData(data);
    };
    fetchData();
  }, []);

  return (
    <AboutContainer>
      <PersonalCard>
        <HeaderSection />
        <ProfileCard aboutData={aboutData} />
        <Skills about={aboutData} />
      </PersonalCard>
    </AboutContainer>
  );
}

const AboutContainer = styled.div`
  background: url("/assets/Blue_particles.jpg") center/cover no-repeat;
  padding-bottom: 1rem;

  @media (max-width: 600px) {
    height: 240vh;
    margin-right: 0rem;
    padding-top: 4rem;
  }
`;

const PersonalCard = styled.section`
  background-color: #f0fff4;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(1.5px);
  border-radius: 15px;
  position: relative;
  margin: 4rem 16rem;
  margin-top: 6rem;
  padding-bottom: 8rem;

  @media (min-width: 1000px) {
    margin: 6rem 8rem;
  }

  @media (max-width: 600px) {
    padding-bottom: 8rem;
    margin: 6rem 2rem;
    h1 {
      font-size: 4rem;
      padding-top: 1rem;
      margin-left: 0rem;
    }
  }
`;

// Animation keyframes definition here...

const SkillsContainer = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  list-style-type: none;
  position: absolute;
  left: 0;
  bottom: 0;
  margin-bottom: 5rem;
  margin-left: 14rem;
  padding: 0 2rem;

  @media (max-width: 600px) {
    grid-column: 1/2;
    grid-row: 3/4;
    width: auto;
    height: auto;
    justify-content: center;
    margin-top: 0rem;
    margin-bottom: 2rem;
    padding: 0rem;
    margin-left: 2rem;
    padding-bottom: 0rem;
  }
`;
