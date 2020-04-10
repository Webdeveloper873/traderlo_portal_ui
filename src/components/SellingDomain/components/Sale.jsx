import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Row, Button, Switch, Checkbox, Form } from 'antd';

//components
import InputField from './InputField';

//action
import { domain } from 'appRedux/actions/selling';

//styles
import classes from '../styles.module.scss';

const Sale = ({ setActiveKey, form }) => {
  const [enableReserve, setEnableReserve] = useState(true);
  const [enableBuyNow, setEnableBuyNow] = useState(true);
  const listingId = useSelector(({ sellDomain }) => sellDomain.listingId);
  const sale = useSelector(({ sellDomain }) => sellDomain.sale);
  const dispatch = useDispatch();
  const validateStartPrice = form.getFieldValue('startingPrice') && (parseInt(form.getFieldValue('startingPrice')) < 0) ? 'error' : '';
  const validateDuration = form.getFieldValue('listDurationDate') && (parseInt(form.getFieldValue('listDurationDate')) < 0) ? 'error' : '';

  const validateBuyNow = () => {
    const buyNow = parseInt(form.getFieldValue('buyNowPrice'));
    const sPrice = parseInt(form.getFieldValue('startingPrice'));
    const rPrice = parseInt(form.getFieldValue('reservePrice'));

    if (buyNow){
      if(buyNow < 0 ){
        return {
          validateStatus: 'error',
          errorMessage: 'Buy now price should not be negative'
        }
      } else if(buyNow <= sPrice){
        return {
          validateStatus: 'error',
          errorMessage: 'Buy now price should be higher than starting price'
        }
      } else if (buyNow <= rPrice) {
        return {
          validateStatus: 'error',
          errorMessage: 'Buy now price should be higher than reserve price'
        }
      }
    }

    return {
      validateStatus: '',
      errorMessage: null
    }
  }

  const validateReserve = () => {
    const rPrice = parseInt(form.getFieldValue('reservePrice'));
    const sPrice = parseInt(form.getFieldValue('startingPrice'));

    if(rPrice){
      if(rPrice < 0){
        return {
          validateStatus: 'error',
          errorMessage: 'Reserve price should not be negative'
        }
      }
      if(rPrice <= sPrice) {
        return {
          validateStatus: 'Reserve price should be greater than starting price',
          errorMessage: null
        }
      }
    }

    return {
      validateStatus: '',
      errorMessage: null
    }
  }

  const onClickNext = e => {
    e.preventDefault();
    form.validateFields((err, values) => {
      console.log('sale values: ', values);
      const { listDurationDate, reservePrice, buyNowPrice, startingPrice } = values || {};
      if (!err) {
        const data = {
          listingId,
          args: {
            listDurationDate: parseInt(listDurationDate),
            reservePrice: enableReserve ? parseInt(reservePrice) : '',
            buyNowPrice: enableBuyNow ? parseInt(buyNowPrice) : '',
            startingPrice: parseInt(startingPrice),
          }
        };
        console.log('data: ', data);
        dispatch(domain.setSale(data));
      }
    });
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
        <InputField form={form} required
          label='No. Of Days For Auction *'
          validateStatus={validateDuration}
          help={validateDuration === 'error' ? 'This should not be negative' : ''}
          icon='setting'
          id='listDurationDate'
        />
      </Row>
      <Row gutter={16}>
        <InputField form={form} required
          validateStatus={validateStartPrice}
          help={validateStartPrice === 'error' ? 'Starting price should not be negative' : ''}
          label='Starting Bid Price*'
          icon='dollar'
          id='startingPrice'
        />
        <InputField form={form} required={enableReserve}
          validateStatus={validateReserve().validateStatus}
          help={validateReserve().errorMessage}
          disabled={!enableReserve}
          label={<>{`Reserve Price `}<Switch defaultChecked onChange={onChangeRSwitch} /></>}
          icon='dollar'
          id='reservePrice'
        />
        <InputField form={form} required={enableBuyNow}
          validateStatus={validateBuyNow().validateStatus}
          help={validateBuyNow().errorMessage}
          disabled={!enableBuyNow}
          label={<>{`Buy Now Price `}<Switch defaultChecked onChange={onChangeBSwitch} /></>}
          icon='dollar'
          id='buyNowPrice'
        >
          <Checkbox className={`${classes.normalLabel} ${classes.marginTop20}`}>If the current bid is closer to the Buy Now price, 10% increase will reflect.</Checkbox>
        </InputField>
      </Row>
      <Row className={classes.btnContainer}>
        <Button onClick={onClickNext} size='large' className={classes.btnStyle}>Next</Button>
      </Row>
    </Card>
  );
}

const WrappedSale = Form.create({ name: 'sale' })(Sale);

export default WrappedSale;