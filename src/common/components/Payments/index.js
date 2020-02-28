import React, {useState} from 'react';
import { Avatar, Divider, Row, Col, Button, Steps } from 'antd';

//components
import ChooseMethod from './Components/ChooseMethod';

//styles
import classes from './styles.module.scss';



const {Step} = Steps;


const Payments = () => {
  const [stepNo, setStepNo] = useState(0);

  const onChange = current => {
    setStepNo(current);
  };

  return(
    <div className={classes.paymentWrap}>
    <span className={classes.header}>Just Few Clicks to finish you purchase! </span>
      <Divider />
      <Steps current={stepNo} onChange={onChange} className={classes.stepper}>
        <Step title="Select Method"/>
        <Step title="Enter Details"/>
        <Step title="Payment Done"/>
      </Steps>
      <ChooseMethod />
    </div>
  );
}

export default Payments;