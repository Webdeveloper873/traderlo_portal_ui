import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import {Button, Dropdown, Menu, Avatar} from 'antd'
import { useDispatch } from 'react-redux';

//actions
import { user } from 'appRedux/actions/user';

//styles
import classes from './styles.module.scss';

//constants
import {routes} from 'common/constants';

//assets
import logo from 'assets/logo.png';
import userImg from 'assets/user-img.jpg'

const Menus = () => {
  const dispatch = useDispatch();

  const onClickLogout = () => {
    dispatch(user.logout());
  }

  return (
    <Menu>
    <Menu.Item>
      <Button type="link" href={routes.DASHBOARD_PAGE}>
        Dashboard
      </Button>
    </Menu.Item>
    <Menu.Item>
      <Button type="link" onClick={onClickLogout}>
        Log out
      </Button>
    </Menu.Item>
  </Menu>
  )
}

 const UserAvatar = () => {
   return(
    <Dropdown overlay={<Menus></Menus>} placement="bottomRight" trigger={['click']}>
      <Button type="link">
        <Avatar size='large' src={userImg} />
      </Button>
    </Dropdown>
   )
 }



const Header = ({onClickSignInUp}) => {

  const userLoggedIn = localStorage.getItem("access_token") !== null;
  return (
    <div className={classes.wrapper}>
      <Navbar className={classes.header} bg="light" expand="lg" sticky="top">
        <Navbar.Brand href={routes.HOME_PAGE}><img className={classes.logo} src={logo} alt="Free Domain Auctions"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav className={classes.font} >
            <Nav.Link href="/websites">Websites</Nav.Link>
            <Nav.Link href={routes.DOMAINS_PAGE}>Domains</Nav.Link>
            <Nav.Link href="/templates">Template/Graphics</Nav.Link>
            <Nav.Link href="/script">Clone script</Nav.Link>
            <Nav.Link href="/plugins">Plugins/Themes</Nav.Link>
            { userLoggedIn ? <UserAvatar/> : <Nav.Link onClick={onClickSignInUp}>Sign in/Signup</Nav.Link>}
            {/* <Dropdown overlay={<Menus></Menus>} placement="bottomRight" trigger={['click']}>
              <Button type="link">
                <Avatar size='large' src={userImg} />
              </Button>
            </Dropdown> */}
            <Button size='large' className={classes.buttonStyle} href={routes.SELLING_PAGE}>Start Selling</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;