import React from 'react';
import styled from 'styled-components';
import { colors } from '../utilities/utilities';
import Menu from './Menu';
import RouterLink from './RouterLink';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  background-color: ${colors.themePurple};
  position: fixed;
  top: 0;
  left: 0;
  box-sizing: border-box;
`;

const Spacer = styled.div`
  width: 100%;
  height: 70px;
`;

const AppTitle = styled.span`
  font-size: 2em;
  font-weight: bold;
  text-align: center;
  color: ${colors.white};
  cursor: pointer;
`;

export default function Navbar() {
  return (
    <>
      <Spacer />
      <Wrapper>
        <RouterLink to="/">
          <AppTitle>Useless App</AppTitle>
        </RouterLink>
        <Menu />
      </Wrapper>
    </>
  );
}
