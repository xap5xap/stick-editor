import { Block } from 'slate';

export const schema = {
  document: {
    nodes: [{ match: { type: 'header' }, min: 1, max: 1 }],
    normalize: (editor, { code, node, child, index }) => {
      let type = 'paragraph';
      if (index === 0) {
        type = 'header';
      } else if (index === 1) {
        type = 'subHeader';
      }
      if (code === 'child_type_invalid') {
        console.log('child_type_invalid');
        return editor.setNodeByKey(child.key, type);
      }
      if (code === 'child_min_invalid') {
        console.log('child_min_invalid');
        const block = Block.create(type);

        return editor.insertNodeByKey(node.key, index, block);
      }
    }
  }
};