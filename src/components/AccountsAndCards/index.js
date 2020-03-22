import React, { useEffect } from 'react';
import { Col, Card, Input, Icon, Table, Tabs, Button, Row, Divider } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

//components
import Banner from 'common/components/Banner';
import PageWrapper from 'common/components/PageWrapper';
import UserSidebar from 'common/components/UserSidebar';

//constants
import {myCardCol, myBankAcctCol, paypalCol} from './constants';

//styles
import classes from './styles.module.scss';


//actions
import * as payment from 'appRedux/actions/payment';
import { user } from 'appRedux/actions/home';



const AddButton = () => {
  return( <Button type="primary" size ={'large'}>Add Account/Card</Button>);
}

const MyCardTable = ({savedCards}) => {
  return(
    <>
      <Row style={{marginTop:25, marginLeft:20, marginBottom:7}}>
        <span style={{color:'#00bcd4', fontSize:15, fontWeight:600}}>My Cards:</span>
      </Row>
      <Divider style={{margin:0}}/>
      <Row>
        <Table columns={myCardCol} dataSource={savedCards} />
      </Row>
    </>
  )
}

const MyBankAccTable = ({savedBanks}) => {
  return(
    <>
      <Row style={{marginTop:25, marginLeft:20, marginBottom:7}}>
        <span style={{color:'#00bcd4', fontSize:15, fontWeight:600}}>My Bank Accounts:</span>
      </Row>
      <Divider style={{margin:0}}/>
      <Row>
        <Table columns={myBankAcctCol} dataSource={savedBanks}/>
      </Row>
    </>
  )
}


const MyPaypalTable = () => {
  return(
    <>
      <Row style={{marginTop:25, marginLeft:20, marginBottom:7}}>
        <span style={{color:'#00bcd4', fontSize:15, fontWeight:600}}>My Paypal:</span>
      </Row>
      <Divider style={{margin:0}}/>
      <Row>
        <Table columns={paypalCol} />
      </Row>
    </>
  )
}


const AccountsAndCards = () => {
  const dispatch = useDispatch();
  const savedCards = useSelector(({ user }) => user.savedCards);
  const savedBanks = useSelector(({ user }) => user.savedBanks);

  console.log(savedBanks,'savedBanks');
  console.log(savedCards,'savedCards');
  useEffect(()=>{
    dispatch(user.getSavedBanks());
    dispatch(user.getSavedCard());
  }, []);


  return(
    <>
      <Banner text={'Accounts & Cards'} />
      <PageWrapper addTopMargin>
        <Col xs={24} sm={24} md={6} lg={6} >
          <UserSidebar />
        </Col>
        <Col xs={24} sm={24} md={18} lg={18} className={classes.customPadding}>
          <Card type="inner" title={'Accounts and Cards'} extra={<AddButton />} className={classes.tableContainer}>
            <MyCardTable savedCards={savedCards}/>
            <MyBankAccTable savedBanks ={savedBanks}/>
            <MyPaypalTable />
          </Card>
        </Col>
      </PageWrapper>
    </>
  );
}

export default AccountsAndCards;