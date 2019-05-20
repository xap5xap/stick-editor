import React from 'react';

export default function(options = {}) {
  console.log('title plugins');
  function renderNode(props, editor, next) {
    console.log('headerPlugin - renderNode');

    return <h1 {...props.attributes}>{props.children}</h1>;

    // const { node } = props;
    // console.log('headerPlugin - renderNode - node', node);

    // switch (node.type) {
    //   case 'title':
    //     return <h1>{props.children}</h1>;
    //   default:
    //     return next;
    // }
  }
  return {
    renderNode
  };
}
