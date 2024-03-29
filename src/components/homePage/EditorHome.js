import React from 'react';
import { Editor } from 'slate-react';
import styled from 'styled-components';
import HeaderEditor from './HeaderEditor';
import { Colors, Metrics } from '../../theme';
import { schema } from '../../utils/MainEditorUtils';
import { TitlePlugin, SubtitlePlugin, BulletPlugin } from '../../utils/plugins';
import { Gripple, HeaderButtonBar } from '../editor';

const Container = styled.div`
  background-color: ${Colors.snow};
  width: 50%;
  padding: ${Metrics.xs}em;
  padding-left: ${Metrics.m}em;
  position: relative;
`;

const titlePlugin = TitlePlugin({ placeholder: 'Start typing your title' });
const subtitlePlugin = SubtitlePlugin({ placeholder: 'Type a subtitle' });
const bulletPlugin = BulletPlugin({ placeholder: 'Keep writing...' });
const plugins = [titlePlugin, subtitlePlugin, bulletPlugin];

class EditorHome extends React.Component {
  state = {
    value: null
  };

  onChange = change => {
    // console.log('change', change);
    const { value } = change;
    this.props.onChange(value);
    // console.log('onChange value', value.document.toJSON());
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
        <Gripple />
        <HeaderButtonBar />
        <HeaderEditor title={this.props.title} />
        <Editor autoFocus value={value} onChange={this.onChange} schema={schema} plugins={plugins} />
      </Container>
    );
  }
}

export default EditorHome;
