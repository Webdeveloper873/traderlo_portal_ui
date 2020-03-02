import React from 'react';
import { Icon } from 'antd';

//styles
import classes from '../../styles.module.scss';

const PaymentResult = ({children}) => {
  return(
    <>
      <Icon className={classes.paymentResult} type="check-circle" theme="twoTone" />
      <p>Payment Success</p>
    </>
  );
}

export default PaymentResult;