/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useDispatch } from 'react-redux';
import { Col, Input, Row, Form, Button } from 'antd';

//components
import Banner from 'common/components/Banner';
import PageWrapper from 'common/components/PageWrapper';
import InputField from 'common/components/InputField';
import Panel from 'common/components/Panel';

//action
import * as contactActions from 'appRedux/actions/contactUs';

//styles
import classes from './styles.module.scss';

//constants
import { responsiveConf } from 'common/constants';

const { TextArea } = Input;
const { twoCol } = responsiveConf || {};



const ContactUs = ({ ...props}) => {
  const dispatch = useDispatch();
  const bannerPath = [ 'Contact Us'];
  const { form } = props || {};

  const updateProfile = e => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        dispatch(contactActions.sendContactUs(values));
      }
    });
  }

  return(
    <>
      <Banner text={'Contact Us'} path={bannerPath}/>
      <PageWrapper addTopMargin>
        <Col span={18} offset={4} className={classes.customPadding}>
          <Panel header={'Contact Us'} className={classes.tableContainer}>
            <Row gutter={16}>
              <InputField form={form} required={true}
                colWidth={twoCol}
                label={'First Name'}
                id='firstName'
              />
              <InputField form={form} required={true}
                colWidth={twoCol}
                label={'Last Name'}
                id='lastName'
              />
            </Row>
            <Row gutter={16}>
              <InputField form={form} required={true}
                colWidth={twoCol}
                label={'Email'}
                id='email'
                type='email'
              />
              <InputField form={form} required={true}
                colWidth={twoCol}
                label={'Location'}
                id='location'
              />
            </Row>
            <Row gutter={16}>
              <InputField form={form} required={true}
                label={'Description'}
                id='message'
                customField={
                  <TextArea rows={4}
                    placeholder='Description'
                  />
                }
              />
            </Row>
            <Row className={classes.btnContainer}>
              <Button onClick ={updateProfile} size='large' className={classes.btnStyle}>Submit</Button>
             </Row>
          </Panel>
        </Col>
      </PageWrapper>
    </>
  );
}

const WrappedContactUs = Form.create({ name: 'contactUs' })(ContactUs);

export default WrappedContactUs;