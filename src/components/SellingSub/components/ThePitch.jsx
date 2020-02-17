import React from 'react';
import { Tabs, Card, Menu, Dropdown, Button, Icon, message, Form, Input, Col, Row  } from 'antd';

//constants
import { responsiveConf } from 'common/constants';

//styles
import classes from '../styles.module.scss';

//re-name constants
const { TextArea } = Input;


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
    <div className={classes.thePitch}>
      <Card className={classes.cardStyle}>
        <h5 className={classes.fontDecorH5}>Describe Your Product</h5>
        <div className={classes.subDetails}>
          <span className={classes.fontDecor}>Get in front of buyers looking for website like your by categorizing it accurately, and letting them know how long the website has been live.</span>
        </div>
        <div>
          <Row>
            <Dropdown overlay={listCategoryMenu}>
              <Button size="large" className={classes.listCategory}>
                List Category <Icon type="down" />
              </Button>
            </Dropdown>
            <Dropdown overlay={listCategoryMenu}>
              <Button size="large" className={classes.listSubCategory}>
                List Sub Category <Icon type="down" />
              </Button>
            </Dropdown>
          </Row>
          <Row>
            <Input
              size="large"
              className={classes.descriptionHeading}
              placeholder="Description Heading"
            />
          </Row>
          <Row>
            <TextArea rows={8} className={classes.description}  placeholder="Description"/>
          </Row>
          <Row className={classes.btnContainer}>
            <Button size='large' className={classes.btnStyle}>Next</Button>
          </Row>
        </div>
      </Card>
    </div>
  )
}

export default ThePitch;