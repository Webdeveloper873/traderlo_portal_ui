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
    <div style={{textAlign:'center'}}>
    <span style={{fontSize:15, fontWeight:700}}>Just Few Clicks to finish you purchase! </span>
      <Divider />
      <span style={{fontSize:12, fontWeight:600}}>Select the Payment Method to make the payment</span>  
        <Row style={{marginTop:50}}>
            <Col span={8}>
                <Row><Avatar shape="square" size={120} icon="user" src={debitCards} /></Row>
                <Row><span style={{fontSize:12, fontWeight:600}}> Credit / Debit Card</span></Row>
            </Col>
            <Col span={8}>
                <Row><Avatar shape="square" size={120} icon="user" src={bankCheck} /></Row>
                <Row><span style={{fontSize:12, fontWeight:600}}> Bank Account </span></Row>
            </Col>
            <Col span={8}>
                <Row>{' '}</Row>
                <Row><Avatar shape="square" size={120} icon="user" src={paypal} /></Row>
            </Col>
        </Row>
        <Row className={classes.btnContainer}>
        <Button size='large' className={classes.btnStyle}>Proceed</Button>
        </Row>
        <Row style={{marginTop:40}}>
          <span style={{fontSize:12, fontWeight:600}}> Problem with payment? contact us on</span>
          <span style={{fontSize:12, fontWeight:600, color:'#00bcd4'}}> pay@traderlo.com</span>
        </Row>
    </div>
  );
}

export default Payments;