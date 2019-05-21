import React from 'react';
import Placeholder from './Placeholder';
import { Colors } from '../../theme';

class Subtitle extends React.Component {
  render() {
    const h2Styles = {
      fontSize: '1.4em',
      marginTop: '0.6em',
      marginBottom: '0.6em',
      fontWight: 'normal'
    };
    if (this.props.node.text.length === 0) {
      return (
        <Placeholder {...this.props.attributes} text={this.props.placeholder} styles={h2Styles}>
          {this.props.children}
        </Placeholder>
      );
    }
    return (
      <h2 {...this.props.attributes} style={{ ...h2Styles, color: Colors.subtitle }}>
        {this.props.children}
      </h2>
    );
  }
}

export default Subtitle;
