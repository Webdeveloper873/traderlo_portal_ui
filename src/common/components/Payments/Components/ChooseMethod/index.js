import React from 'react';
import { Avatar, Row, Col, Button } from 'antd';

//styles
import classes from '../../styles.module.scss';

//assets
import bankCheck from 'assets/payments/bankCheck.png';
import debitCards from 'assets/payments/debitCards.png';
import paypal from 'assets/payments/paypal.png';

//constants
import { responsiveConf } from 'common/constants';

const optDetails = [
  {
    value: 1,
    label: 'Credit / Debit Card',
    imgSrc: debitCards
  },
  {
    value: 2,
    label: 'Bank Account',
    imgSrc: bankCheck
  },
  {
    value: 3,
    label: 'Credit / Debit Card',
    imgSrc: paypal
  },
]

const PaymentOptions = ({imgSrc, label, ...props}) => {
  return(
    <Col  {...responsiveConf.threeCol} {...props}>
      <Row><Avatar shape="square" size={120} icon="user" src={imgSrc} /></Row>
      {label && <Row><span className={classes.fontDecor}>{label}</span></Row>}
    </Col>
  )
}

const ChooseMethod = ({ selectedOpt, onClickOpt, nextStep, paymentAvail}) => {
  return(
    <>
      <span className={classes.subHeader}>
        {paymentAvail ? 'Select the Payment Method to make the payment' : 'Please link and verify your preferred payment method'}
      </span>
      <Row className={classes.imageRow}>
        {optDetails.map(opt => (
          <PaymentOptions label={opt.label}
            imgSrc={opt.imgSrc}
            onClick={() => onClickOpt(opt.value)}
            className={`${selectedOpt === opt.value ? classes.selected : ''}`}
          />
        ))}
      </Row>
      <Row className={classes.btnContainer}>
        <Button onClick={nextStep} size='large' disabled={!selectedOpt} className={classes.btnStyle}>Proceed</Button>
      </Row>
      <Row className={classes.contactRow}>
        <span className={classes.fontDecor}>Problem with payment? contact us on</span>
        <span className={classes.linkDecor}>pay@traderlo.com</span>
      </Row>
    </>
  );
}

export default ChooseMethod;