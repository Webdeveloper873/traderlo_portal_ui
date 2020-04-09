/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { Col, Card, Input, Icon, Row, Avatar, Button } from 'antd';

//actions
import { chat } from 'appRedux/actions/user';

//styles
import classes from './styles.module.scss';

// Assets
import UserImgTemp from 'assets/user-img2.jpg';

const { TextArea } = Input;

const selectedUserAvatar = { paddingLeft: 15, paddingTop: 5, paddingBottom: 5 }

const SelectedUser = ({ userName, latestDate }) => {
  return (
    <Row>
      <Card>
        <Col span={6} style={selectedUserAvatar}>
          <Avatar size={55} src={UserImgTemp} />
        </Col>
        <Col span={14} className={classes.selectedUserInfo}>
          <Row><span><h6>{userName}</h6></span></Row>
          <Row><span>{`Last Online: ${moment(latestDate).format('LL')}`}</span></Row>
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

const MessageBox = ({ activeChatUser }) => {
  const dispatch = useDispatch();
  const profile = useSelector(({ user }) => user.profile);
  const activeChatMsg = useSelector(({ chat }) => chat.activeChatMsg);
  const { firstName, lastName, latestDate } = activeChatUser || {};

  useEffect(()=>{
    //getMessage based on activeChatId
    if (activeChatUser && activeChatUser.id){
      dispatch(chat.getChatMsg(activeChatUser.id));
    }
    console.log('activeChatUser', activeChatUser);
  }, []);

  if ( !activeChatUser) {
    return null;
  }

  return (
    <>
      <SelectedUser userName={`${firstName} ${lastName}`} latestDate={latestDate} />
      <Row>
        <Card>
          {activeChatMsg && activeChatMsg.map(msg => {
            const { messageDesc, senderId } = msg || {};
            const { id } = profile || {};
            if(senderId === id){
              return <ChatSent text={messageDesc} />;
            }else{
              return <ChatReceived text={messageDesc} />;
            }
          })}
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