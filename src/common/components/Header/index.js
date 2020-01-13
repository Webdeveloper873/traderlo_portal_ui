import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';

//styles
import classes from './styles.module.scss';

//assets
import logo from 'assets/logo.png';

const Header = () => {
  return (
    <div className={classes.wrapper}>
      <Navbar className={classes.header} bg="light" expand="lg" sticky="top">
        <Navbar.Brand href="/"><img className={classes.logo} src={logo} alt="Free Domain Auctions"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="/websites">Websites</Nav.Link>
            <Nav.Link href="/Domains">Domains</Nav.Link>
            <Nav.Link href="/templates">Template/Graphics</Nav.Link>
            <Nav.Link href="/script">Clone script</Nav.Link>
            <Nav.Link href="/plugins">Plugins/Themes</Nav.Link>
            <Nav.Link href="/SignIn">Sign in/Signup</Nav.Link>
            <Button variant="primary">Start Selling</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;