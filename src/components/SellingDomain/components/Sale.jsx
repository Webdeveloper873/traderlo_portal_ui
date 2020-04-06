import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Typography, Card, Row, Button, Switch } from 'antd';

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
  const [enableReserve, setEnableReserve] = useState(true);
  const [enableBuyNow, setEnableBuyNow] = useState(true);
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
        reservePrice: enableReserve ? parseInt(reserve.value) : '',
        buyNowPrice: enableBuyNow ? parseInt(buyNow.value) : '',
        startingPrice: parseInt(startBid.value),
      }
    };
    console.log('data: ', data);
    dispatch(domain.setSale(data));
  }

  const onChangeRSwitch = checked => {
    setEnableReserve(checked);
  }

  const onChangeBSwitch = checked => {
    setEnableBuyNow(checked);
  }

  if(sale){
    setActiveKey(3);
  }

  return(
    <Card>
      <div className={classes.normalLabel}>Get in front of buyers looking for Domain like your by categorizing it accurately, and letting them know how long the Domain has been live.</div>
      <Row gutter={16}>
        <InputField type='number' onChange={duration.handleInputChange} label='No. Of Days For Auction *' icon='setting' />
      </Row>
      <Row gutter={16}>
        <InputField onChange={startBid.handleInputChange} label='Starting Bid Price*' icon='dollar' />
        <InputField disabled={!enableReserve} onChange={reserve.handleInputChange} label={<>{`Reserve Price* `}<Switch defaultChecked onChange={onChangeRSwitch} /></>} icon='dollar' />
        <InputField disabled={!enableBuyNow} onChange={buyNow.handleInputChange} label={<>{`Buy Now Price* `}<Switch defaultChecked onChange={onChangeBSwitch} /></>} icon='dollar' />
      </Row>
      <Row className={classes.btnContainer}>
        <Button onClick={onClickNext} size='large' className={classes.btnStyle}>Next</Button>
      </Row>
    </Card>
  );
}

export default Sale;