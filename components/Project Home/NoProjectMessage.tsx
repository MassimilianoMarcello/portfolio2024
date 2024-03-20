import React from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import ClearButton from "./ClearButton"; 

const NoProjectsMessage = ({ handleClearSelection }) => {
  return (
    <MessageContainer>
      <Image
        src="/assets/decoration_logoe.png"
        alt="mass dev logo"
        width={70}
        height={70}
      />
      <p>
        Oops! It looks like there are no projects with this combination of
        technologies yet.
      </p>
      <ClearButton onClick={handleClearSelection}>Clear</ClearButton>
    </MessageContainer>
  );
};

export default NoProjectsMessage;

const MessageContainer = styled.div`
  background-color: #1d3b7a;
  margin: 8rem;
  margin-top: -12rem;
  margin-bottom: 12rem;
  padding: 1.5rem;
  border-radius: 0.5rem;
  font-size: 1.2rem;
  color: #f0f0f0;
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
`;
