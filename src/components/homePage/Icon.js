import React from 'react';
import styled from 'styled-components';
import { Colors, Metrics } from '../../theme';

const Container = styled.div`
  background-color: ${Colors.lightGrey};
  width: 3em;
  height: 2em;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding: ${Metrics.xs}em;
  display: flex;
  margin-right: ${Metrics.xs}em;
`;

const IconImage = styled.div`
  background-color: ${Colors.darkGray};
  width: 2em;
  height: 2em;
  border-radius: 1em;
  justify-content: center;
  align-items: center;
  display: flex;
`;

class Icon extends React.Component {
  render() {
    return (
      <Container>
        <IconImage />
      </Container>
    );
  }
}

export default Icon;
