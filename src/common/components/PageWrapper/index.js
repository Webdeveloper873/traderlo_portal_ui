import React from 'react';
import {Row} from 'react-bootstrap';

//styles
import classes from './styles.module.scss';

const PageWrapper = ({center, className, children}) => {
  return(
    <Row className={`${classes.wrapperStyle} ${center ? classes.centerContent : ''} ${className}`}>
      {children}
    </Row>
  );
}

export default PageWrapper;