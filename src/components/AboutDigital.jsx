import React from 'react';
import styled from 'styled-components';
import DigitalManifest from '../images/Digitalni-manifest.png';

 const Background = styled.section`
background-color:#f3f3f3;
width:100%;
`;

 const Container = styled.div`
width:80%;
margin:0 auto;
display:flex;
@media (max-width: 768px) {
    display:flex;
    flex-direction: column;
    width:90%;
}

`;

const Column = styled.div`
width:49%;
padding:5% 0;
&:nth-child(1){
    padding-right:2%;
}
@media (max-width: 768px) {
    display:flex;
    flex-direction: column;
    width:100%;
}
`;

const Paragraph = styled.p`
font-size:1.6rem;
font-family: 'Open Sans', sans-serif;
`;

const Image = styled.img`
background:url(${DigitalManifest});
width:100%;
height:450px;
background-repeat:no-repeat;
background-position:center center;
`;

const AboutDigital = ({textDigital1,textDigital2,textDigital3}) => (
    
        <Background>
            <Container>
               
               <Column>
               <Paragraph>
                    {textDigital1}
                  </Paragraph>
                  <Paragraph>
                  {textDigital2}
                  </Paragraph>
                  <Paragraph>
                {textDigital3}
                  </Paragraph>
               </Column>
                 
                <Column>
                    <Image></Image>
                </Column>
               
               
             
              </Container>
        </Background>
           
     
            
        );


export default AboutDigital;