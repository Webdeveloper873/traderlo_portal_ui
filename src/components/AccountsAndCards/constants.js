import React, { useEffect } from 'react';
import { Icon, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';


//actions
import * as payment from 'appRedux/actions/payment';



// export const myCardCol = [
//   {
//     title: 'Card Number',
//     dataIndex: 'cardId',
//     key: 'cardId',
//   },
//   {
//     title: 'Name on Card',
//     dataIndex: 'customer',
//     key: 'customer',
//   },
//   {
//     title: 'Expiry Month',
//     dataIndex: 'expirationMonth',
//     key: 'expirationMonth',
//   },
//   {
//     title: 'Expiry Year',
//     dataIndex: 'expirationYear',
//     key: 'expirationYear',
//   },
//   {
//     title: 'Action',
//     dataIndex: '',
//     key: 'deleteCard',
//     render: (cardData) => <Icon type="delete" style={{fontSize:18, color:'red'}} onClick={() => deleteCard(cardData)}  /> ,
//   },
// ]


// const deleteAccount = (e) => {
//   console.log(e,'deleted account')
// }


// export const myBankAcctCol = [
//   {
//     title: 'Account Holder Name',
//     dataIndex: 'accountHolderName',
//     key: 'accountHolderName',
//   },
//   {
//     title: 'Routing Number',
//     dataIndex: 'routingNumber',
//     key: 'routingNumber',
//   },
//   {
//     title: 'Account Number',
//     dataIndex: 'accountNumber',
//     key: 'accountNumber',
//   },
//   {
//     title: 'Account Type',
//     dataIndex: 'accountHolderType',
//     key: 'accountHolderType',
//   },
//   {
//     title: 'Action',
//     dataIndex: '',
//     key: 'deleteAccount',
//     render: (accountData) => <Icon type="delete" style={{fontSize:18, color:'red'}} onClick={() => deleteAccount(accountData)}  /> ,
//   },
// ]



export const paypalCol = [
  {
    title: 'Paypal Name',
    dataIndex: 'paypalName',
    key: 'paypalName',
  },
  {
    title: 'Paypal ID',
    dataIndex: 'paypalID',
    key: 'paypalID',
  },
  {
    title: 'Action',
    dataIndex: 'action',
    key: 'action',
    render: () => <Button type="primary" shape="circle" icon={<Icon type="delete" style={{fontSize:18, color:'red'}} />} /> ,
  },
]