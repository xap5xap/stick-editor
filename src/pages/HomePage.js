import React from 'react';
import { connect } from 'react-redux';
import { getEditorValue } from '../actions/HomeScreenActions';

class HomePage extends React.Component {
  componentDidMount() {
    this.props.getEditorValue();
  }

  render() {
    console.log('HomePage - render', this.props);
    return (
      <div>
        <div>
          <h1>Home page</h1>
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
