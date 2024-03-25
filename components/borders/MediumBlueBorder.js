
import styled from "@emotion/styled";
import theme from "@/app/theme_emotion";
import Link from "next/link";

const MediumBlueBorder = () => {
  return (
    <Section className="medium-golden-container">
      <Border>
      Topic Filter: Explore Articles by Subject
     
      
      </Border>
    </Section>
  );
};

export default MediumBlueBorder;
const Section = styled.section`
margin-top: -6rem;
`

const Border = styled.h5`
padding: 1rem;
color: ${theme.colors.white} ;
background-color:${theme.colors.blueDarkest} ;
font-family:${theme.fontFamily.customFont};
width: 100vh;
text-align: center;
`
