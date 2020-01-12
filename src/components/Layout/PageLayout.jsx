import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { setPageName } from '~src/redux/actions';
import { getLocale } from '~src/redux/selectors';
import { getLocaleCopy } from '~src/utils/helpers';
import { footer, navBar,newsletter } from '~data/components';
import Footer from '../Footer';
import Newsletter from '../Newsletter';
import NavBar from '../NavBar';

const Container = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 0;
  padding-top: 0;
`;

const PageLayout = ({ children, name, title, setPageNameConnect, locale }) => {
  const { text } = getLocaleCopy(footer, locale);
  const { textONama, textKogaPredstavljamo, textSaradnja, textObjave, textKontakt, backgroundColor, paddingTop, linkSlug_oNama, linkSlug_clanoviInicijative, linkSlug_saradnja, linkSlug_objave, linkSlug_kontakt } = getLocaleCopy(navBar, locale);
  const {titleNewsletter,textNewsletter,buttonText,placeholder} = getLocaleCopy(newsletter, locale);
  const[scroll, setScroll] = useState(false);
  const[homepage, setHomepage] = useState(true);

  useEffect(() => {
    if(location.pathname !== "/" && location.pathname !== "/en/") {
      setHomepage(false);
    } else {
      setHomepage(true);
    }

    document.addEventListener("scroll", () => {
      if(window.screen.width > 992) {
        if(window.scrollY > 20) {
          setScroll(true);
        } else if(window.scrollY === 0) {
          setScroll(false);
        }
      } else {
        setScroll(false);
      }
    });

    setPageNameConnect(name);
  }, [name]);

  return (
    <>
      <NavBar
        name={name}
        backgroundColor={homepage ? (scroll ? "#353556" : "") : "#353556"}
        paddingTop={scroll ? "0.8%" : ""}
        textONama={textONama}
        textKogaPredstavljamo={textKogaPredstavljamo}
        textSaradnja={textSaradnja}
        textObjave={textObjave}
        textKontakt={textKontakt}
        linkSlug_oNama={linkSlug_oNama}
        linkSlug_clanoviInicijative={linkSlug_clanoviInicijative}
        linkSlug_saradnja={linkSlug_saradnja}
        linkSlug_objave={linkSlug_objave}
        linkSlug_kontakt={linkSlug_kontakt}
      />
      <Container>
        <main>{children}</main>
        <Newsletter titleNewsletter={titleNewsletter} textNewsletter={textNewsletter} buttonText={buttonText} placeholder={placeholder}/>
       <Footer text={text}/>
      </Container>
    </>
  );
};

PageLayout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const mapStateToProps = state => ({
  locale: getLocale(state),
});

export default connect(mapStateToProps, { setPageNameConnect: setPageName })(
  PageLayout
);
