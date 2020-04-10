import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Row, Button, Switch, Checkbox, Form } from 'antd';

//components
import InputField from './InputField';

//action
import { domain } from 'appRedux/actions/selling';

//utils
import { useFormInput } from 'common/utils/hooks';

//styles
import classes from '../styles.module.scss';

const Sale = ({ setActiveKey, form }) => {
  const [enableReserve, setEnableReserve] = useState(true);
  const [enableBuyNow, setEnableBuyNow] = useState(true);
  const listingId = useSelector(({ sellDomain }) => sellDomain.listingId);
  const sale = useSelector(({ sellDomain }) => sellDomain.sale);
  const duration = useFormInput();
  const startBid = useFormInput();
  const reserve = useFormInput();
  const buyNow = useFormInput();
  const dispatch = useDispatch();
  const buyNowValidate = form.getFieldValue('buyNowPrice') &&
    (
      parseInt(form.getFieldValue('buyNowPrice')) <= parseInt(form.getFieldValue('startingPrice')) ||
      parseInt(form.getFieldValue('buyNowPrice')) <= parseInt(form.getFieldValue('reservePrice'))
    )
  ? 'error' : '';
  const reserveValidate = form.getFieldValue('reservePrice') && (parseInt(form.getFieldValue('reservePrice')) <= parseInt(form.getFieldValue('startingPrice'))) ? 'error' : '';

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
          icon='setting'
          id='listDurationDate'
        />
      </Row>
      <Row gutter={16}>
        <InputField form={form} required
          label='Starting Bid Price*'
          icon='dollar'
          id='startingPrice'
        />
        <InputField form={form} required={enableReserve}
          validateStatus={reserveValidate}
          help={reserveValidate === 'error' ? 'Reserve Price should be greater than Starting Bid Price' : ''}
          disabled={!enableReserve}
          label={<>{`Reserve Price `}<Switch defaultChecked onChange={onChangeRSwitch} /></>}
          icon='dollar'
          id='reservePrice'
        />
        <InputField form={form} required={enableBuyNow}
          validateStatus={buyNowValidate}
          help={buyNowValidate === 'error' ? 'Buy Now Price should be greater than Starting Bid Price and Reserve Price' : ''}
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