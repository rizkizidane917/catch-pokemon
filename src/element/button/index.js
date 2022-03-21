import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
const Button = (props) => {
  const className = [props.className];

  if (props.isLarge)
    className.push(
      'text-gray-100  hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-2 dark:border-gray-700 dark:bg-gray-800   dark:hover:bg-gray-700 shadow-5xl border border-r-0 border-b-0 border-opacity-30'
    );
  if (props.isSmall)
    className.push(
      'text-gray-100  hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-2 dark:border-gray-700 dark:bg-gray-800   dark:hover:bg-gray-700 shadow-5xl border border-r-0 border-b-0 border-opacity-30'
    );

  const onClick = () => {
    if (props.onClick) props.onClick();
  };

  if (props.type === 'link') {
    if (props.isExternal) {
      return (
        <a href={props.href} className={className.join(' ')} style={props.style} target={props.target === '_blank' ? '_blank' : undefined} rel='noopener noreferrer'>
          {props.children}
        </a>
      );
    } else {
      return (
        <Link to={props.href} className={className.join(' ')} style={props.style} onClick={props.onClick}>
          {props.children}
        </Link>
      );
    }
  }

  return (
    <button className={className.join(' ')} style={props.style} onClick={onClick}>
      {props.children}
    </button>
  );
};

Button.propTypes = {
  type: propTypes.oneOf(['button', 'link']),
  onClick: propTypes.func,
  href: propTypes.string,
  target: propTypes.string,
  className: propTypes.string,
  isLoading: propTypes.bool,
  isExternal: propTypes.bool,
  isSmall: propTypes.bool,
  isLarge: propTypes.bool,
};

export default Button;
