import React from 'react';
import Placeholder from './Placeholder';

class Bullet extends React.Component {
  render() {
    if (this.props.node.text.length === 0) {
      return (
        <Placeholder {...this.props.attributes} text={this.props.placeholder}>
          {this.props.children}
        </Placeholder>
      );
    }
    return <p {...this.props.attributes}>{this.props.children}</p>;
  }
}

export default Bullet;
