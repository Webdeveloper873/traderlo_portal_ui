import React from 'react';
import { Row, Col } from 'antd';

//resources
import domainLogo from 'assets/listings/domainLogo.png';

//styles
import classes from './styles.module.scss';

const Name = ({ name, type }) => {
  return(
    <Row className={classes.container}>
      <Col span={8}>
        <img src={domainLogo} alt='loading' />
      </Col>
      <Col span={16}>
        <b>{name}</b><br/>
        <p>{type}</p>
      </Col>
    </Row>
  )
}

export default Name;