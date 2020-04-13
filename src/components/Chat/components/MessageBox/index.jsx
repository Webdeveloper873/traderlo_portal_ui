/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { Col, Card, Input, Icon, Row, Avatar, Button } from 'antd';

//actions
import { chat as chatActions } from 'appRedux/actions/user';

//utils
import { useFormInput } from 'common/utils/hooks';

//styles
import classes from './styles.module.scss';

// Assets
import UserImgTemp from 'assets/user-img2.jpg';

const { TextArea } = Input;

const selectedUserAvatar = { paddingLeft: 15, paddingTop: 5, paddingBottom: 5 }

const SelectedUser = ({ userName, lastLoginDate, onClickDeleteChat }) => {
  return (
    <Row>
      <Card>
        <Col span={6} style={selectedUserAvatar}>
          <Avatar size={55} src={UserImgTemp} />
        </Col>
        <Col span={14} className={classes.selectedUserInfo}>
          <Row><span><h6>{userName}</h6></span></Row>
          <Row><span>{`Last Online: ${moment(lastLoginDate).format('LL')}`}</span></Row>
        </Col>
        <Col className={classes.selectedUserDelete} span={4}>
          <Icon onClick={onClickDeleteChat} type="delete" className={{ fontSize: 30, color: 'red',  }} />
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

const MessageBox = ({ activeId }) => {
  const dispatch = useDispatch();
  const profile = useSelector(({ user }) => user.profile);
  const activeChatUser = useSelector(({ chat }) => chat.activeChatMsg);
  const msg = useFormInput('');
  const { firstName, lastName, lastLoginDate, chat, id } = activeChatUser || {};

  const onClickSend = () => {
    dispatch(chatActions.sendChat({
      message: msg.value,
      receiverId: activeId
    }));
  }

  const onClickDeleteChat = () => {
    dispatch(chatActions.deleteChat({
      id: id,
    }));

  }

  useEffect(()=>{
    //getMessage based on activeId
    console.log('MessageBox activeId', activeId);
    dispatch(chatActions.getChatMsg(activeId));
  }, [activeId]);

  if (!activeId || !firstName) {
    return null;
  }

  return (
    <>
      <SelectedUser userName={`${firstName} ${lastName}`}
        lastLoginDate={lastLoginDate}
        onClickDeleteChat={onClickDeleteChat}
      />
      <Row>
        <Card>
          {chat && chat.map(msg => {
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
            <TextArea rows={4} onChange={msg.handleInputChange} />
          </Row>
          <Row className={classes.btnContainer}>
            <Button size='large'
              className={classes.btnStyle}
              onClick={onClickSend}
            >Send</Button>
          </Row>
        </Card>
      </Row>
    </>
  );
}

export default MessageBox;