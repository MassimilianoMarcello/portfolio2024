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
  border-left: solid 1px ${theme.colors.bigYellow};
  border-right: solid 1px ${theme.colors.bigYellow};

  @media (max-width: 600px) {
    height: 280vh;
    margin-right: 0rem;
    padding-top: 4rem;
    padding-bottom: 6rem;
  }
`;

const PersonalCard = styled.section`
  background-color: #f0fff4;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  /* backdrop-filter: blur(1.5px); */
  border-radius: 15px;
  position: relative;
  margin: 4rem 16rem;
  margin-top: 6rem;
  padding-bottom: 10rem;
  border-left: solid 1px ${theme.colors.bigYellow};
  border-right: solid 1px ${theme.colors.bigYellow};
  border-bottom: solid 1px ${theme.colors.bigYellow};
  width: auto;
  @media (min-width: 1000px) {
    margin: 6rem 8rem;
  }

  @media (max-width: 600px) {
    padding-bottom: 8rem;
    margin: 6rem 1rem;
    margin-bottom: 8rem;
    width: auto;
  }
`;
