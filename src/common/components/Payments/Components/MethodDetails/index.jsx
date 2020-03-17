import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar, Input, Row, Col, Button, Radio, Checkbox } from 'antd';

//styles
import classes from '../../styles.module.scss';

//actions
import * as payment from 'appRedux/actions/payment';

//utils
import { useFormInput } from 'common/utils/hooks';

//assets
import bankCheck from 'assets/payments/bankCheck.png';
import debitCards from 'assets/payments/debitCards.png';
import paypal from 'assets/payments/paypal.png';

const DebitCredit = ({nextStep}) => {
  const isDone = useSelector(({ payment }) => payment.isDone);
  const cardNum = useFormInput();
  const cardName = useFormInput();
  const expiryDate = useFormInput();
  const cvv = useFormInput();
  const zipcode = useFormInput();
  const dispatch = useDispatch();

  const onClickVerify = () => {
    //verify then charge
    const date = expiryDate.value && expiryDate.value.split('/');
    const data = { //temp
      cardNumber: '4242424242424242',
      cvc: '314',
      expMonth: 3,
      expYear: 2021,
      name: 'string',
    }
    // const data = {
    //   cardNumber: cardNum.value,
    //   cvc: cvv.value,
    //   expMonth: date[0] ? parseInt(date[0]) : 0,
    //   expYear: date[1] ? parseInt(date[1]) : 0,
    //   name: cardName.value,
    // }
    console.log('verifyData', data);
    dispatch(payment.verifyCard(data));
  }

  if(isDone){
    nextStep();
  }

  return(
    <>
      <Avatar shape="square" size={120} icon="user" src={debitCards} />
      <Row className={classes.inputRow} gutter={[32, 16]}>
        <p><strong>Enter Card Details</strong></p>
        <Col span={24}>
          <Input onChange={cardNum.handleInputChange} placeholder='Çard Number' />
        </Col>
        <Col span={24}>
          <Input onChange={cardName.handleInputChange} placeholder='Name on card' />
        </Col>
        <Col span={16}>
          <Input onChange={expiryDate.handleInputChange} placeholder='Expiration Date(MM/YYYY)' />
        </Col>
        <Col span={8}>
          <Input onChange={cvv.handleInputChange} type='password' placeholder='CVV' />
        </Col>
        <Col span={24}>
          <Input onChange={zipcode.handleInputChange} placeholder='Zip Code' />
        </Col>
        <Button type='primary' onClick={onClickVerify} size='large'>Verify Card</Button>
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
  
  const isDone = useSelector(({ payment }) => payment.isDone);
  const [checkedAgreement, setToCheck] = useState(true); 
  const [checkedAccountNumber, setToSelectedAccount] = useState(true); 

  const dispatch = useDispatch();
  const tempCardInfo = ['XXXX-XXXX-XXXX-1234', 'XXXX-XXXX-XXXX-5678'];





  const onMakePayment = () => {
    console.log('makepayment')

    const data = {
      accountNumber: "4242424242424242",
      country: "Philippine",
      currency: "Peso",
      name: "wokina washimi",
    }
    dispatch(payment.addAccount(data));
  }

  const onClickAgreement = (e) => {
    setToCheck(!checkedAgreement);
  }

  const onClickAccountNumber = (e) => {
    setToSelectedAccount(!checkedAccountNumber);
  }


  if(isDone){
    nextStep();
  }




  return (
    <>
      <Avatar shape="square" size={120} icon="user" src={bankCheck} />
      <p>Select from the available cards to finish the purchase</p>
      <Row gutter={[0,20]}>
        {tempCardInfo.map(info => <CardInfo onClick={onClickAccountNumber} info={info}/>)}
        <Col span={24}>
          <Checkbox onClick={onClickAgreement}>{'I agree to the terms & conditions, buyer policy of traderlo'}</Checkbox>
        </Col>
      </Row>
      <Button type='primary' onClick={onMakePayment} disabled={checkedAgreement} size='large'>Make Payment</Button>
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