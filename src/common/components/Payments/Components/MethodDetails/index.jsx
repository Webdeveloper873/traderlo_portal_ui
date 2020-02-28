import React from 'react';
import {Avatar, Input, Row, Col, Button} from 'antd';

//styles
import classes from '../../styles.module.scss';

//assets
import bankCheck from 'assets/payments/bankCheck.png';
import debitCards from 'assets/payments/debitCards.png';
import paypal from 'assets/payments/paypal.png';

const MethodDetails = ({type}) => {
  return(
    <>
      <Avatar shape="square" size={120} icon="user" src={debitCards} />
      <Row className={classes.inputRow} gutter={[32,16]}>
        <p><strong>Enter Card Details</strong></p>
        <Col span={24}>
          <Input placeholder='Çard Number'/>
        </Col>
        <Col span={24}>
          <Input placeholder='Name on card'/>
        </Col>
        <Col span={16}>
          <Input placeholder='Expiration Date'/>
        </Col>
        <Col span={8}>
          <Input placeholder='CVV'/>
        </Col>
        <Col span={24}>
          <Input placeholder='Zip Code'/>
        </Col>
        <Button type='primary'>Verify Card</Button>
      </Row>
    </>
  );
}

export default MethodDetails;