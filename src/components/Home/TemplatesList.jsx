import React from 'react';
import {ListGroup, Col, Row} from 'react-bootstrap';
import { Icon } from 'antd';
//styles
import classes from './styles.module.scss';

const TemplatesList = () => {
  return(
    <Row type="flex" style={{alignItems: 'center'}}>
      <Col xs={4} lg={4} md={4} className={classes.tempLists}>
        <ListGroup>
          <ListGroup.Item>
            <span style={{textAlign: 'center'}}>
              <h6><b>Templates - Premium</b></h6>
            </span>
          </ListGroup.Item>
          <ListGroup.Item>
            <div style={{textAlign: 'center' }}>
              <span style={{marginRight:15, marginLeft:5 }}>
                <a>hellographic.com</a>
              </span>
              <span style={{color:'#00bcd4', fontWeight:600}}>2 days left</span>
            </div>
          </ListGroup.Item>
          <ListGroup.Item style={{backgroundColor:'rgba(0,0,0,.05)'}}>
            <div style={{textAlign: 'center' }}>
              <span style={{marginRight:15, marginLeft:5 }}>
                <a>hellographic.com</a>
              </span>
              <span style={{color:'#00bcd4', fontWeight:600}}>2 days left</span>
              </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <div style={{textAlign: 'center' }}>
              <span style={{marginRight:15, marginLeft:5 }}>
                <a>hellographic.com</a>
              </span>
              <span style={{color:'#00bcd4', fontWeight:600}}>2 days left</span>
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <div style={{textAlign: 'center',alignItems: 'center' }}>
              <span style={{color:'#ec008c', fontWeight:600, display:'block'}}>
                <a>View All <Icon type="arrow-right" style={{ fontSize:14}}/></a> 
              </span>
            </div>
          </ListGroup.Item>
        </ListGroup>
      </Col>

{/* Table two */}
      <Col xs={4} lg={4} md={4} className={classes.tempLists}>
      <ListGroup>
          <ListGroup.Item>
            <span style={{textAlign: 'center'}}>
              <h6><b>Templates - Premium</b></h6>
            </span>
          </ListGroup.Item>
          <ListGroup.Item>
            <div style={{textAlign: 'center' }}>
              <span style={{marginRight:15, marginLeft:5 }}>
                <a>hellographic.com</a>
              </span>
              <span style={{color:'#00bcd4', fontWeight:600}}>2 days left</span>
            </div>
          </ListGroup.Item>
          <ListGroup.Item style={{backgroundColor:'rgba(0,0,0,.05)'}}>
            <div style={{textAlign: 'center' }}>
              <span style={{marginRight:15, marginLeft:5 }}>
                <a>hellographic.com</a>
              </span>
              <span style={{color:'#00bcd4', fontWeight:600}}>2 days left</span>
              </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <div style={{textAlign: 'center' }}>
              <span style={{marginRight:15, marginLeft:5 }}>
                <a>hellographic.com</a>
              </span>
              <span style={{color:'#00bcd4', fontWeight:600}}>2 days left</span>
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <div style={{textAlign: 'center',alignItems: 'center' }}>
              <span style={{color:'#ec008c', fontWeight:600, display:'block'}}>
                <a>View All <Icon type="arrow-right"/></a> 
              </span>
            </div>
          </ListGroup.Item>
        </ListGroup>
      </Col>


{/* Table three */}
      <Col xs={4} lg={4} md={4} className={classes.tempLists}>
      <ListGroup>
          <ListGroup.Item>
            <span style={{textAlign: 'center'}}>
              <h6><b>Templates - Premium</b></h6>
            </span>
          </ListGroup.Item>
          <ListGroup.Item>
            <div style={{textAlign: 'center' }}>
              <span style={{marginRight:15, marginLeft:5 }}>
                <a>hellographic.com</a>
              </span>
              <span style={{color:'#00bcd4', fontWeight:600}}>2 days left</span>
            </div>
          </ListGroup.Item>
          <ListGroup.Item style={{backgroundColor:'rgba(0,0,0,.05)'}}>
            <div style={{textAlign: 'center' }}>
              <span style={{marginRight:15, marginLeft:5 }}>
                <a>hellographic.com</a>
              </span>
              <span style={{color:'#00bcd4', fontWeight:600}}>2 days left</span>
              </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <div style={{textAlign: 'center' }}>
              <span style={{marginRight:15, marginLeft:5 }}>
                <a>hellographic.com</a>
              </span>
              <span style={{color:'#00bcd4', fontWeight:600}}>2 days left</span>
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <div style={{textAlign: 'center',alignItems: 'center' }}>
              <span style={{color:'#ec008c', fontWeight:600, display:'block'}}>
                <a>View All <Icon type="arrow-right"/></a> 
              </span>
            </div>
          </ListGroup.Item>
        </ListGroup>
      </Col>
    </Row>
  );
}

export default TemplatesList;