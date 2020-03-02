import React from 'react';
import { Avatar, Input, Row, Col, Button, Radio, Checkbox } from 'antd';

//styles
import classes from '../../styles.module.scss';

//assets
import bankCheck from 'assets/payments/bankCheck.png';
import debitCards from 'assets/payments/debitCards.png';
import paypal from 'assets/payments/paypal.png';

const DebitCredit = ({nextStep}) => {
  return(
    <>
      <Avatar shape="square" size={120} icon="user" src={debitCards} />
      <Row className={classes.inputRow} gutter={[32, 16]}>
        <p><strong>Enter Card Details</strong></p>
        <Col span={24}>
          <Input placeholder='Çard Number' />
        </Col>
        <Col span={24}>
          <Input placeholder='Name on card' />
        </Col>
        <Col span={16}>
          <Input placeholder='Expiration Date' />
        </Col>
        <Col span={8}>
          <Input placeholder='CVV' />
        </Col>
        <Col span={24}>
          <Input placeholder='Zip Code' />
        </Col>
        <Button type='primary' onClick={nextStep} size='large'>Verify Card</Button>
      </Row>
    </>
  )
}

const CardInfo = ({info}) => {
  return(
    <Col span={24}>
      <Radio className={classes.inputBlock}>{info}</Radio>
    </Col>
  );
}

const BankAccount = ({nextStep}) => {
  const tempCardInfo = ['XXXX-XXXX-XXXX-1234', 'XXXX-XXXX-XXXX-5678'];
  return (
    <>
      <Avatar shape="square" size={120} icon="user" src={bankCheck} />
      <p>Select from the available cards to finish the purchase</p>
      <Row gutter={[0,20]}>
        {tempCardInfo.map(info => <CardInfo info={info}/>)}
        <Col span={24}>
          <Checkbox>{'I agreeto the terms & conditions, buyer policy of traderlo'}</Checkbox>
        </Col>
      </Row>
      <Button type='primary' onClick={nextStep} size='large'>Make Payment</Button>
    </>
  )
}

const MethodDetails = ({selectedOpt, ...props}) => {
  switch(selectedOpt){
    case 1:
      return <DebitCredit {...props}/>;
    case 2:
      return <BankAccount {...props}/>;
    default:
      return null;
  }
}

export default MethodDetails;