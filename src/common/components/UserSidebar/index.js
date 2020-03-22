import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Col, Row, Card, Avatar, Collapse} from 'antd';

//styles
import classes from './styles.module.scss';

//actions
import { user } from 'appRedux/actions/home';

//assets
import UserImgTemp from 'assets/user-img.jpg';
import buyingActivities from 'assets/userSideBar/buyingActivities.png';
import chat from 'assets/userSideBar/chat.png';
import dashboard from 'assets/userSideBar/dashboard.png';
import myFinance from 'assets/userSideBar/myFinance.png';
import myProfileAndAccount from 'assets/userSideBar/myProfileAndAccount.png';
import sellingActivities from 'assets/userSideBar/sellingActivities.png';


const { Panel } = Collapse;
const {Meta} = Card;

const customPanelStyle = {backgroundColor:'white', borderRadius:0, padding:0, width: 270};




const CardsDesc = ({aboutMe}) => (
  <>
    <div>{'Designer | Developer'}</div>
    <div>{aboutMe}</div>
  </>
)

const UsersCard = () => {
  const profile = useSelector(({user}) => user.profile);
  const {userName} = profile || {};
  return(
    <Card className={classes.usersCard}>
      <Row>
        <Col span={8}>
          <Avatar size={60} src={UserImgTemp} className={classes.avatarStyle}/>
        </Col>
        <Col span={16}>
          <Meta title={userName} description={<CardsDesc profile={profile} />} />
        </Col>
      </Row>
    </Card>
  )
}


const ItemSelection = ({image, title, redirectPath, ...props}) => {
  return (
    <div className={classes.itemSelection} onClick={test}>
      <a href={redirectPath}>
        <Col span={24} className={classes.colDecor}>
          <Avatar size={35} src={image} className={classes.avatarStyle} shape="square"/>
          <span className={classes.fontDecor}>{title}</span>
        </Col>
      </a>
  </div>
  )
}

const DropdownSelection = ({image, title}) => {
  return (
    <div className={classes.dropdownSelection}>
      <Col span={24} className={classes.colDecor}>
        <Avatar size={35} src={image} className={classes.avatarStyle} shape="square"/>
        <span className={classes.fontDecor}>{title}</span>
      </Col>
    </div>
  )
}



const SubItemSelection = ({title, redirectPath, ...props}) => {
  return(
    <a href={redirectPath}>
      <div className={classes.subItemSelection} {...props}>
        <span className={classes.fontDecor}>{title}</span>
      </div>
    </a>
  )
}

const test = () => {
  console.log('clicked')
}

const CollapsibleItems = () => {
  const dispatch = useDispatch();
  const activeSidebarKey = useSelector(({ user }) => user.activeSidebarKey);

  const callback= (key) => {

    if (key && key.length > 0 ) {
      dispatch(user.changeUserSidebarActiveKey(key[0]));

    } else dispatch(user.changeUserSidebarActiveKey(''));
  
    
  }

  return (
    <Collapse defaultActiveKey={[activeSidebarKey]} onChange={callback} expandIconPosition={'right'} style={customPanelStyle} accordion>
      <Panel header={<DropdownSelection image={buyingActivities} title = {'Buying Activities'}></DropdownSelection>} key="1" style={{padding:0}}>
        <SubItemSelection title={'My Bids'} redirectPath='/traderlo/user/bids'></SubItemSelection>
        <SubItemSelection title={'My Orders'} redirectPath='/traderlo/user/orders'></SubItemSelection>
        <SubItemSelection title={'Watching'} redirectPath='/traderlo/user/watchings'></SubItemSelection>
      </Panel>
      <Panel header={<DropdownSelection image={sellingActivities} title = {'Selling Activities'}></DropdownSelection>} key="2" >
        <SubItemSelection title={'Listing And Status'} redirectPath='/traderlo/user/listing_and_status' ></SubItemSelection>
        <SubItemSelection title={'Bids'} redirectPath='/traderlo/user/bids_performance' ></SubItemSelection>
        <SubItemSelection title={'Customer Orders'} redirectPath='/traderlo/user/customer_orders' ></SubItemSelection>
      </Panel>
      <Panel header={<DropdownSelection image={myFinance} title = {'My Finance'}></DropdownSelection>} key="3" >
      <SubItemSelection title={'Payment Activity'} ></SubItemSelection>
        <SubItemSelection title={'Accounts And Cards'} ></SubItemSelection>
      </Panel>
      <Panel header={<DropdownSelection image={myProfileAndAccount} title = {'My Profile And Account'}></DropdownSelection>} key="4" >
        <SubItemSelection title={'User Profile'} ></SubItemSelection>
        <SubItemSelection title={'Password And Security'} ></SubItemSelection>
        <SubItemSelection title={'Identify And Verification'} ></SubItemSelection>
      </Panel>
    </Collapse>
  )
}

const UserSideBar = () => {
  return(
    <>
       <Row>
         <Col span={5} style={{paddingLeft:20}}>
          <UsersCard></UsersCard>
          <ItemSelection image={dashboard} title={'Dashboard'} redirectPath='/traderlo/user/dashboard'></ItemSelection>
          <ItemSelection image={chat} title={'Chat'} redirectPath='/traderlo/user/chat'></ItemSelection>
          <CollapsibleItems></CollapsibleItems>
         </Col>
       </Row>
    </>
  );
}

export default UserSideBar;