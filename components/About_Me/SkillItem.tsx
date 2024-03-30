import React, { useRef, useEffect, useState } from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import Image from "next/image";

type SkillItemProps = {
  delay: number;
  playAnimation: boolean; // Aggiungiamo la proprietà playAnimation
};

const bounceAnimation = keyframes`
    0%, 100% {
      transform: translateY(0);
    }
    10% {
      transform: translateX(-4px);
    }
    20% {
      transform: translateX(4px); 
    }
    30% {
      transform: translateY(0px);
    }
    40% {
      transform: translateY(-5px); 
    }
    50%, 100% {
      transform: translateY(2px);
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
  margin-bottom: 5rem;
  margin-left: 14rem;
  padding: 0 2rem;

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
    margin-bottom: 2rem;
    padding: 0rem;
    margin-left: 2rem;
    padding-bottom: 0rem;
  }
`;

const AnimatedImage = styled(Image)`
  margin: 1rem;
`;

const SkillItem = styled.li<SkillItemProps>`
  margin-right: 1rem;
  height: auto;
  animation: ${(props) => (props.playAnimation ? bounceAnimation : "none")} 14s infinite;
  animation-delay: ${(props) => props.delay}s;
`;

const Skills = ({ about }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [playAnimation, setPlayAnimation] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setPlayAnimation(true);
          } else {
            setPlayAnimation(false);
          }
        });
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <SkillsContainer ref={containerRef}>
      {about &&
        about.map((aboutData) =>
          aboutData.skillsName.map((skill, index) => (
            <SkillItem key={index} delay={index * 0.2} playAnimation={playAnimation}>
              <AnimatedImage
                src={skill.skillIconImage}
                width={50}
                height={50}
                alt={skill.name}
                title={skill.name}
              />
            </SkillItem>
          ))
        )}
    </SkillsContainer>
  );
};

export default Skills;
