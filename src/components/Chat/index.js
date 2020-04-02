import React from 'react';
import { Col, Card, Input, Icon, Row, Avatar, Badge, Button } from 'antd';
import moment from 'moment';
//components
import Banner from 'common/components/Banner';
import PageWrapper from 'common/components/PageWrapper';
import UserSidebar from 'common/components/UserSidebar';
import MessageBox from './components/MessageBox';


// Assets
import UserImgTemp from 'assets/user-img2.jpg';

//styles
import classes from './styles.module.scss';


const SearchBid = () => {
  return(<Input addonAfter={<Icon type={'search'} />} size='large' />);
}

const ChattedUserInfo = () => {
  return (
    <Card style={{padding:12}}>
     <Col span={5}>
       <Badge dot>
         <Avatar size="large" src={UserImgTemp}/>
       </Badge>
     </Col>
     <Col span={12}>
       <Row><span>Sample User</span></Row>
      <Row><span>{moment().format('MMMM DD, YYYY')}</span></Row>
     </Col>
   </Card>
  )
}



const Chat = () => {
  return(
    <>
      <Banner text={'Chat'} />
      <PageWrapper addTopMargin>
        <Col xs={24} sm={24} md={6} lg={6} >
          <UserSidebar />
        </Col>
        <Col xs={24} sm={24} md={18} lg={18} className={classes.customPadding}>
          <Card type="inner" title={'Offers/Messages'} className={classes.tableContainer}>
            <Row>
              <Col span={9} style={{margin:5}}>
                <SearchBid />
              </Col>
            </Row>
            <Row style={{marginLeft:5}}>
              <Col span={9}>
                <ChattedUserInfo/>
                <ChattedUserInfo/>
                <ChattedUserInfo/>
              </Col>
              <Col span={15}>
                <MessageBox />
              </Col>
            </Row>
          </Card>
        </Col>
      </PageWrapper>
    </>
  );
}

export default Chat;