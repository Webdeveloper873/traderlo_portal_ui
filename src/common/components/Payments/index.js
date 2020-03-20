import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar, Divider, Row, Col, Button, Steps } from 'antd';


//actions
import * as payment from 'appRedux/actions/payment';
import { user } from 'appRedux/actions/home';

//components
import ChooseMethod from './Components/ChooseMethod';
import MethodDetails from './Components/MethodDetails';
import PaymentResult from './Components/PaymentResult';

//styles
import classes from './styles.module.scss';

const {Step} = Steps;

const PageRouter = ({ selectedOpt, onClickOpt, stepNo, nextStep}) => {
  switch(stepNo){
    case 0:
      return <ChooseMethod selectedOpt={selectedOpt} nextStep={nextStep} onClickOpt={onClickOpt} />;
    case 1:
      return <MethodDetails selectedOpt={selectedOpt} nextStep={nextStep}/>;
    case 2:
      return <PaymentResult selectedOpt={selectedOpt} />;
    default:
      return <ChooseMethod />;
  }
}


const Payments = () => {
  const [stepNo, setStepNo] = useState(0);
  const [selectedOpt, setSelectedOpt] = useState();
  const dispatch = useDispatch();

  useEffect(()=>{
    setStepNo(0);
    return () => {

      setStepNo(0);
      dispatch(user.getSavedBanks());
      dispatch(user.getSavedCard());
      dispatch(payment.clearPaymentSteps());
    };
  }, []);
  const nextStep = () => {
    setStepNo(stepNo+1);
  }

  const onClickOpt = (selected) => {
    console.log('selected', selected);
    setSelectedOpt(selected);
  }

  return(
    <div className={classes.paymentWrap}>
    <span className={classes.header}>Just Few Clicks to finish you purchase! </span>
      <Divider />
      <PageRouter
        stepNo={stepNo}
        nextStep={nextStep}
        onClickOpt={onClickOpt}
        selectedOpt={selectedOpt}
      />
    </div>
  );
}

export default Payments;