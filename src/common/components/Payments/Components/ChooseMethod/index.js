import React from 'react';
import { Avatar, Divider, Row, Col, Button, Steps } from 'antd';

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
    label: 'Credit / Debit Card',
    imgSrc: debitCards
  },
  {
    label: 'Bank Account',
    imgSrc: bankCheck
  },
  {
    label: 'Credit / Debit Card',
    imgSrc: paypal
  },
]

const PaymentOptions = ({imgSrc, label}) => {
  return(
    <Col {...responsiveConf.threeCol}>
      <Row><Avatar shape="square" size={120} icon="user" src={imgSrc} /></Row>
      {label && <Row><span className={classes.fontDecor}>{label}</span></Row>}
    </Col>
  )
}

const ChooseMethod = ({nextStep}) => {
  return(
    <>
      <span className={classes.subHeader}>Select the Payment Method to make the payment</span>
      <Row className={classes.imageRow}>
        {optDetails.map(opt => <PaymentOptions label={opt.label} imgSrc={opt.imgSrc} />)}
      </Row>
      <Row className={classes.btnContainer}>
        <Button onClick={nextStep} size='large' className={classes.btnStyle}>Proceed</Button>
      </Row>
      <Row className={classes.contactRow}>
        <span className={classes.fontDecor}> Problem with payment? contact us on</span>
        <span className={classes.linkDecor}> pay@traderlo.com</span>
      </Row>
    </>
  );
}

export default ChooseMethod;