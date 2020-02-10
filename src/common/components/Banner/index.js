import React from 'react';
import { Col } from 'antd';

//styles
import classes from './styles.module.scss';

const Banner = ({ text }) => {
  return (
    <Col xs={24} md={24} className={classes.banner}>
      <div className={classes.text}>{text}</div>
    </Col>
  );
}

export default Banner;