import React from 'react';
import styled from 'styled-components';
import Placeholder from './Placeholder';
import Icon from '../../components/homePage/Icon';
import { Metrics } from '../../theme';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: ${Metrics.xs}em;
`;

class Bullet extends React.Component {
  onKeyDown = event => {
    console.log('Bullet-onKeyDown', event);
  };
  
  render() {
    if (this.props.node.text.length === 0) {
      return (
        <Container>
          <Icon empty />
          <Placeholder {...this.props.attributes} text={this.props.placeholder}>
            {this.props.children}
          </Placeholder>
        </Container>
      );
    }
    return (
      <Container>
        <Icon />
        <p {...this.props.attributes} onKeyDown={this.onKeyDown}>
          {this.props.children}
        </p>
      </Container>
    );
  }
}

export default Bullet;
