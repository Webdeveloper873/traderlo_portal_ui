import React from 'react';
import { Steps, Icon, Row } from 'antd';

//styles
import classes from './styles.module.scss';

const { Step } = Steps;

const doneIcon = { color: '#00bcd4' };

const OrderTracker = () => {
  return (
    <>
      <Steps>
        <Step size="small" status="finish" description="Order Received payment Successfull" title="Done" icon={<Icon type="check-circle" style={doneIcon} />} />
        <Step size="small" status="finish" description="Seller Notified to trasfer Domain" title="Done" icon={<Icon type="check-circle" style={doneIcon} />} />
        <Step size="small" status="process" title="In progress" description="Domain Transfer Initiated" icon={<Icon type="minus-circle" theme="filled" style={doneIcon} />} />
        <Step size="small" status="wait" title="waiting" description="Domain transfered" icon={<Icon type="lock" theme="filled" />} />
        <Step size="small" status="wait" title="waiting" description={
          <>
            <div><span>{"Domain Received"}</span></div>
            <div> <a href='/'> <span className={classes.doneColor}>{`Click Here to Confirm`}</span></a></div>
          </>} icon={<Icon type="lock" theme="filled" />} />
      </Steps>
      <Row className={classes.bottomComment}> <span> Something did not go as expected? </span> <span className={classes.linkDecor}> Dispute Transaction? </span></Row>
    </>
  )
}

export default OrderTracker;