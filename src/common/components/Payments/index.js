/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Divider } from 'antd';


//actions
import * as payment from 'appRedux/actions/payment';
import { user } from 'appRedux/actions/user';

//components
import ChooseMethod from './Components/ChooseMethod';
import MethodDetails from './Components/MethodDetails';
import PaymentResult from './Components/PaymentResult';

//styles
import classes from './styles.module.scss';

const PageRouter = ({ selectedOpt, onClickOpt, stepNo, nextStep, isAddOnly, paymentAvail }) => {
  switch(stepNo){
    case 0:
      return <ChooseMethod
        paymentAvail={paymentAvail}
        selectedOpt={selectedOpt}
        nextStep={nextStep}
        onClickOpt={onClickOpt}
      />;
    case 1:
      return <MethodDetails selectedOpt={selectedOpt} nextStep={nextStep} isAddOnly={isAddOnly}/>;
    case 2:
      return <PaymentResult selectedOpt={selectedOpt} />;
    default:
      return <ChooseMethod />;
  }
}


const Payments = ({isAddOnly}) => {
  const [stepNo, setStepNo] = useState(0);
  const [selectedOpt, setSelectedOpt] = useState();
  const savedBanks = useSelector(({ user }) => user.savedBanks);
  const savedCards = useSelector(({ user }) => user.savedCards);
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
      <span className={classes.header}>
        {
          savedCards.length === 0 && savedBanks.length === 0 ?
          'Hmm, It seems payment information is missing.' :
          'Just Few Clicks to finish you purchase!'
        }
      </span>
      <Divider />
      <PageRouter
        stepNo={stepNo}
        nextStep={nextStep}
        onClickOpt={onClickOpt}
        selectedOpt={selectedOpt}
        isAddOnly={isAddOnly}
        paymentAvail={savedCards.length > 0 || savedBanks.length > 0}
      />
    </div>
  );
}

export default Payments;