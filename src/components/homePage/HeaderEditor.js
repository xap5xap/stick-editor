import React from 'react';
import styled from 'styled-components';
import { Colors, Metrics } from '../../theme';

const IconContainer = styled.div`
  width: 3em;
  height: 3em;
  border-radius: 5px;
  background-color: ${Colors.lightGrey};
  border: 1px solid ${Colors.borderColor};
  justify-content: center;
  align-items: center;
  display: flex;
  margin-right: ${Metrics.xs}em;
`;

const Icon = styled.div`
  background-color: ${Colors.darkGray};
  width: 2em;
  height: 2em;
  border-radius: 1em;
`;

const Container = styled.div`
  flex-direction: row;
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  font-weight: bold;
`;

const HeaderEditor = props => {
  return (
    <Container>
      <IconContainer>
        <Icon />
      </IconContainer>
      <Title>{props.title}</Title>
    </Container>
  );
};

export default HeaderEditor;
