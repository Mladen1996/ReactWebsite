import React from 'react';

import Layout from '~src/components/Layout/PageLayout';
import SEO from '~src/components/Seo';
import Paragraph from '../components/Paragraph';
import MembersFriends from '../components/MembersFriends';
import Collaboration from '../components/Collaboration';
import { getLocaleCopy } from '~src/utils/helpers';
import { saradnja } from '~data/pages';
import onama from '../images/homepage/onama.jpg';
import HeaderOtherPage from '../components/HeaderOtherPage';




const WorkWithUs = ({ pageContext: { locale, name } }) => {
  const {
    siteTitle,
    textParagraph,
    titleMembers, paragraphMembers1, paragraphMembers2, titleFriends, paragraphFriends1, paragraphFriends2,
    titleCollaboration, paragraphCollaboration1, linkSlug_kontakt, giveUsCall, paragraphCollaboration2,otherHeaderHeading,
    otherHeaderSubheading,
  } = getLocaleCopy(saradnja, locale);

  return (
    <Layout name={name} title={siteTitle}>
      <SEO title={siteTitle} />
      <HeaderOtherPage otherHeaderHeading={otherHeaderHeading} otherHeaderSubheading={otherHeaderSubheading} image={onama}/>
      <Paragraph textParagraph={textParagraph} />
      <MembersFriends
        titleMembers={titleMembers}
        paragraphMembers1={paragraphMembers1}
        paragraphMembers2={paragraphMembers2}
        titleFriends={titleFriends}
        paragraphFriends1={paragraphFriends1}
        paragraphFriends2={paragraphFriends2}
      />
      <Collaboration
        titleCollaboration={titleCollaboration}
        paragraphCollaboration1={paragraphCollaboration1}
        linkSlug_kontakt={linkSlug_kontakt}
        giveUsCall={giveUsCall}
        paragraphCollaboration2={paragraphCollaboration2}
      />
    </Layout>
  );
};

export default WorkWithUs;
