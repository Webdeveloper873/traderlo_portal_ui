/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Card, Input, Icon, Row, Avatar, Badge } from 'antd';
import moment from 'moment';

//components
import Banner from 'common/components/Banner';
import PageWrapper from 'common/components/PageWrapper';
import UserSidebar from 'common/components/UserSidebar';
import MessageBox from './components/MessageBox';

//actions
import { chat } from 'appRedux/actions/user';

// Assets
import UserImgTemp from 'assets/user-img2.jpg';

//styles
import classes from './styles.module.scss';


const SearchBid = () => {
  return(<Input addonAfter={<Icon type={'search'} />} size='large' />);
}

const ChattedUserInfo = ({ details }) => {
  const { firstName, lastName, latestDate} = details || {};
  return (
    <Card style={{padding:12}}>
     <Col span={5}>
       <Badge dot>
         <Avatar size="large" src={UserImgTemp}/>
       </Badge>
     </Col>
     <Col span={12}>
        <Row><span>{`${firstName} ${lastName}`}</span></Row>
        <Row><span>{moment(latestDate).format('LL')}</span></Row>
     </Col>
    </Card>
  )
}

const Chat = ({ match, ...props}) => {
  const dispatch = useDispatch();
  const chatContacts = useSelector(({ chat }) => chat.chatContacts);
  const [activeChatUser, setactiveChatUser] = useState(null);
  const { params } = match || {};
  const { activeId } = params || {};
  const bannerPath = ['Dashboard', 'Çhat'];


  useEffect(()=>{
    console.log('chat match props: ', match);
    dispatch(chat.getChatUsers());
  }, []);

  useEffect(()=>{
    if (chatContacts && chatContacts.length > 0){
      setactiveChatUser(chatContacts[0]); //default is first user in array
    }
  }, [chatContacts]);

  return(
    <>
      <Banner text={'Chat'} path={bannerPath} />
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
                {chatContacts.map(details => <ChattedUserInfo details={details} />)}
              </Col>
              <Col span={15}>
                {activeId && <MessageBox activeChatUser={activeChatUser} activeId={activeId}/>}
              </Col>
            </Row>
          </Card>
        </Col>
      </PageWrapper>
    </>
  );
}

export default Chat;