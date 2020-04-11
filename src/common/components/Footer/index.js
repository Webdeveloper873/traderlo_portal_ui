import React from 'react';
import {Jumbotron, Col, Nav, InputGroup, Form, Button, Row} from 'react-bootstrap';
import { Icon } from 'antd';
import { SendOutlined, MailOutlined, PhoneOutlined, FacebookFilled, TwitterSquareFilled, LinkedinFilled, InstagramOutlined } from '@ant-design/icons';

//style
import classes from './styles.module.scss';

//assets
import logo from 'assets/logo.png';

const RightCol = () => {
  return(
    <Col xs={12} md={6}>
      <img className={classes.logo} src={logo} alt="Free Domain Auctions" />
      <div className={classes.textDisp}>Consectetur adipisicing elit, sed do eiusmod tempor incididunt utbor etian dolm magna aliqua enim ad minim veniam quis nostrud exercita ullamco laboris nisie aliquip commodo okialama sikune pisuye.</div>
      <br></br>
      <Row type="flex" style={{alignItems: 'center', marginLeft:3}}><SendOutlined rotate={-30} size={16}/><span className={classes.imageInfo}>123 New Design Street, Melbourn Australia, 54215</span></Row>
      <Row type="flex" style={{alignItems: 'center', marginLeft:3}}><MailOutlined size={16}/><span className={classes.imageInfo}>info@domainUrl.com</span></Row>
      <Row type="flex" style={{alignItems: 'center', marginLeft:3}}><PhoneOutlined  size={16}/><span className={classes.imageInfo}>(0800) 1234 567891</span></Row>
      <br></br>
      <Row type="flex" style={{alignItems: 'center', marginLeft:3}}>
        <FacebookFilled size={25} style={{color:'#3b5998', marginRight:8}}/>
        <TwitterSquareFilled  size={25} style={{color:'#00acee', marginRight:8}}/> 
        <LinkedinFilled size={25} style={{color:'#0e76a8', marginRight:8}}/>
        <InstagramOutlined size={25} style={{color:'#E1306C', marginRight:8}}/>
      </Row>
      <br></br>
      <br></br>
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