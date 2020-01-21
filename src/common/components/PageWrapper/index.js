import React from 'react';
import {Row} from 'react-bootstrap';

//styles
import classes from './styles.module.scss';

const PageWrapper = ({center, children}) => {
  return(
    <Row className={`${classes.wrapperStyle} ${center ? classes.centerContent : ''}`}>
      {children}
    </Row>
  );
}

export default PageWrapper;