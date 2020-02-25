import React from 'react';
import { Avatar, Divider, Row, Col, Button } from 'antd';


import CardItem from '../CardItem'
//styles
import classes from './styles.module.scss';

//assets
import bankCheck from '../../../assets/payments/bankCheck.png';
import debitCards from '../../../assets/payments/debitCards.png';
import paypal from '../../../assets/payments/paypal.png';


const Payments = () => {
  return(
    <div className={classes.paymentWrap}>
    <span className={classes.header}>Just Few Clicks to finish you purchase! </span>
      <Divider />
      <span className={classes.subHeader}>Select the Payment Method to make the payment</span>  
        <Row className={classes.imageRow}>
            <Col span={8}>
                <Row><Avatar shape="square" size={120} icon="user" src={debitCards} /></Row>
                <Row><span className={classes.fontDecor}> Credit / Debit Card</span></Row>
            </Col>
            <Col span={8}>
                <Row><Avatar shape="square" size={120} icon="user" src={bankCheck} /></Row>
                <Row><span className={classes.fontDecor}> Bank Account </span></Row>
            </Col>
            <Col span={8}>
                <Row>{' '}</Row>
                <Row><Avatar shape="square" size={120} icon="user" src={paypal} /></Row>
            </Col>
        </Row>
        <Row className={classes.btnContainer}>
        <Button size='large' className={classes.btnStyle}>Proceed</Button>
        </Row>
        <Row className={classes.contactRow}>
          <span className={classes.fontDecor}> Problem with payment? contact us on</span>
          <span className={classes.linkDecor}> pay@traderlo.com</span>
        </Row>
    </div>
  );
}

export default Payments;