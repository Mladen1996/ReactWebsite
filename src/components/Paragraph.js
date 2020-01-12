import React from "react";
import styled from "styled-components";

const ParagraphWrapper = styled.p`
  width: 80%;
  margin: 4em auto 2em auto;
  font-size: 2.6rem;
  color: #353556;
  line-height: 42px;

  @media(max-width: 768px) {
    width: 90%;
    font-size: 2rem;
    line-height: 42px;
  }

  @media(max-width: 426px) {
    font-size: 1.6rem;
    line-height: 35px;
  }
`;

const Paragraph = ({ textParagraph }) => (
  <ParagraphWrapper>{textParagraph}</ParagraphWrapper>
);

export default Paragraph;
