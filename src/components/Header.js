import React from 'react';
import styled from 'styled-components';

import Link from '~src/components/LocalizedLink';
import headerBackground from '../images/homepage/header-background.jpg';

const Wrapper = styled.div`
  padding-top: 11.4%;
  padding-bottom: 14%;
  background-image: url(${headerBackground});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 0%;

  @media(max-width: 1200px) {
    padding-top: 13.5%;
    padding-bottom: 20%;
    background-size: 120%;
  }

  @media(min-width: 993px) {
    margin-top: 0;
  }

  @media(max-width: 768px) {
    padding-top: 12%;
  }

  @media(max-width: 580px) {
    padding-top: 8.5%;
  }

  @media(max-width: 376px) {
    padding-top: 3%;
  }

  @media(max-width: 321px) {
    padding-top: 1%;
  }

  h1 {
    font-size: 5rem;
    font-weight: 400;
    color: #fff;
    width: 100%;

    @media(max-width: 1200px) {
      font-size: 4rem;
    }

    @media(max-width: 992px) {
      font-size: 3.5rem;
    }

    @media(max-width: 768px) {
      font-size: 3rem;
      margin-bottom: 8%;
    }

    @media(max-width: 580px) {
      font-size: 2.5rem;
    }

    @media(max-width: 426px) {
      font-size: 2rem;
      margin-bottom: 2.5%;
    }

    @media(max-width: 376px) {
      margin-bottom: 6%;
    }

    @media(max-width: 321px) {
      margin-bottom: 4%;
    }
  }
`;

const InnerWrapper = styled.div`
  width: 80%;
  margin: auto;

  @media(max-width: 768px) {
    width: 90%;
  }
`;

const LinkButton = styled(props => <Link { ...props } />)`
  width: 27rem;
  text-align: center;
  padding-top: 18px;
  padding-bottom: 18px;
  color: #fff;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 1.6rem;
  font-weight: 400;
  background: rgba(232, 17, 75, 0.2);
  border-radius: 3px;
  border: 1px solid #e8114b;
  display: inline-block;
  margin-top: 0.7%;
  cursor: pointer;
  transition: all 0.3s ease-out 0s;

  @media(max-width: 768px) {
    font-size: 1.4rem;
    padding-top: 12px;
    padding-bottom: 12px;
    margin-bottom: 5%;
  }

  @media(max-width: 580px) {
    width: 20rem;
  }

  @media(max-width: 426px) {
    width: 18rem;
  }

  &:hover {
    background: #e8114b;
  }
`;

const Header = ({ textHeader1, textHeader2, textHeader3, textButton, linkSlug_oNama }) => {
  return (
    <Wrapper id="HeaderWrapper">
      <InnerWrapper>
        <h1 className="animated fadeInRight">{textHeader1}<br /> {textHeader2}<br /> {textHeader3}</h1>
        <LinkButton className="animated fadeInDown" to={linkSlug_oNama}>{textButton}</LinkButton>
      </InnerWrapper>
    </Wrapper>
  );
};

export default Header;
