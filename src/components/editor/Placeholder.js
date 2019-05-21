import React from 'react';

const Placeholder = props => {
  const placeHolderStyle = {
    pointerEvents: 'none',
    display: 'inline-block',
    width: '0',
    maxWidth: '100%',
    whiteSpace: 'nowrap',
    opacity: '0.333',
    ...props.styles
  };

  return (
    <span>
      <span contentEditable={false} style={placeHolderStyle}>
        {props.text}
      </span>
      {props.children}
    </span>
  );
};

export default Placeholder;
