import React from 'react';

import classes from './styles.module.scss';

const text = ({children}) => {
  return(
    <span>{children}</span>
  );
}

const Divider = ({ className, children, ...props }) => {
  return(
    <div className={`${classes.separator} ${className}`}>
      {children}
    </div>
  );
}

Divider.text = text;

export default Divider;