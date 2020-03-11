import React from 'react';
import { Typography, Card, Row, Button } from 'antd';

//components
import InputField from './InputField';

//utils
import { useFormInput } from 'common/utils/hooks';

//styles
import classes from '../styles.module.scss';

const {Text} = Typography;

const Sale = () => {
  const duration = useFormInput();
  const startBid = useFormInput();
  const reserve = useFormInput();
  const buyNow = useFormInput();
  return(
    <Card>
      <Text className={classes.tabDetail}>Get in front of buyers looking for website like your by categorizing it accurately, and letting them know how long the website has been live.</Text>
      <Row gutter={16}>
        <InputField label='Listing Duration' icon='setting' />
      </Row>
      <Row gutter={16}>
        <InputField onChange={startBid.handleInputChange} label='Starting Bid' icon='dollar' />
        <InputField onChange={reserve.handleInputChange} label='Reserve' icon='dollar' />
        <InputField onChange={buyNow.handleInputChange} label='Buy Now' icon='dollar' />
      </Row>
      <Row className={classes.btnContainer}>
        <Button size='large' className={classes.btnStyle}>Next</Button>
      </Row>
    </Card>
  );
}

export default Sale;