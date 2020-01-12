import React, { useState } from 'react';
import styled from 'styled-components';

import Link from '~src/components/LocalizedLink';
import LanguageSwitch from './LanguageSwitch';
import logo from '../images/logo/dsi-logo.png';

const Wrapper = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  height: 105px;
  transition: all 0.3s ease-out;
  z-index: 3;

  @media(max-width: 992px) {
    background-color: #353556;
    position: relative;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1.1%;
  width: 80%;
  margin: auto;
  padding-bottom: 1.1%;
  transition: all 0.3s ease-out;

  @media(max-width: 992px) {
    width: 90%;
  }

  img {
    width: 13%;
    cursor: pointer;

    @media(max-width: 1200px) {
      width: 14%;
    }

    @media(max-width: 992px) {
      width: 192px;
    }
  }
`;

const Navigation = styled.nav`
  margin: 0;
  margin-top: 0.5%;

  > ul {
    display: flex;
    align-items: center;
  }

  @media(max-width: 992px) {
    display: none;
  }
`;

const NavMenu = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  * {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    display: inline-block;
    outline: none;
    text-transform: uppercase;
    padding-left: 0;
    font-size: 1.6rem;
    font-weight: 400;
    color: #fff;

    @media(max-width: 1200px) {
      font-size: 1.5rem;
    }
  }

  > li {
    margin-left: 35px;

    @media(max-width: 1200px) {
      margin-left: 14px;
    }
  }
`;

const LinkImage = styled(Link)`
  img {
    width: 17rem;
    cursor: pointer;

    @media(max-width: 992px) {
      width: 192px;
    }
  }
`;

const LinkSlug = styled(Link)`
  text-decoration: none;
  transition: all 0.3s ease-out 0s;
  color: #fff;

  &:hover {
    color: #e8114b;
  }
`;

const LanguageBtn = styled.button`
  border: 1px solid #e8114b;
  background: #e8114b;
  border-radius: 3px;
  padding: 10px 9px;
  text-transform: uppercase;
  font-size: 1.6rem;
  font-weight: 400;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease-out 0s;

  &:hover {
    background: rgba(232, 17, 75, 0.2);
  }
`;

const MobileNavToggle = styled.button`
  background: #e8114b;
  border: 1px solid #e8114b;
  border-radius: 3px;
  width: 40px;
  height: 40px;
  display: block;
  text-align: center;
  transition: none;
  outline: none;
  position: relative;

  @media(min-width: 993px) {
    display: none;
  }

  span {
    transition: all 0.4s;
    border-radius: 2px;
    position: absolute;
    display: block;
    background: #fff;
    width: 80%;
    height: 4px;
    left: 11%;
  }

  span:first-child {
    transform: rotate(${p => (p.open ? '45deg' : '0')});
    top: ${p => (p.open ? '17px' : '29px')};
  }

  span:nth-child(2n) {
    transform: rotate(${p => (p.open ? '-45deg' : '0')});
    bottom: ${p => (p.open ? '17px' : '17px')};
  }

  span:nth-child(3n) {
    transform: rotate(${p => (p.open ? '-45deg' : '0')});
    bottom: ${p => (p.open ? '17px' : '29px')};
  }
`;

const MobileNavBarPanel = styled.div`
  background-color: #303052;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s ease-out;
  color: black;

  @media(min-width: 993px) {
    display: none;
  }
`;

const MobileNavMenu = styled.ul`
  margin: 0;
  padding: 0;
  padding-top: 1px;
  line-height: 26px;
  list-style: none;

  * {
    margin: 0;
    padding: 0;
    padding-top: 1px;
    line-height: 26px;
    list-style: none;
  }

  li {
    border-top: 1px solid #282843;
    outline: none;
    padding-left: 0;
    padding-top: 5px;
    padding-bottom: 5px;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 21px;
    color: #fff;

    @media(max-width: 992px) {
      padding-left: 5%;
    }
  }

  li:last-child {
    background-color: #E8114B;
  }
`;

const NavBar = ({ textONama, textKogaPredstavljamo, textSaradnja, textObjave, textKontakt, backgroundColor, paddingTop, linkSlug_oNama, linkSlug_clanoviInicijative, linkSlug_saradnja, linkSlug_objave, linkSlug_kontakt }) => {

  const [showMenu, setShowMenu] = useState(false);

  function MobileNavHandler() {
    const mobileBtn = document.getElementById("MobileNavToggleBtn");
    if(!showMenu) {
      setShowMenu(false);
      mobileBtn.style.backgroundColor = "transparent";
    } else {
      setShowMenu(true);
      mobileBtn.style.backgroundColor = "#e8114b";
    }

    const mobilePanel = document.getElementById("MobileNavBar");
    const headerPanel = document.getElementById("HeaderWrapper");
    if(mobilePanel.style.maxHeight) {
      mobilePanel.style.maxHeight = null;
      setShowMenu(false);
    } else {
      mobilePanel.style.maxHeight = mobilePanel.scrollHeight + "px";
      headerPanel.style.marginTop = 0;
      setShowMenu(!showMenu);
    }
  }

  return (
    <div>
      {/* HEADER */}
      <Wrapper style={{backgroundColor: backgroundColor}}>
        <Header style={{paddingTop: paddingTop}}>
          <LinkImage to="/"><img src={logo} alt="Logo" /></LinkImage>
          <Navigation>
            <NavMenu>
              <li><LinkSlug activeStyle={{color: '#e8114b'}} to={linkSlug_oNama}>{textONama}</LinkSlug></li>
              <li><LinkSlug activeStyle={{color: '#e8114b'}} to={linkSlug_clanoviInicijative}>{textKogaPredstavljamo}?</LinkSlug></li>
              <li><LinkSlug activeStyle={{color: '#e8114b'}} to={linkSlug_saradnja}>{textSaradnja}</LinkSlug></li>
              {/*<li><LinkSlug activeStyle={{color: '#e8114b'}} to={linkSlug_objave}>{textObjave}</LinkSlug></li>*/}
              <li><LinkSlug activeStyle={{color: '#e8114b'}} to={linkSlug_kontakt}>{textKontakt}</LinkSlug></li>
              <li><LanguageSwitch /></li>
            </NavMenu>
          </Navigation>
          <MobileNavToggle id="MobileNavToggleBtn" open={showMenu} onClick={() => MobileNavHandler()}>
            <span />
            <span />
            <span />
          </MobileNavToggle>
        </Header>
      </Wrapper>

      {/* MOBILE NAVIGATION BAR */}
      <MobileNavBarPanel id="MobileNavBar">
        <MobileNavMenu>
          <li><LinkSlug activeStyle={{color: '#e8114b'}} to={linkSlug_oNama}>{textONama}</LinkSlug></li>
          <li><LinkSlug activeStyle={{color: '#e8114b'}} to={linkSlug_clanoviInicijative}>{textKogaPredstavljamo}?</LinkSlug></li>
          <li><LinkSlug activeStyle={{color: '#e8114b'}} to={linkSlug_saradnja}>{textSaradnja}</LinkSlug></li>
          {/*<li><LinkSlug activeStyle={{color: '#e8114b'}} to={linkSlug_objave}>{textObjave}</LinkSlug></li>*/}
          <li><LinkSlug activeStyle={{color: '#e8114b'}} to={linkSlug_kontakt}>{textKontakt}</LinkSlug></li>
          <li><LanguageSwitch /></li>
        </MobileNavMenu>
      </MobileNavBarPanel>
    </div>
  );
};

export default NavBar;
