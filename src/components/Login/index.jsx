/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Row, Form as TempForm, Button as TempButton } from 'react-bootstrap';
import { Form, Icon, Input, Button, Checkbox, Col } from 'antd';
import { Redirect } from "react-router-dom";
import GoogleButton from 'react-google-button'
import * as EmailValidator from 'email-validator';
//components
import Divider from 'common/components/Divider';

//utils
import { useFormInput } from 'common/utils/hooks';
import { base_url } from 'appRedux/constants/configs';
//actions
import { user } from 'appRedux/actions/user';

//styles
import classes from './styles.module.scss';

//constants
import {routes} from 'common/constants';



const SignInForm = ({form, handleClose}) => {
  const [toLoginPage, setToLoginPage] = useState(false);
  const [loading, setLoading] = useState(false);
  const loginFailed = useSelector(({user})=>user.loginFailed);
  const isLoggedIn = useSelector(({user}) => user.isLoggedIn);
  const dispatch = useDispatch();
  const {getFieldDecorator} = form || {};

  const url = window.location.href;
  const hashes = url.split("?")[0];  // if deployed https://traderlo-portal-api.herokuapp.com/ || if local  http://localhost:3000/
  const OAUTH2_REDIRECT_URI = `${hashes}oauth2/redirect`;
  const GOOGLE_AUTH_URL = `${base_url}/user/login/google?redirectUri=` + OAUTH2_REDIRECT_URI;

  useEffect(()=>{
    if(isLoggedIn){
      setTimeout(()=>{
        handleClose();
        setToLoginPage(true);
      }, 100);
    }
  }, [isLoggedIn]);

  const handleSubmit = e => {
    setLoading(true);
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        const userDetails = {
          email: values.username,
          password: values.password
        }
        console.log(userDetails,'userDetails');
        dispatch(user.login(userDetails));
      }
    });
    setLoading(false);
  };

  if (toLoginPage){
    return <Redirect to={routes.DASHBOARD_PAGE} />
  }

  return(
    <Form onSubmit={handleSubmit} className={classes.formWrapper}>
      <Row className="justify-content-md-center">
        <Col>
          <a className="btn btn-block social-btn google" href={GOOGLE_AUTH_URL}> <GoogleButton /> </a>
        </Col>
      </Row>
      <Divider className={classes.divStyle}>
        <Divider.text>OR</Divider.text>
      </Divider>
      <Form.Item validateStatus={loginFailed ? 'error' : ''}>
        {getFieldDecorator('username', {
          rules: [{ required: true, message: 'Please input your username!' }],
        })(
          <Input size="large"
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Username"
          />,
        )}
      </Form.Item>
      <Form.Item validateStatus={loginFailed ? 'error' : ''} help={loginFailed ? "Invalid login credentials" : ""}>
        {getFieldDecorator('password', {
          rules: [{ required: true, message: 'Please input your Password!' }],
        })(
          <Input size="large"
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="Password"
          />,
        )}
      </Form.Item>
      <Form.Item>
        <Row justify="space-between" gutter={48}>
          <Col span={11} style={{marginLeft:15}}>
              {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(<Checkbox>Remember me</Checkbox>)}
          </Col>
          <Col span={11} style={{textAlign:'right', marginRight:15}}>
            <Button type="primary" htmlType="submit" loading={loading} className="login-form-button" >Submit</Button>
          </Col>
        </Row>
      </Form.Item>
    </Form>
  )
}

const SignUpForm = ({handleClose}) => {
  const [toLoginPage, setToLoginPage] = useState(false);
  const signUpUsername = useFormInput('');
  const signUpUserEmail = useFormInput('');
  const signUpUserPass = useFormInput('');
  const signUpUserConfirmPass = useFormInput('');
  const isLoggedIn = useSelector(({user}) => user.isLoggedIn);
  const register = useSelector(({user}) => user.register);
  const dispatch = useDispatch();

  const url = window.location.href;
  const hashes = url.split("?")[0];  // if deployed https://traderlo-portal-api.herokuapp.com/ || if local  http://localhost:3000/
  const OAUTH2_REDIRECT_URI = `${hashes}oauth2/redirect`;
  const GOOGLE_AUTH_URL = `${base_url}/user/googleLogin?redirectUri=` + OAUTH2_REDIRECT_URI;


  useEffect(()=>{
    if(isLoggedIn){
      setTimeout(()=>{
        handleClose();
        setToLoginPage(true);
      }, 100);
    }
  }, [isLoggedIn]);

  useEffect(()=>{
    if(register != null){
      setTimeout(()=>{
        handleClose();
      }, 100);
    }
  }, [register]);


  const onSignUp = () => {
    const userDetails = {
      userName: signUpUsername.value,
      email: signUpUserEmail.value,
      password: signUpUserPass.value,
    }
    dispatch(user.registerUser(userDetails));
  }

  if (toLoginPage){
    return <Redirect to={routes.DASHBOARD_PAGE} />
  }

  return (
    <TempForm className={classes.formWrapper}>
      <Row className="justify-content-md-center">
        {/* <div class="fb-login-button" data-width="" data-size="large" data-button-type="login_with" data-auto-logout-link="false" data-use-continue-as="true"></div> */}
        <Col>
          <a className="btn btn-block social-btn google" href={GOOGLE_AUTH_URL}> <GoogleButton/> </a>
        </Col>
      </Row>
      <Divider className={classes.divStyle}>
        <Divider.text>OR</Divider.text>
      </Divider>
      <br />
      <TempForm.Group>
        {signUpUsername.value.trim().length === 0 && signUpUsername.value? <span class="text-warning">Please enter valid username</span> : ''}
        <TempForm.Control type="text" placeholder="Username"
          onChange={signUpUsername.handleInputChange}/> <br />
          {!EmailValidator.validate(signUpUserEmail.value) && signUpUserEmail.value? <span class="text-warning">Please enter valid email</span> : ''}
        <TempForm.Control type="text" placeholder="Email Id"
          onChange={signUpUserEmail.handleInputChange}/> <br />

        <TempForm.Control type='password' placeholder="Password"
          onChange={signUpUserPass.handleInputChange}/> <br />
        <TempForm.Control type='password' placeholder="Confirm Password"
          onChange={signUpUserConfirmPass.handleInputChange}/>
      </TempForm.Group>
      <TempButton variant="primary" disabled={(signUpUserConfirmPass.value !== signUpUserPass.value) ||
          (signUpUserConfirmPass.value.trim().length === 0 || signUpUserPass.value.trim().length === 0) ||
          (!EmailValidator.validate(signUpUserEmail.value) || signUpUserEmail.value.trim().length === 0) ||
          (signUpUsername.value.trim().length === 0)} onClick={onSignUp}>Sign Up</TempButton>
    </TempForm>
  )
}

const SignUp = ({show, handleClose, toggleIsSignUp}) => {

  return (
    <Modal centered
      aria-labelledby="contained-modal-title-vcenter"
      show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>SIGN UP</Modal.Title>
      </Modal.Header>
      <Modal.Body className="justify-content-md-center">
        <SignUpForm handleClose={handleClose}/>
      </Modal.Body>
      <Modal.Footer className="justify-content-md-center">
        <span>Already have a Free Domain Auctions account?</span>
        <span className={classes.signupLink} onClick={toggleIsSignUp}>Sign In</span>
      </Modal.Footer>
    </Modal>
  );
}

const Login = ({show, handleClose, form}) => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleIsSignUp = () => setIsSignUp(!isSignUp)

  if (isSignUp){
    return <SignUp show={show} handleClose={handleClose} toggleIsSignUp={toggleIsSignUp}/>;
  }

  return(
    <Modal centered
      aria-labelledby="contained-modal-title-vcenter"
      show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>SIGN IN</Modal.Title>
      </Modal.Header>
      <Modal.Body className="justify-content-md-center">
        <SignInForm form={form} handleClose={handleClose}/>
      </Modal.Body>
      <Modal.Footer className="justify-content-md-center">
        <span>Don't have an account?</span>
        <span className={classes.signupLink} onClick={toggleIsSignUp}>Sign Up Now</span>
      </Modal.Footer>
    </Modal>
  );
}

const WrappedLogin = Form.create({ name: 'loginPage' })(Login);

export default WrappedLogin;