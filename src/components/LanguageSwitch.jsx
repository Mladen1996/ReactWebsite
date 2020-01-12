/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { setLocale } from '~src/redux/actions';
import { getLocale, getPageName } from '~src/redux/selectors';
import i18n from '~config/i18n';

const Wrapper = styled.div`
  display: flex;

  @media(max-width: 992px) {
    margin-left: -1.0rem !important;
  }
`;

const LanguageWrapper = styled.div`
  /* transition: all 0.3s ease-out 0s;

  &:hover {
    color: #e8114b;
  } */

  &:last-child {
    span {
      display: none;
    }
  }
`;

const StyledLink = styled(Link)`
  font-size: 14px;

  ${p =>
    p.current === 'true' &&
    `
      border-bottom: 1px solid !important;
  `};
`;

const LanguageSwitch = ({ setLocaleConnect, currentLocale, name }) => {
  const locales = Object.keys(i18n);

  return (
    <Wrapper>
      {locales.map(lang => {
        const path = name
          ? `${i18n[lang].startUrl}${i18n[lang].slugs[name]}`
          : `${i18n[lang].startUrl}`;

        return (
          <LanguageWrapper key={lang}>
            <StyledLink
              current={currentLocale === lang ? `true` : `false`}
              title={i18n[lang].languageName}
              hrefLang={i18n[lang]}
              to={path}
              onClick={() => setLocaleConnect(lang)}
              style={{
                color: `white`,
                margin: 10,
                textDecoration: `none`,
                cursor: `pointer`,
              }}
            >
              {i18n[lang].languageName}
            </StyledLink>
            <span>| </span>
          </LanguageWrapper>
        );
      })}
    </Wrapper>
  );
};

const mapStateToProps = state => ({
  currentLocale: getLocale(state),
  name: getPageName(state),
});

export default connect(mapStateToProps, { setLocaleConnect: setLocale })(
  LanguageSwitch
);
