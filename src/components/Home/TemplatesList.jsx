import React from 'react';
import {ListGroup, Col, Row} from 'react-bootstrap';
import { Icon } from 'antd';
//styles
import classes from './styles.module.scss';

const TemplatesList = () => {
  return(
    <Row type="flex">
      <Col xs={4} lg={4} md={4} className={classes.tempLists}>
        <ListGroup>
          <ListGroup.Item>
            <span className={classes.title}>
              <h6><b>Templates - Premium</b></h6>
            </span>
          </ListGroup.Item>
          <ListGroup.Item className={classes.greyBackground}>
            <div>
              <span className={classes.content}>
                <a href='/'>hellographic.com</a>
              </span>
              <span className={classes.daysLeftDecor}>2 days left</span>
            </div>
          </ListGroup.Item>
          <ListGroup.Item className={classes.whiteBackground}>
            <div>
              <span className={classes.content}>
                <a href='/'>hellographic.com</a>
              </span>
              <span className={classes.daysLeftDecor}>2 days left</span>
            </div>
          </ListGroup.Item>
          <ListGroup.Item className={classes.greyBackground}>
            <div>
              <span className={classes.content}>
                <a href='/'>hellographic.com</a>
              </span>
              <span className={classes.daysLeftDecor}>2 days left</span>
            </div>
          </ListGroup.Item>
          <ListGroup.Item className={classes.whiteBackground}>
            <div>
              <span className={classes.content}>
                <a href='/'>hellographic.com</a>
              </span>
              <span className={classes.daysLeftDecor}>2 days left</span>
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <div className={classes.viewAllDecor}>
              <span className={classes.fontDecor}>
                <a href='/'> <Row type="flex" style={{alignItems: 'center', marginLeft:80}}> View All <Icon type="arrow-right" style={{ fontSize:14, marginLeft:10}}/> </Row></a> 
              </span>
            </div>
          </ListGroup.Item>
        </ListGroup>
      </Col>

{/* Table two */}
<Col xs={4} lg={4} md={4} className={classes.tempLists}>
        <ListGroup>
          <ListGroup.Item>
            <span className={classes.title}>
              <h6><b>Templates - Premium</b></h6>
            </span>
          </ListGroup.Item>
          <ListGroup.Item className={classes.greyBackground}>
            <div>
              <span className={classes.content}>
                <a href='/'>hellographic.com</a>
              </span>
              <span className={classes.daysLeftDecor}>2 days left</span>
            </div>
          </ListGroup.Item>
          <ListGroup.Item className={classes.whiteBackground}>
            <div>
              <span className={classes.content}>
                <a href='/'>hellographic.com</a>
              </span>
              <span className={classes.daysLeftDecor}>2 days left</span>
            </div>
          </ListGroup.Item>
          <ListGroup.Item className={classes.greyBackground}>
            <div>
              <span className={classes.content}>
                <a href='/'>hellographic.com</a>
              </span>
              <span className={classes.daysLeftDecor}>2 days left</span>
            </div>
          </ListGroup.Item>
          <ListGroup.Item className={classes.whiteBackground}>
            <div>
              <span className={classes.content}>
                <a href='/'>hellographic.com</a>
              </span>
              <span className={classes.daysLeftDecor}>2 days left</span>
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <div className={classes.viewAllDecor}>
              <span className={classes.fontDecor}>
              <a href='/'> <Row type="flex" style={{alignItems: 'center', marginLeft:80}}> View All <Icon type="arrow-right" style={{ fontSize:14, marginLeft:10}}/> </Row></a>  
              </span>
            </div>
          </ListGroup.Item>
        </ListGroup>
      </Col>


{/* Table three */}
<Col xs={4} lg={4} md={4} className={classes.tempLists}>
        <ListGroup>
          <ListGroup.Item>
            <span className={classes.title}>
              <h6><b>Templates - Premium</b></h6>
            </span>
          </ListGroup.Item>
          <ListGroup.Item className={classes.greyBackground}>
            <div>
              <span className={classes.content}>
                <a href='/'>hellographic.com</a>
              </span>
              <span className={classes.daysLeftDecor}>2 days left</span>
            </div>
          </ListGroup.Item>
          <ListGroup.Item className={classes.whiteBackground}>
            <div>
              <span className={classes.content}>
                <a href='/'>hellographic.com</a>
              </span>
              <span className={classes.daysLeftDecor}>2 days left</span>
            </div>
          </ListGroup.Item>
          <ListGroup.Item className={classes.greyBackground}>
            <div>
              <span className={classes.content}>
                <a href='/'>hellographic.com</a>
              </span>
              <span className={classes.daysLeftDecor}>2 days left</span>
            </div>
          </ListGroup.Item>
          <ListGroup.Item className={classes.whiteBackground}>
            <div>
              <span className={classes.content}>
                <a href='/'>hellographic.com</a>
              </span>
              <span className={classes.daysLeftDecor}>2 days left</span>
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <div className={classes.viewAllDecor}>
              <span className={classes.fontDecor}>
              <a href='/'> <Row type="flex" style={{alignItems: 'center', marginLeft:80}}> View All <Icon type="arrow-right" style={{ fontSize:14, marginLeft:10}}/> </Row></a> 
              </span>
            </div>
          </ListGroup.Item>
        </ListGroup>
      </Col>
    </Row>
  );
}

export default TemplatesList;