import React from 'react';
import styled from 'styled-components';
import { colors } from '../utilities/utilities';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 200px;
`;

const Link = styled.a`
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
      <Link isSelected>About</Link>
      <Link>Contrived Form</Link>
    </Container>
  );
}
