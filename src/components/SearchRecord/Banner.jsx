import React from 'react';
import { Col } from 'react-bootstrap';

//styles
import classes from './styles.module.scss';

const Banner = ({text}) => {
  return(
    <Col xs={12} md={12} className={classes.banner}>
      <div className={classes.text}>{text}</div>
    </Col>
  );
}

export default Banner;