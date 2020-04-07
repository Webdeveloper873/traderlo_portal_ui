/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import { Col, Card, Input, Row, Form, Button } from 'antd';

//components
import Banner from 'common/components/Banner';
import PageWrapper from 'common/components/PageWrapper';
//styles
import classes from './styles.module.scss';

const { TextArea } = Input;



const ContactUs = () => {
  // const dispatch = useDispatch();
  const bannerPath = [ 'Contact Us'];

  const [contactInfo, setcontactInfo] = useState({});

  const onChangeContactImfo = (e) => {
    setcontactInfo({...contactInfo,
      [e.target.name]: e.target.value
    })
  }

  const updateProfile = () => {
    //dispatch(user.updateUserProfile(contactInfo));
  }

  return(
    <>
      <Banner text={'Contact Us'} path={bannerPath}/>
      <PageWrapper addTopMargin>
        <Col span={18} offset={4} className={classes.customPadding}>
          <Card type="inner" title={'Contact Us'} className={classes.tableContainer}>
            <Form name="basic">
              <Row>
                <Col span={11} style={{margin:15, marginBottom:0}} >
                  <Form.Item
                    label="First Name"
                    name="firstName"
                    rules={[{ required: true, message: 'Please input your First Name' }]}
                  >
                    <Input name="firstName" value ={contactInfo.firstName} onChange={onChangeContactImfo}/>
                  </Form.Item>
                </Col>
                <Col span={11} style={{margin:15, marginBottom:0}}>
                  <Form.Item
                      label="Last Name"
                      name="lastName"
                      rules={[{ required: true, message: 'Please input your Last Name' }]}
                    >
                    <Input name="lastName" value ={contactInfo.lastName} onChange={onChangeContactImfo}/>
                  </Form.Item>
                </Col>
              </Row>
              <Row>

                <Col span={11} style={{margin:15, marginBottom:0, marginTop:0}}>
                  <Form.Item
                      label="Email"
                      name="email"
                      rules={[{ required: true, message: 'Please input your email' }]}
                    >
                    <Input value ={contactInfo.email} name="email" onChange={onChangeContactImfo}/>
                  </Form.Item>
                </Col>
               <Col span={11} style={{margin:15, marginBottom:0, marginTop:0}}>
                  <Form.Item
                      label="Location"
                      name="location"
                      rules={[{ required: true, message: 'Please input your Location' }]}
                    >
                    <Input value={contactInfo.location} name="location" onChange={onChangeContactImfo}/>
                  </Form.Item>
                </Col>
              </Row>
              <Row style={{margin:15, marginBottom:0}}>
              <Form.Item
                  label="Description"
                  name="description"
                  rules={[{ required: true, message: 'Please input your Description' }]}
                >
                <TextArea rows={6}  value ={contactInfo.aboutMe} name="description" onChange={onChangeContactImfo}/>
              </Form.Item>
              </Row>
              <Row className={classes.btnContainer}>
                <Button onClick ={updateProfile} size='large' className={classes.btnStyle}>Submit</Button>
               </Row>
           </Form>
          </Card>
        </Col>
      </PageWrapper>
    </>
  );
}

export default ContactUs;