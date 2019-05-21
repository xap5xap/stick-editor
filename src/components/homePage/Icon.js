import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Colors, Metrics } from '../../theme';

const Container = styled.div`
  background-color: ${Colors.lightGrey};
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  display: flex;
  margin-right: ${Metrics.xs}em;
  flex-direction: row;
  width: 80px;
  height: 55px;
`;

const IconImage = styled.div`
  background-color: ${Colors.darkGray};
  width: 30px;
  height: 30px;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
`;
const ContainerIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
  margin-left: 1em;
`;

class Icon extends React.Component {
  renderIcon = () => {
    if (this.props.empty) {
      return null;
    }
    return (
      <>
        <IconImage />
        <ContainerIcon icon="chevron-down" color={Colors.darkGray} size="sm" />
      </>
    );
  };

  render() {
    return <Container> {this.renderIcon()}</Container>;
  }
}

export default Icon;
