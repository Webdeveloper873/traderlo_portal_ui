import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Icon } from 'antd';

//styles
import classes from '../../styles.module.scss';

const PaymentResult = ({selectedOpt}) => {
  
  const hasError = useSelector(({ payment }) => payment.hasError);
  const isPayment = useSelector(({ payment }) => payment.isPayment);

  const process = isPayment ? 'Payment' : 'Verification'

  return(
    <>
      {hasError ? <Icon className={classes.paymentResult} type='exclamation-circle' style={{color:'#ff9933' , marginBottom:15}}/> :
      <Icon className={classes.paymentResult} type='check-circle' style={{color:'#00ff80', marginBottom:15}} />}
      <h4>{`${process} ${hasError ? 'Failed' : 'Success'}`}</h4>
      {}
    </>
  );
}

export default PaymentResult;