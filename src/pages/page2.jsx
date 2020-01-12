import React from 'react';
import Layout from '~src/components/Layout/PageLayout';
import SEO from '~src/components/Seo';
import Link from '~src/components/LocalizedLink';
import { getLocaleCopy } from '~src/utils/helpers';
import { page2 } from '~data/pages';

const SecondPage = ({ pageContext: { locale, name } }) => {
  const {} = getLocaleCopy(
    page2,
    locale
  );

  return (
    <Layout name={name}>
     
     
    </Layout>
  );
};

export default SecondPage;
