import React from 'react';
import { connect } from 'react-redux';
import { Value } from 'slate';
import styled from 'styled-components';
import { getEditorValue } from '../actions/HomeScreenActions';
import EditorHome from '../components/homePage/EditorHome';

const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

class HomePage extends React.Component {
  componentDidMount() {
    this.props.getEditorValue();
  }

  onChangeEditorValue = value => {
    if (value.document !== this.props.editorValue.document) {
    //   console.log('should save to DB');
    }
  };

  render() {
    const { editorValue } = this.props;
    return (
      <Container>
        <h3>Make your ideas flow</h3>
        <EditorHome value={editorValue} title="Introduction" onChange={this.onChangeEditorValue} />
      </Container>
    );
  }
}
const mapStateToProps = state => {
  const editorValue = state.main.editorValue ? Value.fromJSON(state.main.editorValue) : null;

  return { editorValue };
};

export default connect(
  mapStateToProps,
  { getEditorValue }
)(HomePage);
