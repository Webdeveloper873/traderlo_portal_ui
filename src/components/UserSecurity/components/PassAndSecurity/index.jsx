/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Input, Switch, Button } from 'antd';

//components
import Panel from 'common/components/Panel';

//styles
import classes from './styles.module.scss';

//constants
import { responsiveConf } from 'common/constants';

//actions
import { user } from 'appRedux/actions/user';

// util
import { openNotification } from 'common/utils/helpers';

const { threeCol } = responsiveConf;

const PassAndSecurity = () => {
  const dispatch = useDispatch();
  const changePasswordSuccess = useSelector(({user}) => user.changePasswordSuccess);
  const userFetchedInfo = useSelector(({user}) => user.profile);
  const [userPassword, setUserPassword] = useState({oldPassword:'', newPassword: '', reTypeNewPassword:''});
  const { loginWith } = userFetchedInfo || {};


  useEffect(() =>{
    if (changePasswordSuccess) {
      console.log(changePasswordSuccess);
      setTimeout(() => {
        openNotification({status:'success', message:'change password success'});
      }, 500);
      dispatch(user.clearUserNotifStatus());
      setTimeout(() => {
        window.location.reload();
      }, 500);

    }
  },[changePasswordSuccess])

  const changePassword = () => {

    const changePwRequest = {
      id: userFetchedInfo.id,
      passwordInfo: {
        newPassword: userPassword.newPassword,
        oldPassword: userPassword.oldPassword,
      }

    }
    dispatch(user.changeUserPassword(changePwRequest));
  }

  const onChangeUserPassword = (e) => {
    setUserPassword({...userPassword,
      [e.target.name]: e.target.value
    })

    console.log(userPassword);
  }

  return(
    <>
      { loginWith && loginWith.toUpperCase() === 'GOOGLE' ? null :
      <Panel header='Change Password' className={classes.bottomMargin}
        headerRight= {
        <Button type="primary" size={'large'} className={classes.saveChanges} onClick={changePassword} disabled ={(userPassword.newPassword !== userPassword.reTypeNewPassword || userPassword.newPassword === '' || userPassword.reTypeNewPassword === '') || userPassword.oldPassword === ''}>Save Changes</Button>}>
        <Row gutter={24}>
          <Col {...threeCol}>
            <Input.Password size='large' placeholder='Old Password' name="oldPassword" onChange={onChangeUserPassword}/>
          </Col>
          <Col {...threeCol}>
            <Input.Password size='large' placeholder='New Password' name="newPassword" onChange={onChangeUserPassword}/>
          </Col>
          <Col {...threeCol}>
            <Input.Password size='large' placeholder='Re-Type Password' name="reTypeNewPassword" onChange={onChangeUserPassword}/>
          </Col>
        </Row>
      </Panel>}
      <Panel header='Two-factor authentication' >
        <p className={classes.text}>Please download an authentication app such as 2FA Authenticator to your smartphone. Once activated, the app will generate a code that will be needed to unlock your account.</p>
        <Col span={22}>
          <p className={classes.text}>
            While optional, using 2FA Authentication can increase the security of your account. Learn how to set up 2FA Authenticator or install 2FA Authenticator.
          </p>
        </Col>
        <Col span={2}>
          <Switch defaultChecked />
        </Col>
      </Panel>
    </>
  );
}

export default PassAndSecurity;