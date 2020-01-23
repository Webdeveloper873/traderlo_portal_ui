import React, {useState} from 'react';
import {Modal, Row, Form, Button} from 'react-bootstrap';

//components
import Divider from 'common/components/Divider';

import classes from './styles.module.scss';

const SignInForm = () => {
  return(
    <Form className={classes.formWrapper}>
      <Row className="justify-content-md-center">
        {/* <div class="fb-login-button" data-width="" data-size="large" data-button-type="login_with" data-auto-logout-link="false" data-use-continue-as="true"></div> */}
      </Row>
      <Divider className={classes.divStyle}>
        <Divider.text>OR</Divider.text>
      </Divider>
      <br />
        <Form.Group>
          <Form.Control type="text" placeholder="Email/Username" /> <br />
          <Form.Control type="text" placeholder="Password" /> <br />
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>
        <Button variant="primary" type="submit">Submit</Button>
    </Form>
  )
}

const SignUpForm = () => {
  return (
    <Form className={classes.formWrapper}>
      <Row className="justify-content-md-center">
        {/* <div class="fb-login-button" data-width="" data-size="large" data-button-type="login_with" data-auto-logout-link="false" data-use-continue-as="true"></div> */}
      </Row>
      <Divider className={classes.divStyle}>
        <Divider.text>OR</Divider.text>
      </Divider>
      <br />
      <Form.Group>
        <Form.Control type="text" placeholder="Username" /> <br />
        <Form.Control type="text" placeholder="Email Id" /> <br />
        <Form.Control type="text" placeholder="Password" /> <br />
        <Form.Control type="text" placeholder="Confirm Password" />
      </Form.Group>
      <Button variant="primary" type="submit">Sign Up</Button>
    </Form>
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
        <SignUpForm />
      </Modal.Body>
      <Modal.Footer className="justify-content-md-center">
        <span>Already have a Free Domain Auctions account?</span>
        <span className={classes.signupLink} onClick={toggleIsSignUp}>Sign In</span>
      </Modal.Footer>
    </Modal>
  );
}

const Login = ({show, handleClose}) => {
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
        <SignInForm />
      </Modal.Body>
      <Modal.Footer className="justify-content-md-center">
        <span>Don't have an account?</span>
        <span className={classes.signupLink} onClick={toggleIsSignUp}>Sign Up Now</span>
      </Modal.Footer>
    </Modal>
  );
}

export default Login;