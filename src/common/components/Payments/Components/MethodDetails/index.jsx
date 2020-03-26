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

  const onClickVerifyCard = () => {
    //verify then charge
    const date = expiryDate.value && expiryDate.value.split('/');
    const data = {
      cardNumber: cardNum.value,
      cvc: cvv.value,
      expMonth: date[0] ? parseInt(date[0]) : 0,
      expYear: date[1] ? parseInt(date[1]) : 0,
      name: cardName.value,
    }
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
        <Button type='primary' onClick={onClickVerifyCard} size='large'>Verify Card</Button>
      </Row>
    </>
  )
}



const BankAccount = ({nextStep}) => {
  const dispatch = useDispatch();

  const isDone = useSelector(({ payment }) => payment.isDone);

  const routingNum = useFormInput();
  const acctNum = useFormInput();
  const acctHolderName = useFormInput();
  const acctType = useFormInput();



  const onClickVerifyBankAccount = () => {

    const data = { // need to update this one
      accountNumber: acctNum.value, //this is aleready string
      routingNumber: parseInt(routingNum.value),
      currency: "individual",
      name: acctHolderName.value, //already string
    }
    dispatch(payment.addAccount(data));
  }

  if(isDone){
    nextStep();
  }


  return (
    <>
      <Avatar shape="square" size={120} icon="user" src={bankCheck} />
        <Row className={classes.inputRow} gutter={[32, 16]}>
          <p><strong>Enter Account Details</strong></p>
          <Col span={24}>
            <Input onChange={routingNum.handleInputChange} type='password' placeholder='Routing Number' />
          </Col>
          <Col span={24}>
            <Input onChange={acctNum.handleInputChange} type='password' placeholder='Account Number' />
          </Col>
          <Col span={24}>
            <Input onChange={acctHolderName.handleInputChange} placeholder='Account Holder Name' />
          </Col>
          <Col span={24}>
            <Input onChange={acctType.handleInputChange} placeholder='Account Type' />
          </Col>
        </Row>
      <Button type='primary' onClick={onClickVerifyBankAccount} size='large'>Verify Account</Button>
    </>
  )
}


const Paypal = ({nextStep}) => {
  const isDone = useSelector(({ payment }) => payment.isDone);
  const signUpUserPass = useFormInput('');
  const signUpUserEmail = useFormInput('');

  const onMakePayment = () => {
    nextStep();
  }

  if(isDone){
    nextStep();
  }

  return (
    <>
      <Avatar shape="square" size={120} icon="user" src={paypal} />
        <Row className={classes.inputRow} gutter={[32, 16]}>
          <p><strong>Enter Account Details</strong></p>
          <Col span={24}>
            <Input onChange={signUpUserEmail.handleInputChange} placeholder='Email Address' />
          </Col>
          <Col span={24}>
            <Input onChange={signUpUserPass.handleInputChange} type='password' placeholder='Password' />
          </Col>
        </Row>
      <Button type='primary' onClick={onMakePayment} size='large'>Log In</Button>
    </>
  )
}


const CardInfo = ({info}) => {
  return(
    <Col span={24}>
      <Radio className={classes.inputBlock} value={info}>{info}</Radio>
    </Col>
  );
}

// this is for PAYMENT
const RegisteredAccount = ({nextStep, selectedOpt}) => {
  const dispatch = useDispatch();

  const debitCreditInfo = {
    img : debitCards,
    instruction: 'Select from the available cards to finish the purchase',
    fetchedList: useSelector(({ user }) => user.savedCards),
  }

  const bankAcctInfo = {
    img : bankCheck,
    instruction: 'Select your bank to finish payment',
    fetchedList:  useSelector(({ user }) => user.savedBanks),
  }

  const selectedInfo = selectedOpt === 1 ? debitCreditInfo : bankAcctInfo
  const isDone = useSelector(({ payment }) => payment.isDone);
  const [checkedAgreement, setToCheck] = useState(true);
  const [selectedAccountNumber, setToSelectedAcct] = useState('');

  const onMakePayment = () => {

    const data = {
      amount: 120,
      paymentId: 12,
      currency: "eur",
      type: selectedOpt === 1 ? "CARD" : "ACCOUNT"
    }
    dispatch(payment.charge(data));
  }

  const onClickAgreement = (e) => {
    setToCheck(!checkedAgreement);
  }

  if(isDone){
    nextStep();
  }

  const onChangeSelected = (e) => {
    setToSelectedAcct(e.target.value);
  }

  return (
    <>
      <Avatar shape="square" size={120} icon="user" src={selectedInfo.img} />
      <p>{selectedInfo.instruction}</p>
      <Row gutter={[0,20]}>
        <Radio.Group onChange={onChangeSelected} value={selectedAccountNumber}>
          {selectedInfo.fetchedList.length > 0 && selectedOpt === 1 ?  // 1 = card , 2 = bank account
          selectedInfo.fetchedList.map(info => <CardInfo info={info.cardId}/>) :
          selectedInfo.fetchedList.map(info => <CardInfo info={info.accountNumber}/>)}
          <Col span={24}>
            <Checkbox onClick={onClickAgreement}>{'I agree to the terms & conditions, buyer policy of traderlo'}</Checkbox>
          </Col>
        </Radio.Group>
      </Row>
      <Button type='primary' onClick={onMakePayment} disabled={checkedAgreement} size='large'>Make Payment</Button>
    </>
  )
}





const MethodDetails = ({selectedOpt, isAddOnly, ...props}) => {

  const savedBanks = useSelector(({ user }) => user.savedBanks);
  const savedCards = useSelector(({ user }) => user.savedCards);

  // check if there are available cards and bank account then show either verification process or payment process
  const hasSavedCards = savedCards.length > 0 ? true : false;
  const hasSavedBanks = savedBanks.length > 0 ? true : false;

  let toRegisteredCard = false;
  let toRegisteredAcct = false;

  if (isAddOnly) {
    // this will set to ADD FEATURE (card/accout)
    toRegisteredCard = false;
    toRegisteredAcct = false;
  } else {
    toRegisteredCard = hasSavedCards;
    toRegisteredAcct = hasSavedBanks;
  }



  switch(selectedOpt){ // 1 = card , 2 = bank account
    case 1:
      return (toRegisteredCard ? <RegisteredAccount {...props} selectedOpt={selectedOpt}/> : <DebitCredit {...props}/>);
    case 2:
      return (toRegisteredAcct ? <RegisteredAccount {...props} selectedOpt={selectedOpt}/> : <BankAccount {...props}/>);
    case 3:
      return <Paypal {...props}/>;
    default:
      return null;
  }
}

export default MethodDetails;