import React, { useEffect, useState } from 'react';
import { Col, Card, Input, Icon, Table, Tabs, Button, Row, Divider, Modal, notification  } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

// util
import { openNotification } from 'common/utils/helpers';

//styles
import classes from './styles.module.scss';

//actions
import * as payment from 'appRedux/actions/payment';
import { user } from 'appRedux/actions/user';




const MyCardTable = ({savedCards}) => {
    const dispatch = useDispatch();
    const [deleteCardVisible, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [selectedItem, setSelectedItem] = useState({});

    const deleteCard = (e) => {
      setSelectedItem(e);
      showDeleteModal();
    }

    const onClickDelete = () => {
      setLoading(true);
      console.log(selectedItem,'selectedItem');

      //dispatch(payment.deleteCard(selectedItem));  ----> continue on delete API
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
        <Modal
          destroyOnClose
          title=" Delete Card"
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
                    <span style={{fontSize:15}}> {`Delete ${selectedItem.cardId} ?`}</span>
                </Row>
            </div>
        </Modal>
      </>
    )
  }

  export default MyCardTable;