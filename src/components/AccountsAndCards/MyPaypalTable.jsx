import React from 'react';
import {  Table, Row, Divider  } from 'antd';

//constants
import { paypalCol } from './constants';

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