import React from 'react';
import styled from 'styled-components';

import Layout from '~src/components/Layout/PageLayout';
import SEO from '~src/components/Seo';
import { getLocaleCopy } from '~src/utils/helpers';
import { home, clanovi_inicijative } from '~data/pages';
import Header from '../components/Header';
import CardContainer from "../components/CardContainer"
import AboutUs from '../components/AboutUs';


const IndexPage = ({ pageContext: { locale, name } }) => {
  
  const{clanovi,nasiOsnivaci,prijateljiOrganizacije,title1,title2,title3}=getLocaleCopy(clanovi_inicijative,locale)
   const {siteTitle,
    titleAboutHome,
    textAboutHome1,
    textAboutHome2,
    textAboutHome3,
    accordion,
    textHeader1, textHeader2, textHeader3, textButton, linkSlug_oNama
   } = getLocaleCopy(home, locale);

  return (
    <Layout name={name} title={siteTitle}>
      <SEO title={siteTitle} />
       <Header
        textHeader1={textHeader1}
        textHeader2={textHeader2}
        textHeader3={textHeader3}
        textButton={textButton}
        linkSlug_oNama={linkSlug_oNama}
      />
      <AboutUs titleAboutHome={titleAboutHome} textAboutHome1={textAboutHome1} textAboutHome2={textAboutHome2} textAboutHome3={textAboutHome3} accordion={accordion} />
      <CardContainer cardsArray={nasiOsnivaci} sectionTitle={title1} />
      <CardContainer cardsArray={clanovi} sectionTitle={title2} />
      <CardContainer cardsArray={prijateljiOrganizacije} sectionTitle={title3} />
     
    </Layout>
  );
};

export default IndexPage;
