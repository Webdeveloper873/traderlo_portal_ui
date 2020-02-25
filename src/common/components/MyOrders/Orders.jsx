import React, {useState} from 'react';
import {Col, Row, Card, Avatar, Collapse, Icon, Steps} from 'antd';
import moment from 'moment'

//styles
import classes from './styles.module.scss';

import domainImg from 'assets/selling/domain.png';
import paymentsImg from 'assets/myOrders/payments.png';


const { Panel } = Collapse;
const { Step } = Steps;

const doneIcon = {color:'#00bcd4'};

function callback(key) {
  console.log(key);
}


const NameCard = () => {
  return (
    <>
      <Row>
        <Col span={5}>
          <Avatar size={50} src={domainImg} /> 
        </Col>
        <Col span={19}>
          <span className={classes.nameDecor}>{'cardealsnearme.com'}</span>
          <div>{'Domain'}</div>
        </Col>
      </Row>
    </>
  )
}


const OrderStatus = () => {

  // const [icon,setIcon] = useState ('plus-circle');

  return (
    <>
      <Row>
        <button className={classes.statusDesign} disabled>{'In Progress'}</button>
      </Row>
      {/* <Row >
      <Button type="link" block style={{color:'#00bcd4'}}>
        <span style={{fontSize:15, }}> Track </span> <Icon style={{ fontSize:16}} type={icon} theme="filled" />
      </Button>
      </Row> */}
    </>
  )
}
const ItemDetails = () => {
  return (
    <Row>
    <Col span={2} className={classes.itemDetails}>
      <span >{'#123456'}</span>
    </Col>
    <Col span={8}>
      <NameCard></NameCard>
    </Col>
    <Col span={4} className={classes.itemDetails}>
      <span >{'$60.00 '}</span>
    </Col>
    <Col span={4} className={classes.itemDetails}>
      {moment().format('MMMM DD, YYYY')}
    </Col>
    <Col span={3}>
      <Avatar size={50} src={paymentsImg} shape="square"/> 
    </Col>
    <Col span={3}>
      <OrderStatus></OrderStatus>
    </Col>
  </Row>
  )
}

const TrackProgress = () => {
  return (
    <Row>
    <Collapse defaultActiveKey={[]} onChange={callback} expandIconPosition={'right'}>
        <Panel key="1" header="Track">
          <Steps>
            <Step size="small" status="finish" description="Order Received payment Successfull" title="Done" icon={<Icon type="check-circle" style={doneIcon}/>} />
            <Step size="small" status="finish" description="Seller Notified to trasfer Domain" title="Done" icon={<Icon type="check-circle" style={doneIcon}/>} />
            <Step size="small" status="process" title="In progress" description="Domain Transfer Initiated" icon={<Icon type="minus-circle"  theme="filled" style={doneIcon}/>} />
            <Step size="small" status="wait" title="waiting" description="Domain transfered"  icon={<Icon type="lock" theme="filled" />} />
            <Step size="small" status="wait" title="waiting" description={
              <>
                <div><span>{"Domain Received"}</span></div>
                <div> <a> <span className={classes.doneColor}>{`Click Here to Confirm`}</span></a></div>
              </> } icon={<Icon type="lock" theme="filled" />} />
          </Steps>
          <Row className={classes.bottomComment}> <span> Something did not go as expected? </span> <span className={classes.linkDecor}> Dispute Transaction? </span></Row>
          
        </Panel>
      </Collapse>
    </Row>
  )
}

const Orders = () => {
  return(
    <>
      <Card>
        <ItemDetails></ItemDetails>
        <TrackProgress></TrackProgress>
      </Card>
    </>
  );
}

export default Orders;