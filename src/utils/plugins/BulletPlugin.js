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
  function onKeyDown(event, editor, next) {
    // console.log('BulletPlugin - onKeyDown', event);
    // console.log('BulletPlugin - editor', editor);
    return next();
  }
  return {
    renderBlock,
    onKeyDown
  };
}
