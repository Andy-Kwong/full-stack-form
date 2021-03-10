import React from 'react';
import styled from 'styled-components';
import RouterLink from '../navbar/RouterLink';
import { colors } from '../utilities/utilities';
import BaseModal from './BaseModal';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0 1em 1em;
  box-sizing: border-box;
`;

const HomeButton = styled.button`
  width: 100%;
  background-color: ${colors.themePurple};
  padding: 0.5em;
  color: ${colors.white};
  border-radius: 3px;
  border: none;
  font-size: 1em;
  font-weight: bold;
  cursor: pointer;
`;

export default function SuccessModal({ show, toggleShow }) {
  return (
    <BaseModal show={show}>
      <Container>
        <h2 style={{ textAlign: 'center' }}>We read you loud and clear</h2>
        <p style={{ margin: 0, textAlign: 'center' }}>We received your message and will respond accordingly</p>
        <RouterLink to="/" styles={{ 'margin-top': '1em' }} >
          <HomeButton onClick={() => toggleShow(false)}>Take me home, country road</HomeButton>
        </RouterLink>
      </Container>
    </BaseModal >
  );
}
