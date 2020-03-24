import React, { useEffect, useState } from 'react';
import { Col, Card, Input, Icon, Table, Tabs, Button, Row, Divider, Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

//components
import Banner from 'common/components/Banner';
import PageWrapper from 'common/components/PageWrapper';
import UserSidebar from 'common/components/UserSidebar';
import Payments from 'common/components/Payments';

//constants
import {myCardCol, myBankAcctCol, paypalCol} from './constants';

//styles
import classes from './styles.module.scss';


//actions
import * as payment from 'appRedux/actions/payment';
import { user } from 'appRedux/actions/home';



const AddButton = ({showModal}) => {
  return( <Button type="primary" size ={'large'}  onClick={showModal}>Add Account/Card</Button>);
}

const MyCardTable = ({savedCards}) => {
  const dispatch = useDispatch();
  const [deleteCardVisible, setShowModal] = useState(false);

  const deleteCard = (e) => {
    console.log(e,'tetetetest')
    //dispatch(payment.deleteCard(e));  ----> continue on delete API
    //showDeleteModal();
    
  }

  // const showDeleteModal = () => {
  //   setShowModal(true);
  // }

  // const hideModal = () => {
  //   setShowModal(false);
  // }

  
  const myCardCol = [
  {
    title: 'Card Number',
    dataIndex: 'cardId',
    key: 'cardId',
  },
  {
    title: 'Name on Card',
    dataIndex: 'customer',
    key: 'customer',
  },
  {
    title: 'Expiry Month',
    dataIndex: 'expirationMonth',
    key: 'expirationMonth',
  },
  {
    title: 'Expiry Year',
    dataIndex: 'expirationYear',
    key: 'expirationYear',
  },
  {
    title: 'Action',
    dataIndex: '',
    key: 'deleteCard',
    render: (cardData) => <Icon type="delete" style={{fontSize:18, color:'red'}} onClick={() => deleteCard(cardData)}  /> ,
  },
]


  return(
    <>
      <Row style={{marginTop:25, marginLeft:20, marginBottom:7}}>
        <span style={{color:'#00bcd4', fontSize:15, fontWeight:600}}>My Cards:</span>
      </Row>
      <Divider style={{margin:0}}/>
      <Row>
        <Table columns={myCardCol} dataSource={savedCards} />
      </Row>
      {/* <Modal destroyOnClose
        visible={deleteCardVisible}
        onCancel = {hideModal}
        footer={null}>
        <Card> delete card</Card>
      </Modal> */}
    </>
  )
}

const MyBankAccTable = ({savedBanks}) => {

  const deleteAccount = (e) => {
    console.log(e,'deleted account')
    //dispatch(payment.deleteAccount(e));  ----> continue on delete API
  }
  
  
  const myBankAcctCol = [
    {
      title: 'Account Holder Name',
      dataIndex: 'accountHolderName',
      key: 'accountHolderName',
    },
    {
      title: 'Routing Number',
      dataIndex: 'routingNumber',
      key: 'routingNumber',
    },
    {
      title: 'Account Number',
      dataIndex: 'accountNumber',
      key: 'accountNumber',
    },
    {
      title: 'Account Type',
      dataIndex: 'accountHolderType',
      key: 'accountHolderType',
    },
    {
      title: 'Action',
      dataIndex: '',
      key: 'deleteAccount',
      render: (accountData) => <Icon type="delete" style={{fontSize:18, color:'red'}} onClick={() => deleteAccount(accountData)}  /> ,
    },
  ]

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
  
  const [buyNowVisible, setShowModal] = useState(false);
  const savedCards = useSelector(({ user }) => user.savedCards);
  const savedBanks = useSelector(({ user }) => user.savedBanks);

  console.log(savedBanks,'savedBanks');
  console.log(savedCards,'savedCards');
  useEffect(()=>{
    dispatch(user.getSavedBanks());
    dispatch(user.getSavedCard());
  }, []);

  const showModal = () => {
    setShowModal(true);
  }

  const hideModal = () => {
    setShowModal(false);
  }


  return(
    <>
      <Banner text={'Accounts & Cards'} />
      <PageWrapper addTopMargin>
        <Col xs={24} sm={24} md={6} lg={6} >
          <UserSidebar />
        </Col>
        <Col xs={24} sm={24} md={18} lg={18} className={classes.customPadding}>
          <Card type="inner" title={'Accounts and Cards'} extra={<AddButton showModal={showModal} />} className={classes.tableContainer}>
            <MyCardTable savedCards={savedCards}/>
            <MyBankAccTable savedBanks ={savedBanks}/>
            <MyPaypalTable />
          </Card>
        </Col>
      </PageWrapper>
      <Modal destroyOnClose
        visible={buyNowVisible}
        onCancel = {hideModal}
        footer={null}>
        <Payments isAddOnly={true}/>
      </Modal>
    </>
  );
}

export default AccountsAndCards;