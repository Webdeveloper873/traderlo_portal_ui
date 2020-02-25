import React from 'react';
import { Card, Icon, Avatar, Row, Col } from 'antd';
import CountUp from 'react-countup';

//styles
import classes from './styles.module.scss';


const cardDesign = {margin:15, backgroundColor:'pink', borderRadius:5, color: 'white', fontSize:18, fontWeight:700, height: 100}


const DashboardItem = ({count ,title}) => {
  return (
    <Card style={cardDesign}>
      <Row>
        <Col span={16}>
          <Row>
            <span>
              <CountUp
                start={0}
                end={count}
                duration={2.75}
                separator=","
              />
            </span>
          </Row>
          <Row style={{marginTop:5}}>
            <span>
             {title}
            </span>
          </Row>
        </Col>
        <Col span={8}>
          <span><Icon type="star" style={{ fontSize:120 }}  rotate={50}/></span>
        </Col>
      </Row>
    </Card>
  )
}


const DashBoard = ({...props}) => {
  return(
    <>
      <Row>
        <Col span={7}> 
          <DashboardItem title ={' Total Posted Ads'} count={16578612}></DashboardItem>
        </Col>
        <Col span={7}>
          <DashboardItem title ={' Total Item Sold'} count={54678789}></DashboardItem>
        </Col>
        <Col span={7}>
        <DashboardItem title ={' Total Cancelled Ads'} count={1567523}></DashboardItem>
        </Col>
      </Row>
    </>
  )
}

export default DashBoard;