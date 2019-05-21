import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../theme/';

const Container = styled.button`
  display: flex;
  position: absolute;
  top: 10px;
  left: 5px;
  border: none;
  background: transparent;
  cursor: pointer;
`;

const GrippleDots = props => (
  <svg width="1em" height="1em" viewBox="0 0 9 13" {...props}>
    <path d="M2.5 3.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-4 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-4 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
  </svg>
);

const Gripple = () => {
  return (
    <Container>
      <span>
        <GrippleDots fill={Colors.darkGray} width="1.5em" height="1.5em" />
      </span>
    </Container>
  );
};

export default Gripple;
