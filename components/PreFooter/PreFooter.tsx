
import Link from "next/link";
import styled from "@emotion/styled";


const PreFooter = () => {
  const logoe = "/assets/logie_2.png";
  return (
    <>
      <PreFooterBox className='prefooter-container'>
        <h1 className='prefooter-title'>Want to collaborate?</h1>
        <ContactMe>
        <Link href="mailto:massi@hotmail.it" className="link-contact">
        
        <p>Contact Me!</p>
        <img src={logoe} alt="mass dev logo" width={25} height={25} />
  
         
        </Link>
            </ContactMe>
       
      </PreFooterBox>
    </>
  );
};

export default PreFooter;

const PreFooterBox = styled.div`
  background-color: #feeb64;
  border-top: solid 0.2rem yellow;
  border-bottom: solid 0.2rem yellow;
  text-align: center;
  padding: 0.5rem;
  color: #16479c;
  margin-top: 0rem;
  font-family: "Quicksand", sans-serif;

  

  .prefooter-title {
    font-size: 20px;
  }
  
`;

const ContactMe = styled.div`

.link-contact{
  display: flex;
align-items:center;
justify-content:center;
margin-top: -1rem;

}

a {
   
   color: #0e306b;
   text-decoration: none;
 }
 img{
    margin-left:.5rem;
  
    background-color: aliceblue;
    border-radius:50%;
  }

`
