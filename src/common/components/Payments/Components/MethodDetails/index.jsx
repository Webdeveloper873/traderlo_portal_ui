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

  const routingNum = useFormInput();
  const acctNum = useFormInput();
  const acctHolderName = useFormInput();
  const acctType = useFormInput();

  

  const dispatch = useDispatch();
  const tempCardInfo = ['XXXX-XXXX-XXXX-1234', 'XXXX-XXXX-XXXX-5678'];





  const onMakePayment = () => {
    console.log('makepayment')

    const data = {
      accountNumber: JSON.stringify(acctNum),
      country: "Philippine",
      currency: "Peso",
      name: JSON.stringify(acctHolderName),
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
          <Col span={24}>
            <Checkbox onClick={onClickAgreement}>{'I agree to the terms & conditions, buyer policy of traderlo'}</Checkbox>
          </Col>
        </Row>
      <Button type='primary' onClick={onMakePayment} disabled={checkedAgreement} size='large'>Verify Account</Button>
    </>
  )
}


const Paypal = ({nextStep}) => {
  
  const isDone = useSelector(({ payment }) => payment.isDone);
  const signUpUserPass = useFormInput('');
  const signUpUserEmail = useFormInput('');

  const dispatch = useDispatch();

  const onMakePayment = () => {
    console.log('makepayment')
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




const RegisteredAccount = ({nextStep, selectedOpt}) => {
  console.log('selectedOpt',selectedOpt)
  
  const debitCreditInfo = {
    img : debitCards,
    instruction: 'Select from the available cards to finish the purchase',
    accountList: useSelector(({ user }) => user.savedCards), // input account here
  } 

  const bankAcctInfo = {
    img : bankCheck,
    instruction: 'Select your bank to finish payment',
    accountList: useSelector(({ user }) => user.savedBanks), // input account here
  } 
  const selectedInfo = selectedOpt === 1 ? debitCreditInfo : bankAcctInfo
  const isDone = useSelector(({ payment }) => payment.isDone);
  const [checkedAgreement, setToCheck] = useState(true); 
  const [checkedAccountNumber, setToSelectedAccount] = useState(true); 

  const dispatch = useDispatch();
  const tempCardInfo = ['XXXX-XXXX-XXXX-1234', 'XXXX-XXXX-XXXX-5678']; // i use this becasue there is no sample output


  const onMakePayment = () => {
    console.log('makepayment')

    const data = {
      amount: 11111120,
      paymentId: 12,
      currency: "eur",
      type: 'CARD', // "card" or "account"
    }

    dispatch(payment.charge(data));
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
      <Avatar shape="square" size={120} icon="user" src={selectedInfo.img} />
      <p>{selectedInfo.instruction}</p>
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
  
  const savedBanks = useSelector(({ user }) => user.savedBanks);
  const savedCards = useSelector(({ user }) => user.savedCards);

  // check if there are available cards and bank account then show either verification process or payment process
  const hasSavedCards = savedCards.length > 0 ? true : false;  
  const hasSavedBanks = savedBanks.length > 0 ? true : false;

  switch(selectedOpt){
    case 1:
      return (hasSavedCards ? <RegisteredAccount {...props} selectedOpt={selectedOpt}/> : <DebitCredit {...props}/>);
    case 2:
      return (hasSavedBanks ? <RegisteredAccount {...props} selectedOpt={selectedOpt}/> : <BankAccount {...props}/>);
    case 3:
      return <Paypal {...props}/>;
    default:
      return null;
  }
}

export default MethodDetails;