import React from "react";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import styles from "./page.module.css";
import Link from "next/link";

const moveInLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }
  80% {
    transform: translateX(10px);
  }
  100% {
    opacity: 1;
    transform: translate(0);
  }
`;

const moveInBottom = keyframes`
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translate(0);
  }
`;

const MainPage = () => {
  return (
    <Section>
      <ProfileContainer>
        <MyName>Hi, I'm Massi</MyName>
        <ShortBio>A Web Developer based in Brussels</ShortBio>
      </ProfileContainer>
    </Section>
  );
};

export default MainPage;

const Section = styled.section`
  background: url("assets/Blue_particles.jpg") center/cover no-repeat;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 400px 3fr 1fr;
  padding-top: 0rem;
  z-index: 10000;
  height: 110vh;
  width: 100%;
  @media screen and (min-width: 1020px) {
    height: 100vh;
  }
  @media screen and (min-width: 1420px) {
    height: 88vh;
  }
`;

const ProfileContainer = styled.section`
  color: #fff;
  grid-column: 1/4;
  grid-row: 1/2;
  display: grid;
  margin-top: -8rem;
  @media screen and (min-width: 1020px) {
    margin-top: 0rem;
  }
`;
const MyName = styled.h1`
  font-family: "protest strike";
  font-weight: 300;
  text-align: center;
  grid-column: 1/4;
  grid-row: 2/3;
  font-size: 7rem;
  margin: 8rem auto;
  margin-top: 16rem;

  padding: 0.5rem;
  display: block;

  animation: ${moveInLeft} 1.5s ease-out;

  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(1.5px);
  -webkit-backdrop-filter: blur(1.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;
const ShortBio = styled.p`
  grid-column: 1/4;
  grid-row: 3/4;
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 2px;
  word-spacing: 2px;
  line-height: 1.5;
  text-align: center;
  text-transform: uppercase;
  color: #b29d6e;
  margin: 0rem auto;
  margin-top: -3rem;
  padding: 1.5rem;

  animation: ${moveInBottom} 1.5s ease-out;

  background: rgba(17, 24, 45, 0.597);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(52.5px);
  -webkit-backdrop-filter: blur(1.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  @media screen and (min-width: 1020px) {
    margin-top: 0rem;
  }
`;
