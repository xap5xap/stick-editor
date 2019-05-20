import React from 'react';
import { Editor } from 'slate-react';

class EditorHome extends React.Component {
  render() {
    if (!this.props.value) {
      return null;
    }
    return (
      <div>
        <Editor autoFocus value={this.props.value} />
      </div>
    );
  }
}

export default EditorHome;
