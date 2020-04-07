/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Col, Card, Input, Row, Form, Button, Avatar, DatePicker, Radio } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

//components
import Banner from 'common/components/Banner';
import PageWrapper from 'common/components/PageWrapper';
import UserSidebar from 'common/components/UserSidebar';

//styles
import classes from './styles.module.scss';


//actions
import { user } from 'appRedux/actions/user';

// util
import { openNotification } from 'common/utils/helpers';

const { TextArea } = Input;



const ContactUs = () => {
  const dispatch = useDispatch();
  const bannerPath = ['Dashboard', 'My Profile and Account', 'User Profile'];
  
  useEffect(()=>{
    dispatch(user.getUserProfile());
  },[]);
  
  const userFetchedInfo = useSelector(({user}) => user.profile);
  const updateUserSuccess = useSelector(({user}) => user.updateUserSuccess);
  //console.log(userProfile,'userProfile')


  useEffect(() =>{
    if (updateUserSuccess) {
      console.log(updateUserSuccess);
      setTimeout(() => {
        openNotification({status:'success', message:'user update success'});
      }, 500);
      dispatch(user.clearUserNotifStatus());
      dispatch(user.getUserProfile());
    }
  },[updateUserSuccess]);

  const [userProfile, setUserProfile] = useState(userFetchedInfo); 


  const onChangeUserProfile = (e) => {
    setUserProfile({...userProfile,
      [e.target.name]: e.target.value
    })
  }


  const onChangeBirthdate = (date) => {
    setUserProfile({...userProfile,
      birthDate: date,
    })
  }

  const updateProfile = () => {
    dispatch(user.updateUserProfile(userProfile));
  }


  return(
    <>
      <Banner text={'Contact Us'} path={bannerPath}/>
      <PageWrapper addTopMargin>
        <Col span={18} offset={4} className={classes.customPadding}>
          <Card type="inner" title={'Contact Us'} className={classes.tableContainer}>
            <Form
                name="basic"
                //initialValues={{ remember: true }}
                //onFinish={onFinish}
                //onFinishFailed={onFinishFailed}
              >         
              <Row >
                <Col span={11} style={{margin:15, marginBottom:0}} >
                  <Form.Item
                    label="First Name"
                    name="firstName"
                    rules={[{ required: true, message: 'Please input your First Name' }]}
                  >
                    <Input name="firstName" value ={userProfile.firstName} onChange={onChangeUserProfile}/>
                  </Form.Item>
                </Col>
                <Col span={11} style={{margin:15, marginBottom:0}}>
                  <Form.Item
                      label="Last Name"
                      name="lastName"
                      rules={[{ required: true, message: 'Please input your Last Name' }]}
                    >
                    <Input name="lastName" value ={userProfile.lastName} onChange={onChangeUserProfile}/>
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
                    <Input value ={userProfile.email} name="email" onChange={onChangeUserProfile}/>
                  </Form.Item>
                </Col>
               <Col span={11} style={{margin:15, marginBottom:0, marginTop:0}}>
                  <Form.Item
                      label="Location"
                      name="location"
                      rules={[{ required: true, message: 'Please input your Location' }]}
                    >
                    <Input value={userProfile.location} name="location" onChange={onChangeUserProfile}/>
                  </Form.Item>
                </Col>
              </Row>
              <Row style={{margin:15, marginBottom:0}}>
              <Form.Item
                  label="Description"
                  name="description"
                  rules={[{ required: true, message: 'Please input your Description' }]}
                >
                <TextArea rows={6}  value ={userProfile.aboutMe} name="description" onChange={onChangeUserProfile}/>
              </Form.Item>
              </Row>
              <Row style={{margin:15}}>
               <Button onClick ={updateProfile}> Save Changes</Button>
              </Row>
           </Form>
          </Card>
        </Col>
      </PageWrapper>
    </>
  );
}

export default ContactUs;