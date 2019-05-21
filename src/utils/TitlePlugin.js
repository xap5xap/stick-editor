import React from 'react';
import Title from '../components/editor/Title';

export default function(options = {}) {
  const schema = {
    blocks: {
      code: {
        nodes: [
          {
            match: { type: 'title', min: 1, max: 1 }
          }
        ]
      }
    }
  };

  function renderNode(props, editor, next) {
    const { node, attributes, children } = props;

    console.log('headerPlugin - renderNode');

    switch (node.type) {
      case 'title':
        return <Title {...props} placeholder={options.placeholder} />;
      default:
        return next;
    }
  }
  return {
    renderNode,
    schema
  };
}
