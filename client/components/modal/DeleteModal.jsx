import React from 'react';
import styled from 'styled-components';
import { colors } from '../utilities/utilities';
import BaseModal from './BaseModal';

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const TextContainer = styled.div`
  padding: 0.5em 1.5em;
`;

const ButtonContainer = styled.div`
  background-color: ${colors.lightGrey};
  display: flex;
  justify-content: flex-end;
  padding: 1em;
`;

const Button = styled.button`
  background-color: ${props => props.delete ? colors.error : colors.white};
  border: ${props => props.delete ? 'none' : '1px solid ' + colors.mediumGrey};
  border-radius: 3px;
  color: ${props => props.delete ? 'white' : colors.darkGrey};
  padding: 0.5em 1em;
  margin-left: 0.5em;
  margin-right: 0.5em;
  cursor: pointer;
  outline: none;
  &:active {
    transform: scale(0.99);
  }
`;

export default function DeleteModal({ show, toggleShow, confirmDelete }) {
  return (
    <BaseModal show={show}>
      <Container>
        <TextContainer>
          <h3>Sure you want to delete your account?</h3>
          <p>This action cannot be undone. You will permanently lose all data.</p>
        </TextContainer>
        <ButtonContainer>
          <Button onClick={() => toggleShow(false)}>Cancel</Button>
          <Button onClick={confirmDelete} delete>Delete</Button>
        </ButtonContainer>
      </Container>
    </BaseModal>
  );
}
