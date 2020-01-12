import React from 'react';
import styled from 'styled-components';

import Link from '~src/components/LocalizedLink';

const Wrapper = styled.div`
  margin: auto;
  margin-top: 86px;
  margin-bottom: 110px;
  width: 51%;
  color: #353556;

  @media(max-width: 1024px) {
    width: 60%;
  }

  @media(max-width: 426px) {
    width: 93%;
    margin-top: 120px;
    margin-bottom: 146px;
  }

  @media(max-width: 320px) {
    width: 90.5%;
  }
`;

const Title = styled.h3`
  font-size: 2.2rem;
  line-height: 30px;
  font-weight: 400;
  text-align: center;
  position: relative;
  padding-bottom: 20.5px;
  margin-bottom: 20px;

  &::after {
    background: #e8114b;
    position: absolute;
    content: "";
    left: 50%;
    margin-left: -30px;
    bottom: 0;
    height: 4px;
    width: 60px;
  }
`;

const Paragraph = styled.p`
  text-align: center;
  line-height: 1.5;
  font-size: 1.6rem;
  font-weight: 400;

  &:last-child {
    margin-top: 20px;
  }
`;

const LinkSlug = styled(Link)`
 color: #e8114b;
 text-decoration: none;
`;

const Collaboration = ({ titleCollaboration, paragraphCollaboration1, linkSlug_kontakt, giveUsCall, paragraphCollaboration2 }) => (
  <Wrapper>
    <Title>{titleCollaboration}</Title>
    <Paragraph>{paragraphCollaboration1}, <LinkSlug to={linkSlug_kontakt}>{giveUsCall}</LinkSlug>.</Paragraph>
    <Paragraph>{paragraphCollaboration2}</Paragraph>
  </Wrapper>
);

export default Collaboration;
