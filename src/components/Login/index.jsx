import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Row, Form as TempForm, Button as TempButton } from 'react-bootstrap';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { Redirect } from "react-router-dom";

//components
import Divider from 'common/components/Divider';

//utils
import { useFormInput } from 'common/utils/hooks';

//actions
import { user } from 'appRedux/actions/home';

//styles
import classes from './styles.module.scss';

//constants
import {routes} from 'common/constants';

const SignInForm = ({form, handleClose}) => {
  const [toLoginPage, setToLoginPage] = useState(false);
  const loginFailed = useSelector(({user})=>user.loginFailed);
  const loginUser = useFormInput('angecapuz132');
  const loginPass = useFormInput('asdqwe123');
  const isLoggedIn = useSelector(({user}) => user.isLoggedIn);
  const dispatch = useDispatch();
  const {getFieldDecorator} = form || {};

  useEffect(()=>{
    if(isLoggedIn){
      setTimeout(()=>{
        handleClose();
        setToLoginPage(true);
      }, 100);
    }
  }, [isLoggedIn]);

  const handleSubmit = e => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        const userDetails = {
          username: values.username,
          password: values.password
        }
        dispatch(user.login(userDetails));
      }
    });
  };

  if (toLoginPage){
    return <Redirect to={routes.DASHBOARD_PAGE} />
  }

  return(
    <Form onSubmit={handleSubmit} className={classes.formWrapper}>
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
        {getFieldDecorator('remember', {
          valuePropName: 'checked',
          initialValue: true,
        })(<Checkbox>Remember me</Checkbox>)}<br/>
        <Button type="primary" htmlType="submit" className="login-form-button">Submit</Button>
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
  const dispatch = useDispatch();


  useEffect(()=>{
    if(isLoggedIn){
      setTimeout(()=>{
        handleClose();
        setToLoginPage(true);
      }, 100);
    }
  }, [isLoggedIn]);


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
      </Row>
      <Divider className={classes.divStyle}>
        <Divider.text>OR</Divider.text>
      </Divider>
      <br />
      <TempForm.Group>
        <TempForm.Control type="text" placeholder="Username"
          onChange={signUpUsername.handleInputChange}/> <br />
        <TempForm.Control type="text" placeholder="Email Id"
          onChange={signUpUserEmail.handleInputChange}/> <br />
        <TempForm.Control type="text" placeholder="Password"
          onChange={signUpUserPass.handleInputChange}/> <br />
        <TempForm.Control type="text" placeholder="Confirm Password"
          onChange={signUpUserConfirmPass.handleInputChange}/>
      </TempForm.Group>
      <TempButton variant="primary" disabled={signUpUserConfirmPass.value !== signUpUserPass.value} onClick={onSignUp}>Sign Up</TempButton>
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