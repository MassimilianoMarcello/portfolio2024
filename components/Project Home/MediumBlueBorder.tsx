
import styled from "@emotion/styled";
import theme from "@/app/theme_emotion";
import Link from "next/link";

const MediumBlueBorder = () => {
  return (
    <Section className="medium-golden-container">
      <Border>
      Topic Filter: Explore Project by Technology
     
      
      </Border>
    </Section>
  );
};

export default MediumBlueBorder;
const Section = styled.section`
margin-top: -6rem;
padding: 0rem;
width: 60.6%;
padding: 0.2rem;
margin-bottom: 2rem;
border-top:solid 0.05rem  ${theme.colors.bigYellow} ;
background-color:${theme.colors.blueDarkest};
 @media (min-width: 1400px) {
  background-color:${theme.colors.blueDarkest} ;
  width: 44.6%;
}
@media (max-width: 600px) {
  margin-bottom: 0rem;
  margin-top: -3rem;

  border-bottom:solid .001rem #fff ;
  width: 99%;
}

`

const Border = styled.h5`
padding: 0rem;
margin: .5rem;
color: ${theme.colors.white} ;

font-family:${theme.fontFamily.customFont};
font-size:1rem;
width: 100%;
text-align: center;
@media (min-width: 1400px) {

 }


`
