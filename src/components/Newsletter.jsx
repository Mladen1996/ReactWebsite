import React from 'react';
import newsIcon from '../images/homepage/newsletter.png';
import background from '../images/homepage/newsletterBackground.png';
import styled from 'styled-components';

const Background = styled.section`
background:url(${background});
background-size: cover;
`;
const Container = styled.div`
display: flex;
    width: 80%;
    margin: 0 auto;
    padding-top: 30px;
    padding-bottom:30px;
    justify-content: space-between;
    align-items: center;

    h3{
        color: white;
        font-size: 2.8rem;
        font-family: 'Open Sans', sans-serif;
        font-weight: 600;
        margin-bottom: 10px;
        margin-top: 0;
    
    }
    p {
        color:white;
        font-size: 1.6rem;
        line-height: 2.8rem;
        font-family: 'Open Sans', sans-serif;
    
    }
    input{
        background: rgba(255,255,255,0.2);
        border:2px solid white;
        height:40px;
        padding:6px 20px 6px 20px;
        font-size: 1.6rem;
        color: #fff;
        font-family: 'Open Sans', sans-serif;
        width: 100%;
    }
    input::placeholder{
        color:white;
    }
    button{
        background: rgba(255,255,255,0.2);
        border:2px solid white;
        height: 56px;
        padding: 6px 40px 6px 40px;
        font-size: 1.5rem;
        font-weight: 600;
        color: white;
        width: 60%;
    }
    button:hover{
        background-color: white;
        color:red;
        cursor: pointer;
    }
    @media (max-width: 992px) {
        display: flex;
        flex-direction: column;
    }
`;
const Column = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    &:nth-child(1){
        width:50%;
      padding-right:2.5%;
    }
    &:nth-child(2){
        width:45%;
        justify-content: center;
    }
    @media (max-width: 992px) {
        display: flex;
      flex-direction: column;
      align-items: flex-start;
      &:nth-child(1){
        width:100%;
        display: flex;
        flex-direction: row;
        padding-bottom: 5%;
    }
    &:nth-child(2){
        width:100%;
        flex-direction: row;
    }
    .notice{
        padding-left:2%;
    }
    }
`;

const Newsletter = ({ titleNewsletter,textNewsletter,buttonText,placeholder }) => (
    <Background>
            <Container>

                <Column>
                <div>
                <img src={newsIcon} alt="newsletter"></img>
                </div>
                <div className="notice">
               
                <h3>{titleNewsletter}</h3>
                    <p>
                       {textNewsletter}
                </p>
                </div>
                </Column>
                <Column>
                    
                    <input type="text" placeholder={placeholder}></input>
                    
            <button type="submit">{buttonText}</button>
                    
               
               
                </Column>



              
               
                <div>
              
                </div>

            </Container>
        </Background>
  );
  



export default Newsletter;