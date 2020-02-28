import React, {useState} from 'react';
import { Avatar, Divider, Row, Col, Button, Steps } from 'antd';

//components
import ChooseMethod from './Components/ChooseMethod';
import MethodDetails from './Components/MethodDetails';

//styles
import classes from './styles.module.scss';

const {Step} = Steps;

const PageRouter = ({ stepNo, nextStep}) => {
  switch(stepNo){
    case 0:
      return <ChooseMethod nextStep={nextStep} />;
    case 1:
      return <MethodDetails />;
    case 2:
      return <div>3</div>;
    default:
      return <ChooseMethod />;
  }
}


const Payments = () => {
  const [stepNo, setStepNo] = useState(0);

  const nextStep = () => {
    setStepNo(stepNo+1);
  }

  return(
    <div className={classes.paymentWrap}>
    <span className={classes.header}>Just Few Clicks to finish you purchase! </span>
      <Divider />
      <Steps current={stepNo} className={classes.stepper}>
        <Step title="Select Method"/>
        <Step title="Enter Details"/>
        <Step title="Payment Done"/>
      </Steps>
      <PageRouter stepNo={stepNo} nextStep={nextStep}/>
    </div>
  );
}

export default Payments;