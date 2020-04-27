/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Col, Input, Row, Form, Button, Avatar, DatePicker, Radio } from 'antd';
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
  const { firstName, lastName, contactNo, email, profileImage, birthDate, createdDate, location, gender, aboutMe, homePageUrl } = profile || {};


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

  const updateProfile = e => {
    e.preventDefault();
    console.log('updateProfile', form.getFieldsValue());
    dispatch(user.updateUserProfile(form.getFieldsValue()));
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
                id='birthDate'
                initialValue={birthDate || ''}
                customField={<DatePicker size={'large'} />}
              />
              <Col {...threeCol}>
                <Label text={'Registered On'} />
                <div className={classes.regOn}>{moment(createdDate).format('LL')}</div>
              </Col>
              <InputField form={form} required={true}
                colWidth={threeCol}
                label={'Location'}
                id='location'
                initialValue={location || ''}
              />
            </Row>
            <Row gutter={16}>
              <InputField form={form} required={true}
                label={'Gender'}
                id='gender'
                initialValue={gender || ''}
                customField={<Radio.Group options={genderOpt} />}
              />
            </Row>
            <Row gutter={16}>
              <InputField form={form} required={true}
                label={'About Me'}
                id='aboutMe'
                initialValue={aboutMe || ''}
                customField={
                  <TextArea rows={4}
                    placeholder='Description'
                  />
                }
              />
            </Row>
            <Row gutter={16} className={classes.marginTop15}>
              <Label text={'Public Profile Url:'} />
              <div className={classes.regOn}>{homePageUrl}</div>
            </Row>
          </Panel>
          <Button type="primary" size={'large'}
            className={classes.saveBtn}
            onClick={updateProfile}
          >
            Save Changes
          </Button>
        </Col>
      </PageWrapper>
    </>
  );
}

const WrappedUserProfile = Form.create({ name: 'userProfile' })(UserProfile);

export default WrappedUserProfile;
