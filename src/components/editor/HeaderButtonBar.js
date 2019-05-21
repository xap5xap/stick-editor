import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Colors } from '../../theme/';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 15px;
  right: 15px;
  width: 4em;
`;

const ContainerIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
`;

const HeaderButtonBar = props => {
  return (
    <Container>
      <ContainerIcon icon="ellipsis-h" color={Colors.darkGray} size="sm" />
      <ContainerIcon icon="chevron-up" color={Colors.darkGray} size="sm" />
    </Container>
  );
};

export default HeaderButtonBar;
