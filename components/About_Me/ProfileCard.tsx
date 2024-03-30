// ProfileCard.js

import React from 'react';
import styled from '@emotion/styled';
import SkillItem from './SkillItem'; // Assicurati di importare correttamente il componente SkillItem



const ProfileCard = ({ aboutData }) => {
  return (
    <ProfileContainer>
      {aboutData.map((about, index) => (
        <div key={about._id} className="description">
          <p className="about-description">
            I specialize in frontend web development. I have extensive
            experience with technologies such as JavaScript, CSS, and
            frameworks like React.js and Next.js. Additionally, I'm proficient
            in integrating Headless CMS systems for efficient content management.
          </p>
          <p className="about-description">{about.description}</p>
        </div>
      ))}
    </ProfileContainer>
  );
};

export default ProfileCard;

const ProfileContainer = styled.section`
  .description {
    font-family: "Quicksand", sans-serif;
    padding: 3rem;
    margin-top: -1rem;
    margin-bottom: 6rem;
    padding: 0 10rem;
  }
  .about-description {
    font-family: "Quicksand", sans-serif;
    font-optical-sizing: auto;
    font-size: 1.2rem;
    font-weight: 300;
    letter-spacing: 2px;
    word-spacing: 5px;
    margin-left: -4rem;
    margin-top: -3rem;
    text-align: left;
    padding-bottom: 2rem;
    line-height: 1.6;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 600px) {
    margin:0 ;
    margin-top: 4rem;
    padding-bottom: 4rem;
    .description {

   padding: 2rem;
   padding-bottom: 0rem;
  }
  .about-description {
    font-family: "Quicksand", sans-serif;
    font-optical-sizing: auto;
    font-size: 1.2rem;
 margin-left: 0rem;
 padding-bottom: 3rem;

      }
  }
`;
