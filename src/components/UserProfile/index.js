/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Col, Card, Input, Row, Form, Button, Avatar, DatePicker, Radio } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

//components
import Banner from 'common/components/Banner';
import PageWrapper from 'common/components/PageWrapper';
import UserSidebar from 'common/components/UserSidebar';
import Panel from 'common/components/Panel';
import InputField from 'common/components/InputField';

//actions
import { user } from 'appRedux/actions/user';

//styles
import classes from './styles.module.scss';

//assets
import profileImgHolder from 'assets/user/profileImgHolder.png';

// util
import { openNotification } from 'common/utils/helpers';

//constants
import { responsiveConf } from 'common/constants';
import { genderOpt } from './constants';

const { TextArea } = Input;
const { twoCol, threeCol } = responsiveConf || {};
const { Label } = InputField;



const UserProfile = ({ form }) => {
  const dispatch = useDispatch();
  const bannerPath = ['Dashboard', 'My Profile and Account', 'User Profile'];
  const profile = useSelector(({user}) => user.profile);
  console.log('userProfile', profile);
  const { firstName, lastName, contactNo, email, profileImage, birthDate, createdDate, location, aboutMe, homePageUrl } = profile || {};


  const userFetchedInfo = useSelector(({user}) => user.profile);
  const updateUserSuccess = useSelector(({user}) => user.updateUserSuccess);
  const [userProfile, setUserProfile] = useState(userFetchedInfo);
  const onChangeUserProfile = (e) => {
    setUserProfile({...userProfile,
      [e.target.name]: e.target.value
    })
  };
  // const { firstName, lastName } = userProfile || {};

  const onChangeBirthdate = (date) => {
    setUserProfile({...userProfile,
      birthDate: date,
    })
  }

  const updateProfile = () => {
    dispatch(user.updateUserProfile(userProfile));
  }

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
  },[updateUserSuccess]);

  return(
    <>
      <Banner text={'User Profile'} path={bannerPath}/>
      <PageWrapper addTopMargin>
        <Col xs={24} sm={24} md={6} lg={6} >
          <UserSidebar />
        </Col>
        <Col xs={24} sm={24} md={18} lg={18} className={classes.customPadding}>
          <Panel header='User Profile'>
            <Row gutter={16}>
              <InputField form={form} required={true}
                colWidth={twoCol}
                label={'First Name'}
                id='firstName'
                initialValue={firstName || ''}
              />
              <InputField form={form} required={true}
                colWidth={twoCol}
                label={'Last Name'}
                id='lastName'
                initialValue={lastName || ''}
              />
            </Row>
            <Row gutter={16}>
              <InputField form={form} required={true}
                colWidth={twoCol}
                label={'Contact Number'}
                id='contactNumber'
                initialValue={contactNo || ''}
              />
              <InputField form={form} required={true}
                colWidth={twoCol}
                label={'Your Email'}
                id='email'
                initialValue={email || ''}
              />
            </Row>
            <Label text={'Avatar image'} />
            <Row gutter={16}>
              <Avatar size={64} src={profileImage || profileImgHolder} />
              <Button type="primary" size={'large'} className={classes.uploadBtn}>
                Choose File
              </Button>
              No file chosen
            </Row>
            <Row gutter={16} className={classes.marginTop15}>
              <InputField form={form} required={true}
                colWidth={threeCol}
                label={'Date Of Birth'}
                id='firstName'
                initialValue={location || ''}
              />
              <Col {...threeCol}>
                <Label text={'Registered On'} />
                <div className={classes.regOn}>March 20, 2020</div>
              </Col>
              <InputField form={form} required={true}
                colWidth={threeCol}
                label={'Location'}
                id='location'
                initialValue={location || ''}
              />
            </Row>
            <Label text={'Gender'} className={classes.marginTop15} />
            <Row gutter={16}>
              <Radio.Group options={genderOpt} />
            </Row>
            <Row gutter={16} className={classes.marginTop15}>
              <Label text={'About Me'} />
              <TextArea rows={4}
                placeholder='Description'
                initialValue={aboutMe || ''}
              />
            </Row>
            <Row gutter={16} className={classes.marginTop15}>
              <Label text={'Public Profile Url:'} />
              <div className={classes.regOn}>{homePageUrl}</div>
            </Row>
          </Panel>
          <Button type="primary" size={'large'} className={classes.saveBtn}>
            Save Changes
          </Button>
        </Col>
      </PageWrapper>
    </>
  );
}

const WrappedUserProfile = Form.create({ name: 'userProfile' })(UserProfile);

export default WrappedUserProfile;

{/* for delete
  <Card type="inner" title={'User Profile'} className={classes.tableContainer}>
  <Form
    name="basic"
  //initialValues={{ remember: true }}
  //onFinish={onFinish}
  //onFinishFailed={onFinishFailed}
  >
    <Row >
      <Col span={11} style={{ margin: 15, marginBottom: 0 }} >
        <Form.Item
          label="First Name"
          name="firstName"
          rules={[{ required: true, message: 'Please input your First Name' }]}
        >
          <Input name="firstName" initialValue={firstName} onChange={onChangeUserProfile} />
        </Form.Item>
      </Col>
      <Col span={11} style={{ margin: 15, marginBottom: 0 }}>
        <Form.Item
          label="Last Name"
          name="lastName"
          rules={[{ required: true, message: 'Please input your Last Name' }]}
        >
          <Input name="lastName" initialValue={lastName} onChange={onChangeUserProfile} />
        </Form.Item>
      </Col>
    </Row>
    <Row>
      <Col span={11} style={{ margin: 15, marginBottom: 0, marginTop: 0 }}>
        <Form.Item
          label="Contact Number"
          name="contactNo"
          rules={[{ required: true, message: 'Please input your Contact Number' }]}
        >
          <Input value={userProfile.contactNo} name="contactNo" onChange={onChangeUserProfile} />
        </Form.Item>
      </Col>
      <Col span={11} style={{ margin: 15, marginBottom: 0, marginTop: 0 }}>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Please input your email' }]}
        >
          <Input value={userProfile.email} name="email" onChange={onChangeUserProfile} />
        </Form.Item>
      </Col>
    </Row>
    <Row>
      <Avatar style={{ backgroundColor: '#f56a00', verticalAlign: 'middle', margin: 15 }} size={100}>
         User
                </Avatar>

    </Row>

    <Row>
      <Col span={7} style={{ margin: 15, marginBottom: 0 }}>
        <Form.Item
          label="Birth Date"
          name="birthDate"
          rules={[{ required: true, message: 'Please input your First Name' }]}
        >
          <DatePicker onChange={onChangeBirthdate} name="birthDate" defaultValue={moment(userProfile.birthDate)} format={'MMMM DD, YYYY'} />
        </Form.Item>
      </Col>
      <Col span={7} style={{ margin: 15, marginBottom: 0 }}>
        <Form.Item
          label="Registered On"
          name="Registered On"
        >
          <span>{moment(userProfile.createdDate).format('MMMM DD, YYYY')}</span>
        </Form.Item>
      </Col>
      <Col span={7} style={{ margin: 15, marginBottom: 0 }}>
        <Form.Item
          label="Location"
          name="location"
          rules={[{ required: true, message: 'Please input your Location' }]}
        >
          <Input value={userProfile.location} name="location" onChange={onChangeUserProfile} />
        </Form.Item>
      </Col>
    </Row>
    <Row style={{ margin: 15, marginBottom: 0 }}>
      <Form.Item
        label="Gender"
        name="gender"
        rules={[{ required: true, message: 'Please input your gender' }]}
      >
        <Radio.Group onChange={onChangeUserProfile} value={userProfile.gender} name="gender">
          <Radio value={'m'}>Male</Radio>
          <Radio value={'f'}>Female</Radio>
        </Radio.Group>
      </Form.Item>
    </Row>
    <Row style={{ margin: 15, marginBottom: 0 }}>
      <Form.Item
        label="About Me"
        name="aboutMe"
        rules={[{ required: true, message: 'Please input your Description' }]}
      >
        <TextArea rows={6} value={userProfile.aboutMe} name="aboutMe" onChange={onChangeUserProfile} />
      </Form.Item>
    </Row>
    <Row style={{ margin: 15, marginBottom: 0 }}>
      <div>Public Profile URL:</div>
      <div>
        <span>{userProfile.publicProfileUrl}</span>
      </div>
    </Row>
    <Row style={{ margin: 15 }}>
      <Button onClick={updateProfile}> Save Changes</Button>
    </Row>
  </Form>
</Card> */}
