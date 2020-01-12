import React from 'react';
import styled from 'styled-components';

const CardWraper = styled.section`
display:flex;
flex-direction:row;
align-items:center;
width:50%;
margin-bottom:2%;
@media (max-width: 768px) {
    width:100%;
    margin:5% 0;
}
`;
const Image=styled.section`
background:url(${props => props.src});
background-size:cover;
width:80px;
height:80px;
border-radius:40px;
`;
const Column=styled.div`
display:flex;
flex-direction:column;
justify-content:flex-start;
padding-left:5%;
width:80%;
`;
const Name=styled.p`
color:#353556;
margin-bottom: 5px;
font-size: 2.2rem;
font-weight: 500;
line-height: 1.4;
font-family:'Exo 2',sans-serif;
margin-top:0;
width:100%;
`;
const Position=styled.span`
color:#444;
font-size: 1.5rem;
font-family:'Open Sans',sans-serif;
width:100%;
`;
const AboutMember=({element},props)=>{{
        return(

        <CardWraper>

        <Image src={element.image}></Image>
        <Column>
        <Name>{element.name}</Name>
        <Position>{element.position}</Position>
        </Column>

        </CardWraper>

        );

}}
export default AboutMember;