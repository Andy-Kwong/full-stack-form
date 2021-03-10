import React, { useEffect } from 'react';
import styled from 'styled-components';
import { colors } from '../utilities/utilities';

const Background = styled.div`
  display: ${props => props.show ? 'flex' : 'none'};
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 3;
`;

const ClickableBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  cursor: ${props => props.enabled ? 'pointer' : 'inherit'};
  user-select: none;
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
  z-index: 4;
`;

export default function BaseModal({ show, children, exit }) {
  useEffect(() => {
    document.body.style.overflow = show ? 'hidden' : '';
  }, [show]);
  return (
    <Background show={show}>
      <ModalContentWrapper show={show}>
        {children}
      </ModalContentWrapper>
      <ClickableBackground enabled={exit} onClick={exit} />
    </Background>
  );
}
