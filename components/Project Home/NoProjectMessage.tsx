import React from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import ClearButton from "./ClearButton";
import theme from "@/app/theme_emotion";

const NoProjectsMessage = ({ handleClearSelection }) => {
  return (
    <MessageContainer>
      <Image
        src="/assets/noFound.png"
        alt="mass dev logo"
        width={100}
        height={100}
      />
      <ClearButton onClick={handleClearSelection}>Clear</ClearButton>
      <p>Oops! No projects with this tech combo yet. Sorry!</p>
      
    </MessageContainer>
  );
};

export default NoProjectsMessage;

const MessageContainer = styled.div`
  font-family: ${theme.fontFamily.primaryFont};
  /* text-transform:uppercase; */
  /* background-color: #1d3b7a; */
  background-color: #f0f0f0;

  margin-top: -5rem;
  margin-bottom: 12rem;
  width: 100%;
  height: 100%;
  padding: 1.5rem;
  border-radius: 0.5rem;
  border:.2rem solid #1d3b7a;
  font-size: 1.2rem;
  color: #1d3b7a;
  display: inline-block;
  text-align: center;
  animation: fadeIn 1.5s ease;


  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-2rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  img {
    border-radius: 50%;
    margin-right: 2rem;
  }
`;
