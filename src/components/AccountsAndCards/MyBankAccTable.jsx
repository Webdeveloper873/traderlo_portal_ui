import React, { useEffect, useState } from 'react';
import { Col, Card, Input, Icon, Table, Tabs, Button, Row, Divider, Modal, notification  } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

//components
import Banner from 'common/components/Banner';
import PageWrapper from 'common/components/PageWrapper';
import UserSidebar from 'common/components/UserSidebar';
import Payments from 'common/components/Payments';

// util
import { openNotification } from 'common/utils/helpers';

//constants
import {myCardCol, myBankAcctCol, paypalCol} from './constants';

//styles
import classes from './styles.module.scss';


//actions
import * as payment from 'appRedux/actions/payment';
import { user } from 'appRedux/actions/user';


const MyBankAccTable = ({savedBanks}) => {
    const dispatch = useDispatch();
    const [deleteCardVisible, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [selectedItem, setSelectedItem] = useState({});

    const deleteAccount = (e) => {
        setSelectedItem(e);
        showDeleteModal();
      }
    
      const onClickDelete = () => {
        setLoading(true);
        console.log(selectedItem,'selectedItem');
        
        //dispatch(payment.deleteAccount(selectedItem));  ----> continue on delete API
        setTimeout(() => {
          setLoading(false);
          setShowModal(false);
        }, 1000);
    
        setTimeout(() => {
          openNotification({status:'success', message:'delete success'});
        }, 500);
      }
    
      const showDeleteModal = () => {
        setShowModal(true);
      }
    
      const hideModal = () => {
        setShowModal(false);
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
        <Modal 
          destroyOnClose
          title=" Delete Account"
          visible={deleteCardVisible}
          onCancel = {hideModal}
          onOk={onClickDelete}
          footer={[
            <Button key="back" onClick={hideModal}>
              Back
            </Button>,
            <Button key="submit" type="primary" loading={loading} onClick={onClickDelete}>
              Delete
            </Button>,
          ]}>
            <div className={classes.paymentResult}>
                <Row>
                    <Icon type='delete' style={{color:'red' , marginBottom:15, fontSize:64}}/>    
                </Row>
                <Row>
                    <span style={{fontSize:15}}> {`Delete ${selectedItem.accountNumber} ?`}</span>
                </Row>
            </div>
        </Modal>
      </>
    )
  }

  export default MyBankAccTable;