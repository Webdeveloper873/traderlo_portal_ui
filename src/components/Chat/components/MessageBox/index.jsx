import React from 'react';
import moment from 'moment';
import { Col, Card, Input, Icon, Row, Avatar, Badge, Button } from 'antd';

//styles
import classes from './styles.module.scss';

// Assets
import UserImgTemp from 'assets/user-img2.jpg';

const { TextArea } = Input;

const selectedUserAvatar = { paddingLeft: 15, paddingTop: 5, paddingBottom: 5 }

const SelectedUser = ({ userName }) => {
  return (
    <Row>
      <Card>
        <Col span={6} style={selectedUserAvatar}>
          <Avatar size={55} src={UserImgTemp} />
        </Col>
        <Col span={14} className={classes.selectedUserInfo}>
          <Row><span><h6>{userName}</h6></span></Row>
          <Row><span>Last Online: {moment().format('MMMM DD, YYYY')} </span></Row>
        </Col>
        <Col className={classes.selectedUserDelete} span={4}>
          <Icon type="delete" className={{ fontSize: 30, color: 'red' }} />
        </Col>
      </Card>
    </Row>
  )
};

const ChatSent = ({ text }) => {
  return (
    <Row >
      <div className={classes.chatSender}>
        <span >{text}</span>
      </div>
    </Row>
  )
};

const ChatReceived = ({ text }) => {
  return (
    <Row>
      <div className={classes.chatReceiver}>
        <span >{text}</span>
      </div>
    </Row>
  )
}

const MessageBox = () => {
  return (
    <>
      <SelectedUser userName='Amee Kinkead' />
      <Row>
        <Card>
          {/* Row will be done per message with variation of designs base on receiver or sender */}
          <ChatSent text='Nostrud exercitation ullam aeco laboris nisi utae commodo consequat duis aute.' />
          <ChatSent text='Is that OK?' />
          <ChatReceived text='Consectetur adipisicing elied diod taempor incint labore dolore ainare Ut enim ad minim veni ame quis nostrud exercitation ullamco laboris.' />
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
    </>
  );
}

export default MessageBox;