/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Col, Card, Button, Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

//components
import Banner from 'common/components/Banner';
import PageWrapper from 'common/components/PageWrapper';
import UserSidebar from 'common/components/UserSidebar';
import Payments from 'common/components/Payments';
import MyCardTable from './MyCardTable';
import MyBankAccTable from './MyBankAccTable';
import MyPaypalTable from './MyPaypalTable';

//styles
import classes from './styles.module.scss';

// util
import { openNotification } from 'common/utils/helpers';


//actions
import * as payment from 'appRedux/actions/payment';
import { user } from 'appRedux/actions/user';


const AddButton = ({showModal}) => {
  return( <Button type="primary" size ={'large'}  onClick={showModal}>Add Account/Card</Button>);
}


const AccountsAndCards = () => {
  const [buyNowVisible, setShowModal] = useState(false);
  const savedCards = useSelector(({ user }) => user.savedCards);
  const savedBanks = useSelector(({ user }) => user.savedBanks);
  const deleteSuccess = useSelector(({ payment }) => payment.deleteSuccess);
  const dispatch = useDispatch();
  const bannerPath = ['Dashboard', 'My Profile and Account', 'Password and Security'];

  useEffect(()=>{
    dispatch(user.getSavedBanks());
    dispatch(user.getSavedCard());
  },[]);

  useEffect(() =>{
    if (deleteSuccess) {
      setTimeout(() => {
        openNotification({status:'success', message:'delete success'});
      }, 500);
      dispatch(payment.clearPaymentSteps());
      dispatch(user.getSavedBanks());
      dispatch(user.getSavedCard());
    }
  })

  const showModal = () => {
    setShowModal(true);
  }

  const hideModal = () => {
    setShowModal(false);
  }


  return(
    <>
      <Banner text={'Accounts & Cards'} path={bannerPath}/>
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