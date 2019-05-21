import React from 'react';
import { Editor } from 'slate-react';
import styled from 'styled-components';
import HeaderEditor from './HeaderEditor';
import { Colors, Metrics } from '../../theme';
import { schema } from '../../utils/MainEditorUtils';
import { TitlePlugin, SubtitlePlugin } from '../../utils/plugins';

const Container = styled.div`
  background-color: ${Colors.snow};
  width: 50%;
  padding: ${Metrics.xs}em;
  padding-left: ${Metrics.m}em;
`;

const titlePlugin = TitlePlugin({ placeholder: 'Start typing your title' });
const subtitlePlugin = SubtitlePlugin({ placeholder: 'Type a subtitle' });
const plugins = [titlePlugin, subtitlePlugin];
// const plugins = [ subtitlePlugin];
// const plugins = [ titlePlugin];

class EditorHome extends React.Component {
  state = {
    value: null
  };

  onChange = ({ value }) => {
    this.props.onChange(value);
    console.log('onChange value', value.document.toJSON());
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
        <Editor autoFocus value={value} onChange={this.onChange} schema={schema} plugins={plugins} />
      </Container>
    );
  }
}

export default EditorHome;
