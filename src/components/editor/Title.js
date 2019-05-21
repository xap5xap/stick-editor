import React from 'react';
import Placeholder from './Placeholder';

class Title extends React.Component {
  render() {
    const h1Styles = {
      fontSize: '2em',
      marginTop: '0.6em',
      marginBottom: '0em'
    };
    if (this.props.node.text.length === 0) {
      return (
        <Placeholder {...this.props.attributes} text={this.props.placeholder} styles={h1Styles}>
          {this.props.children}
        </Placeholder>
      );
    }
    return (
      <h1 {...this.props.attributes} style={{...h1Styles}}>
        {this.props.children}
      </h1>
    );
  }
}

export default Title;
