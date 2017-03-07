import React from 'react';
import { isUndefined } from 'lodash';

const TextComponent = (props) => {
  const content = isUndefined(props.content) ? 'a component for testing' : props.content;

  return (
    <div style={ props.style }>
      { content }
    </div>
  );
};

export default TextComponent;
