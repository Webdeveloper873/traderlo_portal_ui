import React from 'react';
import { Col, Card, Input, Icon, Row, Avatar, Badge, Button } from 'antd';
import moment from 'moment';
//components
import Banner from 'common/components/Banner';
import PageWrapper from 'common/components/PageWrapper';
import UserSidebar from 'common/components/UserSidebar';


// Assets
import UserImgTemp from 'assets/user-img2.jpg';

//styles
import classes from './styles.module.scss';


const selectedUserAvatar = {paddingLeft:15, paddingTop:5, paddingBottom:5}

const { TextArea } = Input;

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

const SelectedUser = () => {
  return (
    <Row>
      <Card>
        <Col span={6} style={selectedUserAvatar}>
          <Avatar size={55} src={UserImgTemp}/>
        </Col>
        <Col span={14} className={classes.selectedUserInfo}>
          <Row><span><h6>Amee Kinkead</h6></span></Row>
          <Row><span>Last Online: {moment().format('MMMM DD, YYYY')} </span></Row>
        </Col>
        <Col className={classes.selectedUserDelete} span={4}>
          <Icon type="delete" className={{fontSize:30, color:'red'}} />
        </Col>
      </Card>
    </Row>
  )
}

const Messages = () => {
  return (
    <Row>
      <Card>
        {/* Row will be done per message with variation of designs base on receiver or sender */}
        <Row >
          <div className={classes.chatSender}>
            <span >
              Nostrud exercitation ullam aeco laboris nisi utae commodo consequat duis aute. </span>
            </div>
        </Row>
        <Row >
          <div className={classes.chatSender}>
            <span >Is that OK? </span>
          </div>
        </Row>
          <Row>
            <div className={classes.chatReceiver}>
              <span >Consectetur adipisicing elied diod taempor incint labore dolore ainare Ut enim ad minim veni ame quis nostrud exercitation ullamco laboris.</span>
            </div>
          </Row>
      </Card>
      <Card>
        <Row>
          <TextArea rows={4} />
        </Row>
        <Row className={classes.btnContainer}>
          <Button size='large' className={classes.btnStyle}>Send</Button>
        </Row>
      </Card>
    </Row>
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
              <Col span={10} style={{margin:5}}>
                <SearchBid />
              </Col>
            </Row>
            <Row style={{marginLeft:5}}>
              <Col span={8}>
                <ChattedUserInfo/>
                <ChattedUserInfo/>
                <ChattedUserInfo/>
              </Col>
              <Col span={14}>
                <SelectedUser></SelectedUser>
                <Messages></Messages>
              </Col>
            </Row>
          </Card>
        </Col>
      </PageWrapper>
    </>
  );
}

export default Chat;