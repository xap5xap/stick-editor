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
  width: 85px;
  height: 60px;
`;

const RoundedImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

const IconImageDummy = styled.div`
  background-color: ${Colors.darkGray};
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;
const ContainerIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
  margin-left: 1em;
`;

class Icon extends React.Component {
  renderIconImage = () => {
    if (this.props.iconUrl) {
      return <RoundedImage src={this.props.iconUrl} alt="icon of text" />;
    }
    return <IconImageDummy />;
  };
  renderIcon = () => {
    if (this.props.empty) {
      return null;
    }
    return (
      <>
        {this.renderIconImage()}
        <ContainerIcon icon="chevron-down" color={Colors.darkGray} size="sm" />
      </>
    );
  };

  render() {
    return <Container> {this.renderIcon()}</Container>;
  }
}

export default Icon;
