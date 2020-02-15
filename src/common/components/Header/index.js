import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import {Button} from 'antd'
//styles
import classes from './styles.module.scss';

//constants
import {routes} from 'common/constants';

//assets
import logo from 'assets/logo.png';


const buttonStyle = {backgroundColor:'#00bcd4',color: 'white', textAlign:'center'};

const Header = ({onClickSignInUp}) => {
  return (
    <div className={classes.wrapper}>
      <Navbar className={classes.header} bg="light" expand="lg" sticky="top">
        <Navbar.Brand href="/"><img className={classes.logo} src={logo} alt="Free Domain Auctions"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav className={classes.font} >
            <Nav.Link href="/websites">Websites</Nav.Link>
            <Nav.Link href={routes.DOMAINS_PAGE}>Domains</Nav.Link>
            <Nav.Link href="/templates">Template/Graphics</Nav.Link>
            <Nav.Link href="/script">Clone script</Nav.Link>
            <Nav.Link href="/plugins">Plugins/Themes</Nav.Link>
            <Nav.Link onClick={onClickSignInUp}>Sign in/Signup</Nav.Link>
            <Button size='large' style={buttonStyle}>Start Selling</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;