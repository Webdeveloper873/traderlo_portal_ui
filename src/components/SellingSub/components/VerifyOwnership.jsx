import React from 'react';
import { Typography, Card, Row, Button } from 'antd';

//components
import InputField from './InputField';

//styles
import classes from '../styles.module.scss';

const { Text } = Typography;
const { Label } = InputField;

const VerifyOwnership = () => {
  return(
    <Card className={classes.verifyOwnership}>
      <p>
        {'We Have Three Methods To verify Ownership'}
        <span>{'(Choose One)'}</span>
      </p>
    </Card>
  );
}

export default VerifyOwnership;