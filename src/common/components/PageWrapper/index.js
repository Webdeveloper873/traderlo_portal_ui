import React from 'react';
import {Row} from 'react-bootstrap';

//styles
import classes from './styles.module.scss';

const PageWrapper = ({children}) => {
  return(
    <Row className={classes.wrapperStyle}>
      {children}
    </Row>
  );
}

export default PageWrapper;