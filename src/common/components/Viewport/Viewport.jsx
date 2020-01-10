/*
    Viewport: user's visible area of a page
*/
import React from 'react';
import './styles.scss';

const propTypes = {
}

const defaultProps = {
}

//eslint-disable-next-line
const Viewport = ({ children }) => {
  return (
    <div className='viewport-container'>
      {children}
    </div>
  );
}

Viewport.propTypes = propTypes;
Viewport.defaultProps = defaultProps;

export default Viewport;