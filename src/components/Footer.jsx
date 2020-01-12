import React from 'react';
import styled from 'styled-components';
import {FaFacebookF,FaInstagram,FaLinkedin} from 'react-icons/fa';

const Background = styled.section`
background-color:#353556 ;
`;
const Container = styled.div`
display: flex;
    width: 80%;
    margin: 0 auto;
    padding-top: 45px;
    padding-bottom:45px;
    justify-content: space-between;
    align-items: center;

    @media only screen and (max-width: 992px) {
        display: flex;
        flex-direction: column;
    }
`;

const Column = styled.div`
i {
    font-size: 2.4rem;
    color: white;
    padding-left: 10px;
    padding-right: 10px;
}
i:hover{
    cursor: pointer;
    color:red;
}
&:nth-child(1){
    font-size: 1.6rem;
    color: white;
}
@media only screen and (max-width: 992px){
    &:nth-child(1){
        padding-bottom:5%;
    }
}
`;
export const Facebook=styled(FaFacebookF)`
font-size: 24px;
color:white;
padding-right:5px;
&:hover{
color:#e8114b;
}
`;
export const Instagram=styled(FaInstagram)`
font-size: 24px;
color:white;
padding-right:5px;
&:hover{
    color:#e8114b;
    }
`;
export const Linkedin=styled(FaLinkedin)`
font-size: 24px;
color:white;
padding-right:5px;
&:hover{
    color:#e8114b;
}
`;

const Footer = ({ text }) => (
    <Background>
                <Container>
                    <Column>
                        {text}
                    </Column>
                    <Column>
                       <a href="https://www.facebook.com" target="_blank"><Facebook/></a>
                       <a href="https://www.instagram.com" target="_blank"><Instagram/></a> 
                       <a href="https://www.linkedin.com" target="_blank"><Linkedin/></a>
                    </Column>
               
                </Container>
            </Background>
  );
  



export default Footer;