import React from 'react';
import Placeholder from './Placeholder';

const Title = props => {
  const h1Styles = {
    fontSize: '2em',
    marginTop: '0.6em',
    marginBottom: '0.6em'
  };
  if (props.node.text.length === 0) {
    return (
      <Placeholder {...props.attributes} text={props.placeholder} styles={h1Styles}>
        {props.children}
      </Placeholder>
    );
  }
  return (
    <h1 {...props.attributes} styles={h1Styles}>
      {props.children}
    </h1>
  );
};

export default Title;
