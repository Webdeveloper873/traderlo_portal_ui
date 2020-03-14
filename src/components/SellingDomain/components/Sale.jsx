import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Typography, Card, Row, Button } from 'antd';

//components
import InputField from './InputField';

//action
import { domain } from 'appRedux/actions/selling';

//utils
import { useFormInput } from 'common/utils/hooks';

//styles
import classes from '../styles.module.scss';

const {Text} = Typography;

const Sale = ({ setActiveKey }) => {
  const listingId = useSelector(({ sellDomain }) => sellDomain.listingId);
  const sale = useSelector(({ sellDomain }) => sellDomain.sale);
  const duration = useFormInput();
  const startBid = useFormInput();
  const reserve = useFormInput();
  const buyNow = useFormInput();
  const dispatch = useDispatch();

  const onClickNext = () => {
    const data = {
      listingId,
      args: {
        listDurationDate: parseInt(duration.value),
        reservePrice: parseInt(reserve.value),
        buyNowPrice: parseInt(buyNow.value),
        startingPrice: parseInt(startBid.value),
      }
    };
    console.log('data: ', data);
    dispatch(domain.setSale(data));
  }

  if(sale){
    setActiveKey(3);
  }

  return(
    <Card>
      <Text className={classes.tabDetail}>Get in front of buyers looking for website like your by categorizing it accurately, and letting them know how long the website has been live.</Text>
      <Row gutter={16}>
        <InputField type='number' onChange={duration.handleInputChange} label='Listing Duration' icon='setting' />
      </Row>
      <Row gutter={16}>
        <InputField type='number' onChange={startBid.handleInputChange} label='Starting Bid' icon='dollar' />
        <InputField type='number' onChange={reserve.handleInputChange} label='Reserve' icon='dollar' />
        <InputField type='number' onChange={buyNow.handleInputChange} label='Buy Now' icon='dollar' />
      </Row>
      <Row className={classes.btnContainer}>
        <Button onClick={onClickNext} size='large' className={classes.btnStyle}>Next</Button>
      </Row>
    </Card>
  );
}

export default Sale;