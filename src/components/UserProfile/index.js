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



const UserProfile = () => {
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
      <Banner text={'User Profile'} path={bannerPath}/>
      <PageWrapper addTopMargin>
        <Col xs={24} sm={24} md={6} lg={6} >
          <UserSidebar />
        </Col>
        <Col xs={24} sm={24} md={18} lg={18} className={classes.customPadding}>
          <Card type="inner" title={'User Profile'} className={classes.tableContainer}>
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
                    label="Contact Number"
                    name="contactNo"
                    rules={[{ required: true, message: 'Please input your Contact Number' }]}
                  >
                    <Input value ={userProfile.contactNo} name="contactNo" onChange={onChangeUserProfile}/>
                  </Form.Item>
                </Col>
                <Col span={11} style={{margin:15, marginBottom:0, marginTop:0}}>
                  <Form.Item
                      label="Email"
                      name="email"
                      rules={[{ required: true, message: 'Please input your email' }]}
                    >
                    <Input value ={userProfile.email} name="email" onChange={onChangeUserProfile}/>
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Avatar style={{ backgroundColor:'#f56a00', verticalAlign: 'middle', margin:15}} size={100}>
                  {/* {user} */} User
                </Avatar>
                {/* <Button size="small" style={{ marginLeft: 16, verticalAlign: 'middle' }} onClick={changeUser}>
                  Change
                </Button> */}
              </Row>

              <Row>
                 <Col span={7} style={{margin:15, marginBottom:0}}>
                  <Form.Item
                    label="Birth Date"
                    name="birthDate"
                    rules={[{ required: true, message: 'Please input your First Name' }]}
                  >
                    <DatePicker onChange={onChangeBirthdate} name="birthDate" defaultValue={moment(userProfile.birthDate)} format={'MMMM DD, YYYY'}/>
                  </Form.Item>
                </Col>
                <Col span={7} style={{margin:15, marginBottom:0}}>
                  <Form.Item
                      label="Registered On"
                      name="Registered On"
                    >
                    <span>{moment(userProfile.createdDate).format('MMMM DD, YYYY')}</span>
                  </Form.Item>
                </Col>
                <Col span={7} style={{margin:15, marginBottom:0}}>
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
                <Radio.Group onChange={onChangeUserProfile} value={userProfile.gender} name="gender">
                  <Radio value={'m'}>Male</Radio>
                  <Radio value={'f'}>Female</Radio>
                </Radio.Group>
              </Row>
              <Row style={{margin:15, marginBottom:0}}>
              <Form.Item
                  label="About Me"
                  name="aboutMe"
                  rules={[{ required: true, message: 'Please input your Description' }]}
                >
                <TextArea rows={6}  value ={userProfile.aboutMe} name="aboutMe" onChange={onChangeUserProfile}/>
              </Form.Item>
              </Row>
              <Row style={{margin:15, marginBottom:0}}>
                <div>Public Profile URL:</div>
                <div>
                  <span>{userProfile.publicProfileUrl}</span>
                </div>
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

export default UserProfile;