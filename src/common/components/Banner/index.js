import React from 'react';
import { Col, Breadcrumb } from 'antd';

//styles
import classes from './styles.module.scss';

const Banner = ({ text, path }) => {
  return (
    <Col xs={24} md={24} className={classes.banner}>
      <div className={classes.text}>{text}</div>
      {path && <Breadcrumb className={`${classes.text} ${classes.breadcrumb}`} separator='>'>
        {path.map(name=><Breadcrumb.Item>{name}</Breadcrumb.Item>)}
      </Breadcrumb>}
    </Col>
  );
}

export default Banner;