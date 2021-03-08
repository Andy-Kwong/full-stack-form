import React, { Children } from 'react';
import styled from 'styled-components';
import { colors } from '../utilities/utilities';

const ErrorText = styled.p`
  display: ${(props) => props.show ? 'block' : 'none'};
  color: ${colors.error};
  margin-top: 8px;
  margin-bottom: 0px;
`;

export default function ErrorMessage({ show, children }) {
  return (
    <ErrorText show={show}>{children}</ErrorText>
  );
}
