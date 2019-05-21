import React from 'react';
import Bullet from '../../components/editor/Bullet';

export default function(options = {}) {
  function renderBlock(props, editor, next) {
    const { node } = props;
    switch (node.type) {
      case 'bullet':
        return <Bullet {...props} placeholder={options.placeholder} />;
      default:
        return next();
    }
  }
  return {
    renderBlock
  };
}
