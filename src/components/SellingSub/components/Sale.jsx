import React from 'react';
import { Typography, Card, Row, Button } from 'antd';

//components
import InputField from './InputField';

//styles
import classes from '../styles.module.scss';

const {Text} = Typography;

const Sale = () => {
  return(
    <Card>
      <Text className={classes.tabDetail}>Get in front of buyers looking for website like your by categorizing it accurately, and letting them know how long the website has been live.</Text>
      <Row gutter={16}>
        <InputField label='Listing Duration' icon='setting' />
      </Row>
      <Row gutter={16}>
        <InputField label='Starting Bid' icon='dollar' />
        <InputField label='Reserve' icon='dollar' />
        <InputField label='Buy Now' icon='dollar' />
      </Row>
      <Row className={classes.btnContainer}>
        <Button type='primary' size='large' className={classes.btnStyle}>Next</Button>
      </Row>
    </Card>
  );
}

export default Sale;