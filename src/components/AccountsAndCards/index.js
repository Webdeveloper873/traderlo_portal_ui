import React, { useEffect, useState } from 'react';
import { Col, Card, Input, Icon, Table, Tabs, Button, Row, Divider, Modal, notification  } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

//components
import Banner from 'common/components/Banner';
import PageWrapper from 'common/components/PageWrapper';
import UserSidebar from 'common/components/UserSidebar';
import Payments from 'common/components/Payments';
import MyCardTable from './MyCardTable';
import MyBankAccTable from './MyBankAccTable';
import MyPaypalTable from './MyPaypalTable';
// util
import { openNotification } from 'common/utils/helpers';

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
    dispatch(payment.clearPaymentSteps());
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