import React from 'react';

import Layout from '~src/components/Layout/PageLayout';
import SEO from '~src/components/Seo';
import Paragraph from '../components/Paragraph';
import { getLocaleCopy } from '~src/utils/helpers';
import { objave } from '~data/pages';
import onama from '../images/homepage/onama.jpg';
import HeaderOtherPage from '../components/HeaderOtherPage';

const Share = ({ pageContext: { locale, name } }) => {
  const { siteTitle,otherHeaderHeading,
    otherHeaderSubheading, } = getLocaleCopy(objave, locale);

  return (
    <Layout name={name} title={siteTitle}>
      <SEO title={siteTitle} />
      <HeaderOtherPage otherHeaderHeading={otherHeaderHeading} otherHeaderSubheading={otherHeaderSubheading} image={onama}/>
    </Layout>
  );
};

export default Share;
