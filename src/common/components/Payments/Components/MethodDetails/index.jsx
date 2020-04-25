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


//** DEBIT AND CREDIT CARD **//

const DebitCredit = ({nextStep}) => {
  const dispatch = useDispatch();
  const isDone = useSelector(({ payment }) => payment.isDone);

  const cardNum = useFormInput();
  const cardName = useFormInput();
  const expireMonth = useFormInput();
  const expireYear = useFormInput();
  const cvv = useFormInput();
  const zipcode = useFormInput();

  const numbers = /^[0-9]+$/;

  const [hasCardNumErr, setCardNumVerification] = useState(false);
  const [hasCardExpDateErr, setCardExpDateVerification] = useState(false); 
  const [loading, setLoading] = useState(false);


  const onClickVerifyCard = () => {
    const data = {
      cardNumber: cardNum.value,
      cvc: cvv.value,
      expMonth: expireMonth.value,
      expYear: expireYear.value,
      name: cardName.value,
    }
    console.log('verifyData', data);

    const cardNumVerified = cardNum.value && (cardNum.value.match(numbers) !== null) ? true : false;
    const cardNumberLength = cardNum.value ? cardNum.value.length : 0;

    const expMonthVerified = expireMonth.value && (expireMonth.value.match(numbers) !== null) ? true : false;
    const expMonthLength = expireMonth.value ? expireMonth.value.length : 0;

    const expYearVerified = expireYear.value && (expireYear.value.match(numbers) !== null) ? true : false;
    const expYearLength = expireYear.value ? expireYear.value.length : 0;

    const ccvVerified = cvv.value && (cvv.value.match(numbers) !== null) ? true : false;



    if (!cardNumVerified || cardNumberLength !== 16) {
      setCardNumVerification(true)
    } else {
      setCardNumVerification(false)
    }

    if ((!expMonthVerified || expMonthLength !== 2) ||
      (!expYearVerified || expYearLength !== 4) ||
      (!ccvVerified)) {
      setCardExpDateVerification(true)
    } else {
      setCardExpDateVerification(false)
    }

    //state usage is slow so Ive decided to use condition manualy
    if (!((!cardNumVerified || cardNumberLength !== 16) ||
      (!expMonthVerified || expMonthLength !== 2) ||
      (!expYearVerified || expYearLength !== 4) ||
      (!ccvVerified))) {
      setLoading(true);
      console.log('success');
      dispatch(payment.verifyCard(data));

      setTimeout(() => {
        setLoading(false);
        setCardNumVerification(false)
        setCardExpDateVerification(false)
      }, 1000);
    }

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
          {hasCardNumErr ? <span class="text-warning">Please Input Numbers only (max of 16 digits)</span> : ''}
          <Input onChange={cardNum.handleInputChange} placeholder='Çard Number' maxLength={16}/>
        </Col>
        <Col span={24}>
          <Input onChange={cardName.handleInputChange} placeholder='Name on card' />
          {hasCardExpDateErr ? <span class="text-warning">Please input correct date and CVV (number)</span> : ''}
        </Col>
        <Col span={6} style={{paddingRight:0, paddingTop:0}}>
          <Input onChange={expireMonth.handleInputChange} placeholder='MM' maxLength={2} />
        </Col>
        <Col span={1} style={{paddingLeft:0, paddingRight:0, paddingTop:0}}>
          <h5> /</h5>
        </Col>
          <Col span={8} style={{paddingLeft:0, paddingRight:60, paddingTop:0}}>
          <Input onChange={expireYear.handleInputChange} placeholder='YYYY' maxLength={4} />
        </Col>
        <Col span={8} style={{paddingRight:0, paddingTop:0}}>
          <Input onChange={cvv.handleInputChange} placeholder='CVV' maxLength={3} />
        </Col>
        <Col span={24}>
          <Input onChange={zipcode.handleInputChange} placeholder='Zip Code' />
        </Col>
        <Button type='primary' onClick={onClickVerifyCard} loading={loading} size='large'>Verify Card</Button>
      </Row>
    </>
  )
}



//** BANK ACCOUNT **//

const BankAccount = ({nextStep}) => {
  const dispatch = useDispatch();

  const isDone = useSelector(({ payment }) => payment.isDone);

  const routingNum = useFormInput();
  const acctNum = useFormInput();
  const acctHolderName = useFormInput();
  const acctType = useFormInput();

  const numbers = /^[0-9]+$/;

  const [hasRoutingNumErr, setRoutingNumVerification] = useState(false);
  const [hasAcctNumErr, setAcctNumVerification] = useState(false);
  const [loading, setLoading] = useState(false);


 


  const onClickVerifyBankAccount = () => {

    const data = { // need to update this one
      accountNumber: acctNum.value, //this is aleready string
      routingNumber: parseInt(routingNum.value),
      currency: "individual",
      name: acctHolderName.value, //already string
    }

    const acctNumVerified = acctNum.value && (acctNum.value.match(numbers) !== null) ? true : false;
    const acctNumLength = acctNum.value ? acctNum.value.length : 0;

    const routingNumVerified = routingNum.value && (routingNum.value.match(numbers) !== null) ? true : false;
    const routingNumLength = routingNum.value ? routingNum.value.length : 0;




    if (!acctNumVerified || acctNumLength < 9) {
      setAcctNumVerification(true)
    } else {
      setAcctNumVerification(false)
    }

    if (!routingNumVerified || routingNumLength < 9) {
      setRoutingNumVerification(true)
    } else {
      setRoutingNumVerification(false)
    }
    

    if (!((!routingNumVerified || routingNumLength < 9) ||
      (!acctNumVerified || acctNumLength < 9))) {
      setLoading(true);
      dispatch(payment.addAccount(data));

      setTimeout(() => {
        setLoading(false);
        setRoutingNumVerification(false)
        setAcctNumVerification(false)
      }, 1000);
    }

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
            {hasRoutingNumErr ? <span class="text-warning">Please input correct Routing Number (9)</span> : ''}
            <Input onChange={routingNum.handleInputChange} placeholder='Routing Number' maxLength={9}/>
          </Col>
          <Col span={24}>
            {hasAcctNumErr ? <span class="text-warning">Please input correct Account Number (10-12 digits)</span> : ''}
            <Input onChange={acctNum.handleInputChange} placeholder='Account Number' maxLength={12}/>
          </Col>
          <Col span={24}>
            <Input onChange={acctHolderName.handleInputChange} placeholder='Account Holder Name' />
          </Col>
          <Col span={24}>
            <Input onChange={acctType.handleInputChange} placeholder='Account Type' />
          </Col>
        </Row>
      <Button type='primary' onClick={onClickVerifyBankAccount} size='large' loading={loading} >Verify Account</Button>
    </>
  )
}


//** PAYPAL ACCOUNT **//

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