import React, { Children } from 'react';
import styled from 'styled-components';
import { colors } from '../utilities/utilities';

const Background = styled.div`
  display: ${props => props.show ? 'flex' : 'none'};
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.25);
  z-index: 2;
`;

const ModalContentWrapper = styled.div`
  visibility: ${props => props.show ? 'visible' : 'hidden'};
  position: relative;
  background-color: white;
  margin: auto;
  box-shadow: 1px 1px 3px ${colors.darkGrey};
  border-radius: 5px;
  margin-top: 120px;
  width: 80%;
  max-width: 600px;
  z-index: 3;
`;

export default function BaseModal({ show, children }) {
  show && (document.body.style.overflow = 'hidden');
  return (
    <Background show={show}>
      <ModalContentWrapper show={show}>
        {children}
      </ModalContentWrapper>
    </Background>
  );
}
