import React from 'react';
import { Editor } from 'slate-react';
import styled from 'styled-components';
import { Colors } from '../../theme';

const Container = styled.div`
  background-color: ${Colors.snow};
  width: 50%;
  padding: 1em;
`;

class EditorHome extends React.Component {
  render() {
    if (!this.props.value) {
      return null;
    }
    return (
      <Container>
        <Editor autoFocus value={this.props.value} />
      </Container>
    );
  }
}

export default EditorHome;
