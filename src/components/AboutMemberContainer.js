import React from "react";
import styled from 'styled-components';

import AboutMember from "./AboutMember.js";

const AboutMemberContainer=({cardsArray,sectionMemberTitle},props)=>{

    const CardWraper = styled.section`
    width:80%;
    margin:0 auto;
@media (max-width: 768px) {
     width:90%;
}
    `;
    const H2Style = styled.h2`
    font-size: 2rem;
    padding-bottom: 20px;
    color: rgb(66, 65, 65);
    position: relative;
    margin: 2% 0;
    font-family: 'Exo 2', sans-serif;
  &:after{
        background: #e8114b;
        position: absolute;
        left: 0;
        bottom: 0;
        content: "";
        height: 4px;
        width: 60px;
    }
    `;
    const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    `;


    return(
<CardWraper>

     <H2Style>{sectionMemberTitle}</H2Style>
        
            <CardContainer>
        {
            
            cardsArray.map(element=>{
                return <AboutMember key={element.id} element={element}/>
            })

        }

        </CardContainer>
</CardWraper>
    )
       
}

export default AboutMemberContainer;