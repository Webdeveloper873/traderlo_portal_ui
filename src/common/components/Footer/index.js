import React from 'react';
import {Jumbotron, Col, Nav, InputGroup, Form, Button, Row} from 'react-bootstrap';
import { Icon } from 'antd';
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
      <Nav.Link href="/contact_us">Contact Us</Nav.Link>
      <Nav.Link>FAQs</Nav.Link>
      <Nav.Link>Blog</Nav.Link>
    </Col>
  );
}

const LeftCol = () => {
  return(
    <Col md={3}>
      <h6>Newsletter</h6>
      <p>Be the first to get notified about the latest updates.</p>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Your Email"
          aria-label="Your Email"
          aria-describedby="basic-addon2"
          style={{height:'auto'}}
        />
        <InputGroup.Append>
          <Button style={{backgroundColor:'#00bcd4',borderColor: '#00bcd4', textAlign:'center'}}>
            <Icon type="arrow-right" style={{paddingBottom:4}}/>
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </Col>
  );
}

const CopyRights = () => {
  return (
    <Row className={`${classes.wrapper} ${classes.copyRights}`} md={12} xs={12}>
      <Col xs={12} md={6}>
        Copyright © 2019 Free Domain Auctions. All rights reserved.
      </Col>
      <Col xs={12} md={6} >
        <Nav as="ul" className="justify-content-end">
          <Nav.Item as="li">
            <Nav.Link href="/home">About Us</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link eventKey="link-1">How it Works</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link eventKey="link-2">Terms and Condition</Nav.Link>
          </Nav.Item>
        </Nav>
      </Col>
    </Row>
  );
}

const Footer = () => {
  return(
    <>
    <Jumbotron className={`navbar sticky-bottom ${classes.jumbotronStyle}`}>
      <Row className={classes.wrapper} >
        <RightCol />
        <MiddleCol />
        <LeftCol />
      </Row>
      <CopyRights/>
    </Jumbotron>
    </>
  );
}

export default Footer;