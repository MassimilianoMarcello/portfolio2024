

"use client";

import { getAboutMe } from "@/sanity/sanity.query";
import Image from "next/image";
import styled from "@emotion/styled";
import {keyframes } from "@emotion/react";
import Link from "next/link";
import "@/app/page.module.css";
import theme from "@/app/theme_emotion";

export default async function About() {
  const aboutData = await getAboutMe();

  return (
    <>
      <AboutContainer>
        <PersonalCard>
          <h1>Exploring Frontend: My Path</h1>

          {aboutData.map((about, index) => (
            <ProfileCard key={about._id}>
              <div className="description">
                <p className="about-description">
                  I specialize in frontend web development. I have extensive
                  experience with technologies such as JavaScript, CSS, and
                  frameworks like React.js and Next.js. Additionally, I'm
                  proficient in integrating Headless CMS systems for efficient
                  content management.
                </p>
                <p className="about-description">{about.description}</p>
              </div>
              <SkillsContainer>
                {about.skillsName.map((skill, skillIndex) => (
                  <SkillItem key={skillIndex} delay={index * 0.2 + skillIndex}>
                    <AnimatedImage
                      src={skill.skillIconImage}
                      width={50}
                      height={50}
                      alt={skill.name}
                      title={skill.name}
                    />
                  </SkillItem>
                ))}
              </SkillsContainer>
            </ProfileCard>
          ))}
        </PersonalCard>
      </AboutContainer>
    </>
  );
}

type SkillItemProps = {
  delay: number;
};

const bounceAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
`;

const AnimatedImage = styled(Image)`
  animation: ${bounceAnimation} 1s infinite;
  margin-top: 0.5rem;
`;
const SkillItem = styled.li<SkillItemProps>`
  margin-right: 1rem;
  animation: ${bounceAnimation} 4s infinite;
  animation-delay: ${(props) =>
    props.delay}s; 
`;
const PersonalCard = styled.section`


  background-color: #f0fff4;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(1.5px);
  border-radius: 15px;
  position: relative;
  margin: 4rem 16rem;
  margin-top: 6rem;
  
  h1 {

    font-family: ${theme.fontFamily.primaryFont};
    color:${theme.colors.blueDarkerPlus} ;
    font-size: 4rem;
    padding-top: 1rem;
    text-align: center;
  }
  @media (max-width: 1000px) {
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

const ProfileCard = styled.section`

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(6, auto);
  margin: -2rem 4rem;
  padding-bottom: 2rem;

  .description {
    font-family: "Quicksand", sans-serif;
    grid-column: 1/4;
    grid-row: 1/2;
    padding: 3rem;
    margin-left: 0rem;
    margin-top: -1rem;
    margin-bottom: 2rem;
  }
  .about-description {
    font-family: "Quicksand", sans-serif;
   
    font-optical-sizing: auto;
    font-size: 1.1rem;
    font-weight: 300;
    letter-spacing: 2px;
    word-spacing: 5px;
    margin: -1rem 1rem;
    text-align: left;
    padding-bottom: 2rem;
    line-height: 1.6;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  }
  /* @media (max-width: 1000px) {
  } */

  @media (max-width: 600px) {

    .description {
      padding: 0rem;
      margin-left: -2rem;
      margin-right: -2rem;
      margin-top: 0rem;
      grid-column: 1/4;
      grid-row: 2/3;
      padding-bottom: 0rem;
      padding-right: 0rem;
    }
    .about-description {
      margin: 0;
      font-size: 1rem;
    }
  }
`;
const SkillsContainer = styled.div`
  width: auto;
    height: auto;
  grid-column: 3/4;
  grid-row: 3/4;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  list-style-type: none;
  position: absolute;
  left: 0;
  bottom: 0;
  margin: -0.7rem auto;
  margin-left: 14rem;
  padding-bottom: 2rem;
  @media (max-width: 1000px) {
    width: auto;
    height: auto;
  }

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

const AboutContainer = styled.div`
  background: url("/assets/Blue_particles.jpg") center/cover no-repeat;
  /* height: auto;
  margin-top: 2rem;
  padding-top: 2rem;
  padding-bottom: 1rem;
  z-index: 10000; */
  /* width: auto;
    height: auto; */
  /* h1 {
    color: #343733;
    text-align: center;
  } */
  @media (max-width: 1000px) {
  }

  @media (max-width: 600px) {
    height: 160vh;
    margin-right: 0rem;
    padding-top: 4rem;
  }
`;




// he phrase "Digital Pathways: coding My ..."  is a good start, but it can be improved to be more informative and engaging. Here are some ways to complete the title depending on what you want to convey:

// If you want to talk about your web development journey:

// Digital Pathways: Coding My Way Through Web Development
// Digital Pathways: My Coding Journey as a Web Developer
// Digital Pathways: Building My Skills - Coding for Web Development
// If you want to showcase your coding skills:

// Digital Pathways: My Coding Prowess (a bit more informal)
// Digital Pathways: Showcasing My Coding Skills
// Digital Pathways: A Glimpse into My Coding Expertise
// If you want to invite people to explore your coding projects:

// Digital Pathways: Coding My Projects - Explore!
// Digital Pathways: My Coding Creations - Take a Look!
// Digital Pathways: Unveiling My Code - Explore My Projects
// Here are some additional tips:

// Keep it concise: Aim for a title that is under 10 words for better readability.
// Use strong verbs: Verbs like "coding," "building," or "exploring" add action and interest.
// Target your audience: If your website is aimed at potential clients, focus on showcasing your skills. If it's more personal, emphasize your journey.
// I hope this helps you create the perfect title for your section!