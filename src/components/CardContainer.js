import React from "react"

import styled from "styled-components"
import Card from "./Card"

const CardContainer=({cardsArray,sectionTitle})=>{

   const WraperDiv=styled.div`
   width:80%;
   margin: 2% auto;
   @media(max-width:768px){
       width:90%;
   }
   `
   const ContainerDiv=styled.div`
   display: flex;
    flex-direction: row;
    flex-wrap: wrap;
   `
   const MyTitle=styled.h2`
      margin: 0;
    font-size: 2rem;
    padding-bottom: 20px;
    color: rgb(66, 65, 65);
    position: relative;
    margin: 2% 0;
    font-family: 'Exo 2', sans-serif;
    &::after{
        background: #e8114b;
    position: absolute;
    left: 0;
    bottom: 0;
    content: "";
    height: 4px;
    width: 60px;
    }
   `


    return(
<WraperDiv>

     <MyTitle>{sectionTitle}</MyTitle>
        
            <ContainerDiv>
        {
            cardsArray.map(element=>{
                return <Card key={element.id} element={element}/>
            })

        }

        </ContainerDiv>
</WraperDiv>
    )
       
}

export default CardContainer