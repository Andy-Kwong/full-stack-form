import React from 'react';
import styled from 'styled-components';
import { colors } from '../utilities/utilities';
import RouterLink from './RouterLink';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 200px;
`;

const LinkText = styled.span`
  height: 100%;
  font-size: 1em;
  cursor: pointer;
  text-align: center;
  color: ${colors.white};
  opacity: ${props => props.isSelected ? '50%' : '100%'};
`;

export default function Menu() {
  return (
    <Container>
      <RouterLink to="/about">
        <LinkText>About</LinkText>
      </RouterLink>
      <RouterLink to="/form">
        <LinkText>Contrived Form</LinkText>
      </RouterLink>
    </Container>
  );
}
