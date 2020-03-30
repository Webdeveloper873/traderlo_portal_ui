/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Col, Card, Input, Icon, Table, Tabs, Row, Form, Checkbox, Button, Avatar, DatePicker, Radio } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

//components
import Banner from 'common/components/Banner';
import PageWrapper from 'common/components/PageWrapper';
import UserSidebar from 'common/components/UserSidebar';

//constants
import { domWebCol, domWebData, sellersCol, favoritesCol} from './constants';

//styles
import classes from './styles.module.scss';


//actions
import { user } from 'appRedux/actions/user';

// util
import { openNotification } from 'common/utils/helpers';

const CheckboxGroup = Checkbox.Group;
const { TextArea } = Input;



const UserProfile = () => {

  const dispatch = useDispatch();
  const userProfile = useSelector(({user}) => user.profile);
  const updateUserSuccess = useSelector(({user}) => user.updateUserSuccess);
  console.log(userProfile,'userProfile')

  useEffect(()=>{
    dispatch(user.getUserProfile());
  },[]);

  useEffect(() =>{
    if (updateUserSuccess) {
      console.log(updateUserSuccess);
      setTimeout(() => {
        openNotification({status:'success', message:'user update success'});
      }, 500);
      dispatch(user.clearUserNotifStatus());
      dispatch(user.getUserProfile());
    }
  })



  const [firstName, setFirstName] = useState(userProfile.firstName);
  const [lastName, setLastName] = useState(userProfile.lastName);
  const [contactNo, setContactNumber] = useState(userProfile.contactNo);
  const [birthDate, setBirthDate] = useState(userProfile.birthDate);
  const [location, setLocation] = useState(userProfile.location);
  const [gender, setGrender] = useState(userProfile.gender);
  const [aboutMe,setAboutMe] = useState(userProfile.aboutMe);
  const [email, setEmail] = useState(userProfile.email);



  const onChangeBirthdate = (date, dateString) => {
    console.log(date, dateString);
    setBirthDate(dateString);
  }

   const onChangeGender = (e) => {
    setGrender(e.target.value)
   }

   const onChangeFirstName = (e) => {
    setFirstName(e.target.value);
   }

   const onChangeLastName = (e) => {
    setLastName(e.target.value);
  }

  const onChangeContactNumber = (e) => {
    setContactNumber(e.target.value);
  }
  

  const onChangeLocation = (e) => {
    setLocation(e.target.value);
  }

  const onChangeAboutMe = (e) => {
    setAboutMe(e.target.value);
  }

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  }

  const updateProfile = () => {

    let updatedUserProfile = {
      id: userProfile.id,
      firstName:firstName,
      lastName:lastName,
      contactNo:contactNo,
      birthDate:birthDate,
      location:location,
      gender:gender,
      aboutMe:aboutMe,
      email:email,

    };

    console.log(updatedUserProfile,'updatedUserProfile')
    dispatch(user.updateUserProfile(updatedUserProfile));
  }


  return(
    <>
      <Banner text={'User Profile'} />
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
              <Row>
                <Col span={11} style={{margin:15, marginBottom:0}}>
                  <Form.Item
                    label="First Name"
                    name="First Name"
                    rules={[{ required: true, message: 'Please input your First Name' }]}
                  >
                    <Input value ={firstName} onChange={onChangeFirstName}/>
                  </Form.Item>
                </Col>
                <Col span={11} style={{margin:15, marginBottom:0}}>
                  <Form.Item
                      label="Last Name"
                      name="Last Name"
                      rules={[{ required: true, message: 'Please input your Last Name' }]}
                    >
                    <Input value ={lastName} onChange={onChangeLastName}/>
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col span={11} style={{margin:15, marginBottom:0, marginTop:0}}>
                  <Form.Item
                    label="Contact Number"
                    name="Contact Number"
                    rules={[{ required: true, message: 'Please input your Contact Number' }]}
                  >
                    <Input value ={contactNo} onChange={onChangeContactNumber}/>
                  </Form.Item>
                </Col>
                <Col span={11} style={{margin:15, marginBottom:0, marginTop:0}}>
                  <Form.Item
                      label="Email"
                      name="Email"
                      rules={[{ required: true, message: 'Please input your email' }]}
                    >
                    <Input value ={email} onChange={onChangeEmail}/>
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
                    name="Birth Date"
                    rules={[{ required: true, message: 'Please input your First Name' }]}
                  >
                    <DatePicker onChange={onChangeBirthdate} defaultValue={moment(birthDate)} format={'MMMM DD, YYYY'}/>
                  </Form.Item>
                </Col>
                <Col span={7} style={{margin:15, marginBottom:0}}>
                  <Form.Item
                      label="Registered On"
                      name="Registered On"
                      //rules={[{ required: true, message: 'Please input your Last Name' }]}
                    >
                    <span>{moment(userProfile.createdDate).format('MMMM DD, YYYY')}</span>
                  </Form.Item>
                </Col>
                <Col span={7} style={{margin:15, marginBottom:0}}>
                  <Form.Item
                      label="Location"
                      name="Location"
                      rules={[{ required: true, message: 'Please input your Location' }]}
                    >
                    <Input value={location} onChange={onChangeLocation}/>
                  </Form.Item>
                </Col>
              </Row>
              <Row style={{margin:15, marginBottom:0}}>
                <Radio.Group onChange={onChangeGender} value={gender}>
                  <Radio value={'m'}>Male</Radio>
                  <Radio value={'f'}>Female</Radio>
                </Radio.Group>
              </Row>
              <Row style={{margin:15, marginBottom:0}}>
              <Form.Item
                  label="About Me"
                  name="About Me"
                  rules={[{ required: true, message: 'Please input your Description' }]}
                >
                <TextArea rows={6}  value ={aboutMe} onChange={onChangeAboutMe}/>
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