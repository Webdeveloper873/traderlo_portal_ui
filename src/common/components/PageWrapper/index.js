import React from 'react';
import {Row} from 'react-bootstrap';

//styles
import classes from './styles.module.scss';

const PageWrapper = ({center, addTopMargin, className, children, ...props}) => {
  return(
    <Row
      className={`${classes.wrapperStyle} ${center ? classes.centerContent : ''} ${addTopMargin ? classes.paddingTop15 : ''} ${className}`}
      {...props}
    >
      {children}
    </Row>
  );
}

export default PageWrapper;