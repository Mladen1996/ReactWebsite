import React from 'react';

import Layout from '~src/components/Layout/PageLayout';
import SEO from '~src/components/Seo';
import Paragraph from '../components/Paragraph';
import { getLocaleCopy } from '~src/utils/helpers';
import { clanovi_inicijative } from '~data/pages';
import CardContainer from '~src/components/CardContainer';
import onama from '../images/homepage/onama.jpg';
import HeaderOtherPage from '../components/HeaderOtherPage';


const Members = ({ pageContext: { locale, name } }) => {
  const { siteTitle, textParagraph,otherHeaderHeading,
    otherHeaderSubheading,nasiOsnivaci,clanovi,prijateljiOrganizacije,title1,title2,title3 } = getLocaleCopy(clanovi_inicijative, locale);


  return (
    <Layout name={name} title={siteTitle}>
      <SEO title={siteTitle} />
      <HeaderOtherPage otherHeaderHeading={otherHeaderHeading} otherHeaderSubheading={otherHeaderSubheading} image={onama}/>
      <Paragraph textParagraph={textParagraph} />
      <CardContainer cardsArray={nasiOsnivaci} sectionTitle={title1} />
      <CardContainer cardsArray={clanovi} sectionTitle={title2} />
      <CardContainer cardsArray={prijateljiOrganizacije} sectionTitle={title3} />

    </Layout>
  );
};

export default Members;
