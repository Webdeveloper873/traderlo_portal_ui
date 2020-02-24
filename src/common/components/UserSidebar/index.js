import React from 'react';
import {Col, Row, Card, Avatar, Collapse} from 'antd';

//components
import PageWrapper from 'common/components/PageWrapper';
import Banner from 'common/components/Banner';
import MyOrderList from 'common/components/MyOrders';

//styles
import classes from './styles.module.scss';

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

function callback(key) {
  console.log(key);
}


const CardsDesc = () => (
  <>
    <div>{'Designer | Developer'}</div>
    <div>{'category and other stuff'}</div>
  </>
)

const UsersCard = () => {
  return(
    <Card className={classes.usersCard}>
      <Row>
        <Col span={8}>
          <Avatar size={60} src={UserImgTemp} className={classes.avatarStyle}/> 
        </Col>
        <Col span={16}>
          <Meta title="User Name" description={<CardsDesc />} />
        </Col>
      </Row>
    </Card>
  )
}


const ItemSelection = ({image, title}) => {
  return (
    <div className={classes.itemSelection} onClick={test}>
      <a>
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



const SubItemSelection = ({title}) => {
  return(
    <a>
      <div className={classes.subItemSelection} onClick={test}>
        <span className={classes.fontDecor}>{title}</span>
      </div>
    </a>
  )
}

const test = () => {
  console.log('clicked')
}

const CollapsibleItems = () => {
  return ( 
    <Collapse defaultActiveKey={[]} onChange={callback} expandIconPosition={'right'} style={customPanelStyle}>
      <Panel header={<DropdownSelection image={buyingActivities} title = {'Buying Activities'}></DropdownSelection>} key="1" style={{padding:0}}>
        <SubItemSelection title={'Bid Related'}></SubItemSelection>
        <SubItemSelection title={'Orders'} ></SubItemSelection>
        <SubItemSelection title={'Watching'} ></SubItemSelection>
      </Panel>
      <Panel header={<DropdownSelection image={sellingActivities} title = {'Selling Activities'}></DropdownSelection>} key="2" >
        <SubItemSelection title={'Listing And Status'} ></SubItemSelection>
        <SubItemSelection title={'Bids'} ></SubItemSelection>
        <SubItemSelection title={'Customer Orders'} ></SubItemSelection>
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
      {/* <Banner text={'Chat'} />
      <PageWrapper className={classes.pageWrapper}> */}
       <Row>
         <Col span={6} style={{paddingLeft:20}}>
          <UsersCard></UsersCard>
          <ItemSelection image={dashboard} title={'Dashboard'}></ItemSelection>
          <ItemSelection image={chat} title={'Chat'}></ItemSelection>
          <CollapsibleItems></CollapsibleItems>
         </Col>
          <Col span={18}>
            <MyOrderList></MyOrderList>
          </Col>
       </Row>
      {/* </PageWrapper> */}
    </>
  );
}

export default UserSideBar;