import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { colors, deviceSize, windowWidth } from '../utilities/utilities';
import RouterLink from './RouterLink';
import { useLocation } from 'react-router-dom';
import Hamburger from './hamburger.svg';

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  width: 200px;
  @media ${deviceSize.mobile} {
    width: 50px;
  }
`;

const LinkText = styled.span`
  height: 100%;
  font-size: 1em;
  cursor: pointer;
  text-align: center;
  color: ${colors.white};
  opacity: ${props => props.isSelected ? '50%' : '100%'};
  @media ${deviceSize.mobile} {
    font-weight: bold;
  }
`;

const LinkContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  @media ${deviceSize.mobile} {
    display: ${props => props.show ? 'flex' : 'none'};
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 1em;
    position: fixed;
    top: 70px;
    left: 0;
    width: 100vw;
    height: 100px;
    background-color: ${colors.darkGrey};
    box-sizing: border-box;
  }
`;

const MenuImage = styled.img`
  max-width: 30px;
  cursor: pointer;
  display: none;
  @media ${deviceSize.mobile} {
    display: inline-block;
  }
`;

const widthListener = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener('resize', () => setWindowWidth(window.innerWidth));
    return () => {
      window.removeEventListener('resize');
    };
  }, []);
  return windowWidth;
};

export default function Menu() {
  const [openMenu, setOpenMenu] = useState(false);
  const handleClick = () => {
    setOpenMenu((openMenu) => !openMenu);
  };

  const width = widthListener();
  useEffect(() => {
    if (width >= windowWidth.mobile) {
      setOpenMenu(false);
    }
  });

  const location = useLocation().pathname;
  return (
    <Container>
      <LinkContainer show={openMenu}>
        <RouterLink to="/about">
          <LinkText onClick={handleClick} isSelected={location === '/about'}>About</LinkText>
        </RouterLink>
        <RouterLink to="/form">
          <LinkText onClick={handleClick} isSelected={location === '/form'}>Contrived Form</LinkText>
        </RouterLink>
      </LinkContainer>
      <MenuImage onClick={handleClick} src={Hamburger} alt="menu" />
    </Container>
  );
}
