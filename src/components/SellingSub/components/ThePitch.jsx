import React from 'react';
import { Tabs, Card, Menu, Dropdown, Button, Icon, message, Form, Input, Col, Row  } from 'antd';

//constants
import { responsiveConf } from 'common/constants';

//styles
import classes from '../styles.module.scss';

//re-name constants
const { TextArea } = Input;
const { TabPane } = Tabs;

//styles
const nextButtonStyle = {backgroundColor:'#00bcd4', color:'white', textAlign:'center', width:140, padding:10, height:50};
const listCategory = {width:'30%', marginTop:30,marginBottom:30,marginRight:30};
const listSubCategory = {width:'30%', margin:30};
const cardStyle = {paddingRight:25,paddingLeft:25, paddingTop:10};

//functions
const handleMenuClick = (e) => {
  message.info('Click on menu item.');
  console.log('click', e);
}

// components
const listCategoryMenu = () => {
  return (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">
        <Icon type="user" />
        Male
      </Menu.Item>
      <Menu.Item key="2">
        <Icon type="user" />
        Female
      </Menu.Item>
      <Menu.Item key="3">
        <Icon type="user" />
        Others
      </Menu.Item>
    </Menu>
  )
};



const ThePitch = () => {
  return(
    <>
      <Card style={cardStyle}>
        <h5 style={{fontWeight:700}}>Describe Your Product</h5>
        <div style={{marginTop:20}}>
          <span style={{fontSize:17}}>Get in front of buyers looking for website like your by categorizing it accurately, and letting them know how long the website has been live.</span>
        </div>
        <div>
          <Row>
            <Dropdown overlay={listCategoryMenu}>
              <Button size="large" style={listCategory}>
                List Category <Icon type="down" />
              </Button>
            </Dropdown>
            <Dropdown overlay={listCategoryMenu}>
              <Button size="large" style={listSubCategory}>
                List Sub Category <Icon type="down" />
              </Button>
            </Dropdown>
          </Row>
          <Row>
            <Input
              size="large"
              style={{width:685}}
              placeholder="Description Heading"
            />
          </Row>
          <Row>
            <TextArea rows={8} style={{width:685, marginTop:20}}  placeholder="Description"/>
          </Row>
          {/* <Row style={{marginTop:30}}>
            <Button size='large' style={nextButtonStyle} className={classes.btnStyle}>Next</Button>
            
          </Row> */}
          <Row className={classes.btnContainer}>
            <Button size='large' className={classes.btnStyle}>Next</Button>
          </Row>
        </div>
      </Card>
    </>
  )
}

export default ThePitch;