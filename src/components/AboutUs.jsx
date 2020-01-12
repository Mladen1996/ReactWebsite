import React from 'react';
import styled from 'styled-components';
import Accordion from './Accordion.js';

const Container = styled.section`
display:flex;
align-items: center;
justify-content: space-between;
margin: 5% auto;
width:80%;
height:60vh;
@media (max-width: 992px) {
        height:80vh;
       
}
@media (max-width: 768px) {
    display:flex;
    flex-direction: column;
        margin:0 auto;
        width:90%;
        height:auto;
}
`;
const Column = styled.div`
width:48%;
height:100%;
    &:nth-child(1){
    padding-right:2%;
    
    }

    @media (max-width: 768px) {
        width:100%;
        &:nth-child(1){
        padding-right:0%;
            
    }
}
`;
const Title = styled.div`
position: relative;
`;
const TitleH2 = styled.h2`
color:#353556;
    font-size:2.6rem;
    font-weight: 500;
    line-height: 31px;
    padding-bottom: 21px;
    font-family: 'Exo 2', sans-serif;

&:after{
        background: #e8114b;
        position: absolute;
        left:0;
        bottom:0;
        content:"";
        height:4px;
        width:60px;
    
    }
`;
const Paragraph = styled.p`
font-size: 1.6rem;
color:#444;
font-family: 'Open Sans', sans-serif;
`;




const AboutUs = ({ titleAboutHome, textAboutHome1, textAboutHome2, textAboutHome3, accordion }) => (
    <Container>
        <Column>
            <Title>
                <TitleH2>{titleAboutHome}</TitleH2>
            </Title>

            <Paragraph>{textAboutHome1}</Paragraph>
            <Paragraph>{textAboutHome2}</Paragraph>
            <Paragraph>{textAboutHome3}</Paragraph>




        </Column>
        <Column>
            <Accordion accordion={accordion} />

        </Column>



    </Container>
)

export default AboutUs;