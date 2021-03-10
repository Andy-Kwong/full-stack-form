import React from 'react';
import styled from 'styled-components';
import { colors } from '../utilities/utilities';
import Menu from './Menu';

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

const HomeLink = styled.a`
  font-size: 2em;
  font-weight: bold;
  text-align: center;
  color: ${colors.white};
  cursor: pointer;
`;

export default function Navbar() {
  return (
    <Wrapper>
      <HomeLink>Useless App</HomeLink>
      <Menu />
    </Wrapper>
  );
}
