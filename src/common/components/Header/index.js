import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { Button, Dropdown, Menu, Avatar, Modal, Row, Icon,  } from 'antd'

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
  const profile = useSelector(({user}) => user.profile);

  const [logOutCardVisible, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const onClickLogout = () => {
    setLoading(true);
    dispatch(user.logout(profile));
    setTimeout(() => {
      setLoading(false);
      setShowModal(false);
    }, 1000);
  }

  const showLogoutModal = () => {
    setShowModal(true);
  }

  const hideModal = () => {
    setShowModal(false);
  }


  return (
    <Menu>
    <Menu.Item>
      <Link className={classes.linkStyle} to={routes.DASHBOARD_PAGE}>Dashboard</Link>
    </Menu.Item>
    <Menu.Item>
      <Link  onClick={showLogoutModal} className={classes.linkStyle} >Logout</Link>
    </Menu.Item>

    <Modal
          destroyOnClose
          title=" Logout Account"
          visible={logOutCardVisible}
          onCancel = {hideModal}
          onOk={onClickLogout}
          footer={[
            <Button key="cancel" onClick={hideModal}>
              Cancel
            </Button>,
            <Button key="logout" type="primary" loading={loading} onClick={onClickLogout}>
              Logout
            </Button>,
          ]}>
            <div className={classes.logout}>
                <Row>
                    <Icon type='logout' style={{color:'#00bcd4' , marginBottom:15, fontSize:64}}/>
                </Row>
                <Row>
                    <span style={{fontSize:15}}> {`Are you sure you want to logout?`}</span>
                </Row>
            </div>
        </Modal>
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
  const isLoggedIn = useSelector(({user}) => user.isLoggedIn);
  const accessToken = window.localStorage.getItem('access_token');

  const onClickStartSelling = () => {
    if(!isLoggedIn){
      onClickSignInUp();
    }
  }

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
            {accessToken ? <UserAvatar /> : <Link onClick={onClickSignInUp} className={classes.linkStyle}>Sign in/Signup</Link>}
            <Button size='large'
              className={classes.buttonStyle}
              href={isLoggedIn ? routes.SELLING_PAGE : null}
              onClick={onClickStartSelling}
            >
              Start Selling
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;