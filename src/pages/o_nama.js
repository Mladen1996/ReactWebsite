import React from 'react';

import Layout from '~src/components/Layout/PageLayout';
import SEO from '~src/components/Seo';
import Paragraph from '../components/Paragraph';
import { getLocaleCopy } from '~src/utils/helpers';
import { o_nama } from '~data/pages';
import onama from '../images/homepage/onama.jpg';
import HeaderOtherPage from '../components/HeaderOtherPage';
import AboutDigital from '../components/AboutDigital';
import AboutMemberContainer from '../components/AboutMemberContainer.js';

const AboutUs = ({ pageContext: { locale, name } }) => {
  const { siteTitle, textParagraph,otherHeaderHeading,
    otherHeaderSubheading,textDigital1,textDigital2,
    textDigital3,sectionMemberTitle1,sectionMemberTitle2,sectionMemberTitle3, Skupstina,
    nasaizvrsnakancelarija, nasUpravniOdbor,} = getLocaleCopy(o_nama, locale);

  return (
    <Layout name={name} title={siteTitle}>
      <SEO title={siteTitle} />
      <HeaderOtherPage otherHeaderHeading={otherHeaderHeading} otherHeaderSubheading={otherHeaderSubheading} image={onama}/>
      <Paragraph textParagraph={textParagraph} />
      <AboutDigital textDigital1={textDigital1} textDigital2={textDigital2} textDigital3={textDigital3}/>
      <AboutMemberContainer cardsArray={nasaizvrsnakancelarija} sectionMemberTitle={sectionMemberTitle1} width1="50%"/>
      <AboutMemberContainer cardsArray={nasUpravniOdbor} sectionMemberTitle={sectionMemberTitle2} width1="33%"/>
      <AboutMemberContainer cardsArray={Skupstina} sectionMemberTitle={sectionMemberTitle3} width1="33%"/>
    

    </Layout>
  );
};

export default AboutUs;
