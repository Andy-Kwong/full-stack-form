import React, { Children } from 'react';
import styled from 'styled-components';
import { colors } from '../utilities/utilities';

const ErrorText = styled.p`
  color: ${colors.error};
  margin-top: 8px;
  margin-bottom: 0px;
`;

export default function ErrorMessage({ children }) {
  return (
    <ErrorText>{children}</ErrorText>
  );
}
