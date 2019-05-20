import React from 'react';
import { Editor } from 'slate-react';
import styled from 'styled-components';
import HeaderEditor from './HeaderEditor';
import { Colors, Metrics } from '../../theme';
import { schema } from '../../utils/MainEditorUtils';

const Container = styled.div`
  background-color: ${Colors.snow};
  width: 50%;
  padding: ${Metrics.xs}em;
  padding-left: ${Metrics.m}em;
`;

class EditorHome extends React.Component {
  render() {
    if (!this.props.value) {
      return null;
    }
    return (
      <Container>
        <HeaderEditor title={this.props.title} />
        <Editor autoFocus value={this.props.value} schema={schema} />
      </Container>
    );
  }
}

export default EditorHome;
