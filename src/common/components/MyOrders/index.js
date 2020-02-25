import React from 'react';
import {Col, Row, Card, Avatar, Collapse} from 'antd';

//styles
import Orders from './Orders';
// ** Header Col must same with the Orders Col ***

const Headers = () => {
  return (
    <Card>
     <Row>
        <Col span={2}>
          <h6>Order Id </h6>
        </Col>
        <Col span={8}>
          <h6>Name</h6>
        </Col>
        <Col span={4}>
          <h6>Purchase Price </h6>
        </Col>
        <Col span={4}>
          <h6>Order On </h6>
        </Col>
        <Col span={3}>
          <h6>Invoice</h6>
        </Col>
        <Col span={3}>
          <h6>Order Status</h6>
        </Col>
      </Row>
    </Card>
  )
}

const myOrderList = () => {
  return(
    <>
       <Card>
         <h5>My Orders</h5>
         <Headers></Headers>
         <Orders></Orders>
       </Card>
    </>
  );
}

export default myOrderList;