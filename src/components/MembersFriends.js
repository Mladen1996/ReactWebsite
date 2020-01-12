import React from 'react';
import styled from 'styled-components';

import membersImg from '../images/workWithUs/members.png';
import friendsImg from '../images/workWithUs/friends.png';

const MainWrapper = styled.div`
  background-color: #F3F3F3;
  width: 100%;
  padding-top: 84px;
  padding-bottom: 84px;
`;

const InnerWrapper = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  color: #353556;

  @media(max-width: 768px) {
    width: 90%;
    flex-direction: column;
  }
`;

const MembersFriendsWrapper = styled.div`
  width: 48.6%;

  @media(max-width: 768px) {
    width: 100%;

    &:last-child {
      margin-top: 20px;
    }
  }
`;

const Title = styled.h3`
  font-size: 2.2rem;
  line-height: 30px;
  font-weight: 400;
  position: relative;
  padding-bottom: 21px;
  margin-top: 27px;

  &::after {
    background: #e8114b;
    position: absolute;
    content: "";
    left: 0;
    bottom: 0;
    height: 4px;
    width: 60px;
  }
`;

const Paragraph = styled.p`
  line-height: 1.5;
  font-size: 1.6rem;
  font-weight: 400;
  margin-top: -2px;

  &:last-child {
    margin-top: 20px;
  }
`;

const MembersFriends = ({ titleMembers, paragraphMembers1, paragraphMembers2, titleFriends, paragraphFriends1, paragraphFriends2 }) => (
  <MainWrapper>
    <InnerWrapper>
      <MembersFriendsWrapper>
        <img src={membersImg} alt="Members Icon" />
        <Title>{titleMembers}</Title>
        <Paragraph>{paragraphMembers1}</Paragraph>
        <Paragraph>{paragraphMembers2}</Paragraph>
      </MembersFriendsWrapper>
      <MembersFriendsWrapper>
        <img src={friendsImg} alt="Friends Icon" />
        <Title>{titleFriends}</Title>
        <Paragraph>{paragraphFriends1}</Paragraph>
        <Paragraph>{paragraphFriends2}</Paragraph>
      </MembersFriendsWrapper>
    </InnerWrapper>
  </MainWrapper>
);

export default MembersFriends;
