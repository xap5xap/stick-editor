import React from 'react';
import SubTitle from '../../components/editor/Subtitle';

export default function(options = {}) {
  const schema = {
    blocks: {
      subtitle: {
        nodes: [
          {
            match: { type: 'text', min: 1, max: 1 }
          }
        ]
      }
    }
  };

  function renderBlock(props, editor, next) {
    const { node } = props;
    switch (node.type) {
      case 'subtitle':
        return <SubTitle {...props} placeholder={options.placeholder} />;
      default:
        return next();
    }
  }
  return {
    renderBlock,
    
  };
}
