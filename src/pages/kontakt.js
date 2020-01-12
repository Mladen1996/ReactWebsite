import React from 'react';

import Layout from '~src/components/Layout/PageLayout';
import SEO from '~src/components/Seo';
import { getLocaleCopy } from '~src/utils/helpers';
import { kontakt } from '~data/pages';
import Form from '../components/Form';
import styled from 'styled-components';
import onama from '../images/homepage/onama.jpg';
import HeaderOtherPage from '../components/HeaderOtherPage';
import MyMap from '../components/Map';

const Contact = ({ pageContext: { locale, name } }) => {
  const {
    siteTitle,
    note,
    label1,
    otherHeaderHeading,
    otherHeaderSubheading,
    btnText,
    placeholder1,
    placeholder2,
    placeholder3,
  } = getLocaleCopy(kontakt, locale);

  const Box = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    width: 82%;
    margin:0 auto;
   
    @media(max-width:768px){
      flex-direction:column;
      width:90%;
    }
  
  `;
  const Wrapper=styled.div`
  width:100%;
  background:#f3f3f3;
  padding:3% 0;
  `
  const BoxSplit = styled(Box)`
    box-sizing: border-box;
    width: 47%;

    @media (max-width: 768px) {
      width: 100%;
      padding-bottom:15px;
      height:100%;
    }
  `;

  return (
    <Layout  name={name} title={siteTitle}>
      <HeaderOtherPage
        otherHeaderHeading={otherHeaderHeading}
        otherHeaderSubheading={otherHeaderSubheading}
        image={onama}
      />
      <Wrapper >

      
      <Box >
        <SEO title={siteTitle} />
        <BoxSplit>
          <Form
            note={note}
            label1={label1}
            btnText={btnText}
            placeholder1={placeholder1}
            placeholder2={placeholder2}
            placeholder3={placeholder3}
          />
        </BoxSplit>
        <BoxSplit>
        <MyMap/>
        </BoxSplit>
      </Box>
      </Wrapper>
     
    </Layout>
  );
};

export default Contact;
""