import React from 'react';
import Title from '../../components/editor/Title';

export default function(options = {}) {
  const schema = {
    blocks: {
      title: {
        nodes: [
          {
            match: { type: 'text' }
          }
        ]
      }
    }
  };

  function renderBlock(props, editor, next) {
    const { node } = props;
    switch (node.type) {
      case 'title':
        return <Title {...props} placeholder={options.placeholder} />;
      default:
        return next();
    }
  }
  return {
    renderBlock
  };
}
