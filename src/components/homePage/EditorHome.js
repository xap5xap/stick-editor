import React from 'react';
import { Editor } from 'slate-react';
import styled from 'styled-components';
import HeaderEditor from './HeaderEditor';
import { Colors, Metrics } from '../../theme';
import { schema } from '../../utils/MainEditorUtils';
import TitlePlugin from '../../utils/TitlePlugin';

const Container = styled.div`
  background-color: ${Colors.snow};
  width: 50%;
  padding: ${Metrics.xs}em;
  padding-left: ${Metrics.m}em;
`;

const titlePlugin = TitlePlugin({ placeholder: 'Start typing your title ' });
const plugins = [titlePlugin];

class EditorHome extends React.Component {
  state = {
    value: null
  };

  onChange = ({ value }) => {
    this.props.onChange(value);
    this.setState({ value });
  };

  componentDidUpdate(prevProps) {
    if (this.props.value.document !== prevProps.value.document) {
      this.setState({ value: this.props.value });
    }
  }

  render() {
    const { value } = this.state;
    if (!value) {
      return null;
    }
    return (
      <Container>
        <HeaderEditor title={this.props.title} />
        <Editor autoFocus value={value} onChange={this.onChange} schemas={schema} plugins={plugins} />
      </Container>
    );
  }
}

export default EditorHome;
