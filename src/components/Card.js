import React from 'react';
import LocalizedLink from './LocalizedLink';
import LanguageSwitch from './LanguageSwitch';
import styled from 'styled-components';

const Card = ({ element }, props) => {
  const CardWraper = styled.div`
    width:19.7%;
    position: relative;
    border: 1px solid rgb(209, 205, 205);
    background: rgb(255, 255, 255);
    color: black;
    &:hover {
      border: 1px solid rgba(243, 24, 115, 0.897);
    }
    &:hover {
      .span {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        font-size: 1.7rem;
        font-weight: 700;
        color: white;
        bottom: 0;
        background: rgba(243, 24, 115, 0.897);
        z-index: 2;
        width: 100%;
        height: 100%;
      }
    }
  
    @media (max-width: 1024px) {
      width: 33%;
    }
  
    @media (max-width: 600px) {
      width: 49.4%;
    }
    @media (max-width: 400px) {
      width: 100%;
    }
  `;

  const MyImg = styled.img`
    width: 100%;
  `;

  const Span = styled.span`
    display: none;
    position: absolute;
  `;

  return (
    <>
      <CardWraper>
        <a target="_blank" href={element.url}>
          <MyImg src={element.image} alt={element.alt} />
  <Span className="span">{element.status}</Span>
        </a>
      </CardWraper>
    </>
  );
};

export default Card;
