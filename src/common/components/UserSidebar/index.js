import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {Col, Row, Card, Avatar, Collapse} from 'antd';

//styles
import classes from './styles.module.scss';

//actions
import { user } from 'appRedux/actions/user';

//assets
import UserImgTemp from 'assets/user-img.jpg';
import buyingActivities from 'assets/userSideBar/buyingActivities.png';
import chat from 'assets/userSideBar/chat.png';
import dashboard from 'assets/userSideBar/dashboard.png';
import myFinance from 'assets/userSideBar/myFinance.png';
import myProfileAndAccount from 'assets/userSideBar/myProfileAndAccount.png';
import sellingActivities from 'assets/userSideBar/sellingActivities.png';

//constants
import { routes } from 'common/constants';


const { Panel } = Collapse;
const {Meta} = Card;

const customPanelStyle = {backgroundColor:'white', borderRadius:0, padding:0, width: 270};




const CardsDesc = ({profile}) => {
  return (
    <>
    <div>{profile.email}</div>
    <div>{profile.aboutMe}</div>
  </>
  )
}

const UsersCard = () => {
  const profile = useSelector(({user}) => user.profile);
  console.log(profile,'profile')
  const { userName, profileImage } = profile || {};

  return(
    <Card className={classes.usersCard}>
      <Row>
        <Col span={8}>
          <Avatar size={60} src={profileImage || UserImgTemp} className={classes.avatarStyle}/>
        </Col>
        <Col span={16}>
          <Meta title={userName} description={<CardsDesc profile={profile} />} />
        </Col>
      </Row>
    </Card>
  )
}


const ItemSelection = ({image, title, redirectPath, idKey, ...props}) => {
  const dispatch = useDispatch();
  const setDefaultActiveKey = () => {
    dispatch(user.changeUserSidebarActiveKey(''))
  }

  let pageURL = window.location.href;
  let lastURLSegment = pageURL.substr(pageURL.lastIndexOf('/') + 1);

  return (
    <div className={classes.itemSelection} onClick={setDefaultActiveKey}>
      <Link to={redirectPath}>
        <Col span={24} className={classes.colDecor}>
          <Avatar size={35} src={image} className={classes.avatarStyle} shape="square"/>
          <span className={`${lastURLSegment === idKey ? classes.selectedDDFontDecor : classes.fontDecor}`}>{title}</span>
        </Col>
      </Link>
  </div>
  )
}

const DropdownSelection = ({image, title, redirectPath, idKey}) => {

  let pageURL = window.location.href;
  let lastURLSegment = pageURL.substr(pageURL.lastIndexOf('/') + 1);
  let selectedDropdown =false;

  if (idKey === 1) {
    if (lastURLSegment === 'bids'||
    lastURLSegment === 'orders' ||
    lastURLSegment === 'watchings' ) {
      selectedDropdown = true;
    }
  } else if (idKey === 2) {
    if (lastURLSegment === 'listing_and_status'||
    lastURLSegment === 'bids_performance' ||
    lastURLSegment === 'customer_orders' ) {
      selectedDropdown = true;
    }
  } else if (idKey === 3) {
    if (lastURLSegment === 'payment_activity'||
    lastURLSegment === 'accounts_and_cards') {
      selectedDropdown = true;
    }
  } else if (idKey === 4) {
    if (lastURLSegment === 'profile'||
    lastURLSegment === 'security') {
      selectedDropdown = true;
    }
  }

  return (
    <Link to={redirectPath}>
      <div className={classes.dropdownSelection}>
        <Col span={24} className={classes.colDecor}>
          <Avatar size={35} src={image} className={classes.avatarStyle} shape="square" />
          <span className={`${selectedDropdown ? classes.selectedDDFontDecor : classes.fontDecor}`}>{title}</span>
        </Col>
      </div>
    </Link>
  )
}



const SubItemSelection = ({title, redirectPath, idKey, ...props}) => {

  let pageURL = window.location.href;
  let lastURLSegment = pageURL.substr(pageURL.lastIndexOf('/') + 1);
  console.log(lastURLSegment,'url shit');
  console.log(idKey,'idKey')
  console.log(lastURLSegment === idKey,'lastURLSegment === idKey')

  return(
    <Link to={redirectPath}>
      <div className={classes.subItemSelection} {...props}>
        <span className={`${lastURLSegment === idKey? classes.selectedFontDecor : classes.fontDecor}`}>{title}</span>
      </div>
    </Link>
  )
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
      <Panel header={<DropdownSelection image={buyingActivities} title={'Buying Activities'} redirectPath={routes.MY_BIDS} idKey={1}/>} key="1" style={{padding:0}}>
        <SubItemSelection title={'My Bids'} redirectPath={routes.MY_BIDS} idKey={'bids'} />
        <SubItemSelection title={'My Orders'} redirectPath={routes.MY_ORDERS} idKey={'orders'}/>
        <SubItemSelection title={'Watching'} redirectPath={routes.MY_WATCHINGS} idKey={'watchings'}/>
      </Panel>
      <Panel header={<DropdownSelection image={sellingActivities} title = {'Selling Activities'} redirectPath={routes.LISTING_AND_STATUS} idKey={2}/>} key="2" >
        <SubItemSelection title={'Listing And Status'} redirectPath={routes.LISTING_AND_STATUS} idKey={'listing_and_status'}/>
        <SubItemSelection title={'Bids Performance'} redirectPath={routes.BIDS_PERFORMANCE} idKey={'bids_performance'}/>
        <SubItemSelection title={'Customer Orders'} redirectPath={routes.CUSTOMER_ORDERS} idKey={'customer_orders'}/>
      </Panel>
      <Panel header={<DropdownSelection image={myFinance} title = {'My Finance'} redirectPath={routes.PAYMENT_ACTIVITY} idKey={3}/>} key="3" >
        <SubItemSelection title={'Payment Activity'} redirectPath={routes.PAYMENT_ACTIVITY} idKey={'payment_activity'}></SubItemSelection>
        <SubItemSelection title={'Accounts And Cards'} redirectPath={routes.ACCOUNTS_AND_CARDS} idKey={'accounts_and_cards'}/>
      </Panel>
      <Panel header={<DropdownSelection image={myProfileAndAccount} title = {'My Profile And Account'} redirectPath={routes.USER_PROFILE} idKey={4}/>} key="4" >
        <SubItemSelection title={'User Profile'} redirectPath={routes.USER_PROFILE} idKey={'profile'}></SubItemSelection>
        <SubItemSelection title={'Account And Security'} redirectPath={routes.ACCOUNTS_AND_SECURITY} idKey={'security'}></SubItemSelection>
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
          <ItemSelection image={dashboard} title={'Dashboard'} redirectPath={routes.DASHBOARD_PAGE} idKey={'dashboard'}></ItemSelection>
          <ItemSelection image={chat} title={'Chat'} redirectPath={'/user/chat'} idKey={'chat'}></ItemSelection>
          <CollapsibleItems></CollapsibleItems>
         </Col>
       </Row>
    </>
  );
}

export default UserSideBar;