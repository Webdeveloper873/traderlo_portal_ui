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

  
  export default MyPaypalTable;