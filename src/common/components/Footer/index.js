import React from 'react';
import {Jumbotron, Col, Nav, InputGroup, Form, Button} from 'react-bootstrap';

//component
import Divider from 'common/components/Divider';

//style
import classes from './styles.module.scss';

//assets
import logo from 'assets/logo.png';

const RightCol = () => {
  return(
    <Col xs={12} md={6}>
      <img className={classes.logo} src={logo} alt="Free Domain Auctions" />
      <div className={classes.textDisp}>Consectetur adipisicing elit, sed do eiusmod tempor incididunt utbor etian dolm magna aliqua enim ad minim veniam quis nostrud exercita ullamco laboris nisie aliquip commodo okialama sikune pisuye.</div>
      <div className={classes.fbLogo}></div>
    </Col>
  );
}

const MiddleCol = () => {
  return(
    <Col md={3}>
      <h6>Useful Links</h6>
      <Nav.Link>Privacy Policy</Nav.Link>
      <Nav.Link>Contact Us</Nav.Link>
      <Nav.Link>FAQs</Nav.Link>
      <Nav.Link>Blog</Nav.Link>
    </Col>
  );
}

const LeftCol = () => {
  return(
    <Col md={3}>
      <h6>Newsletter</h6>
      <p>Eiusmod tempor incididunt utbor etian dolm magna aliqua enim minim</p>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Your Email"
          aria-label="Your Email"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Append>
          <Button variant="primary">Enter</Button>
        </InputGroup.Append>
      </InputGroup>
    </Col>
  );
}

const Footer = () => {
  return(
    <>
    <Jumbotron className={`navbar fixed-bottom ${classes.jumbotronStyle}`}>
      <RightCol />
      <MiddleCol />
      <LeftCol />
    </Jumbotron>
    </>
  );
}

export default Footer;