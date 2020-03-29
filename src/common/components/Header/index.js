import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { Button, Dropdown, Menu, Avatar } from 'antd'
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
      <Link className={classes.linkStyle} to={routes.DASHBOARD_PAGE}>Dashboard</Link>
    </Menu.Item>
    <Menu.Item>
      <Link  onClick={onClickLogout} className={classes.linkStyle} to={routes.DASHBOARD_PAGE}>Logout</Link>
    </Menu.Item>
  </Menu>
  )
}

 const UserAvatar = () => {
   return(
    <Dropdown overlay={<Menus></Menus>} placement="bottomRight" trigger={['click']} className={classes.avatar}>
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
            <Link className={classes.linkStyle} to="/websites">Websites</Link>
            <Link className={classes.linkStyle} to={routes.DOMAINS_PAGE}>Domains</Link>
            <Link className={classes.linkStyle} to="/templates">Template/Graphics</Link>
            <Link className={classes.linkStyle} to="/script">Clone script</Link>
            <Link className={classes.linkStyle} to="/plugins">Plugins/Themes</Link>
            {userLoggedIn ? <UserAvatar /> : <Link onClick={onClickSignInUp} className={classes.linkStyle}>Sign in/Signup</Link>}
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