import React from 'react';
import propTypes from 'prop-types';
const Text = (props) => {
  const className = [props.className];

  if (props.textPrimary) className.push('mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white ');

  if (props.textSecondary) className.push('mb-2 text-sm font-light tracking-tight text-gray-900 dark:text-white ');
  return (
    <h1 className={className.join(' ')} style={props.style}>
      {props.children}
    </h1>
  );
};

Text.propTypes = {
  className: propTypes.string,
  textPrimary: propTypes.bool,
  textSecondary: propTypes.bool,
  textAdditional: propTypes.bool,
};

export default Text;
