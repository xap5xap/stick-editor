import React from 'react';

class Placeholder extends React.Component {
  render() {
    const placeHolderStyle = {
      pointerEvents: 'none',
      display: 'inline-block',
      width: '0',
      maxWidth: '100%',
      whiteSpace: 'nowrap',
      opacity: '0.333',
      ...this.props.styles
    };
    return (
      <span>
        <span contentEditable={false} style={placeHolderStyle}>
          {this.props.text}
        </span>
        {this.props.children}
      </span>
    );
  }
}

export default Placeholder;
