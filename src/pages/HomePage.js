import React from 'react';
import { connect } from 'react-redux';
import { Value } from 'slate';
import { getEditorValue } from '../actions/HomeScreenActions';
import EditorHome from '../components/homePage/EditorHome';

class HomePage extends React.Component {
  componentDidMount() {
    this.props.getEditorValue();
  }

  render() {
    const { editorValue } = this.props;
    const initialValue = editorValue ? Value.fromJSON(editorValue) : null;
    return (
      <div>
        <div>
          <h1>Home page</h1>
          <EditorHome value={initialValue} />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  const { editorValue } = state.main;
  return { editorValue };
};

export default connect(
  mapStateToProps,
  { getEditorValue }
)(HomePage);
