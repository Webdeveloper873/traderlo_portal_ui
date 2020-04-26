import React from 'react';
import { Icon } from 'antd';

//components
import TableNameCol from 'common/components/TableNameCol';

//styles
import classes from './styles.module.scss';

export const domWebCol = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => {
      return <TableNameCol name={text} type={''} />;
    }
  },
  {
    title: 'Current Top Bid',
    dataIndex: 'currentTopBid',
    key: 'currentTopBid',
    render: (text) => {
      return text ? `$${text}` : '$0';
    }
  },
  {
    title: 'Asking Price',
    dataIndex: 'askingPrice',
    key: 'askingPrice',
    render: (text) => {
      return text ? `$${text}` : '$0';
    }
  },
  {
    title: 'Bid End Date',
    dataIndex: 'bidEndDate',
    key: 'bidEndDate',
  },
  {
    title: 'Action',
    key: 'action',
    render: () => {
      return (
        <div className={classes.deleteCol}>
          <Icon className={classes.deleteIcon} type="delete" style={{ color: '#ec008c' }} />
          <span className={classes.deleteText}>Delete</span>
        </div>
      );
    }
  },
];

export const domWebData = [
  {
    "askingPrice": 0,
    "bidEndDate": "2020-03-24T14:37:52.940Z",
    "currentTopBid": 0,
    "name": "string",
    "type": 0
  }
]


export const favoritesCol = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Asking Price',
    dataIndex: 'askingPrice',
    key: 'askingPrice',
  },
  {
    title: 'Seller Name',
    dataIndex: 'sellerName',
    key: 'sellerName',
  },
  {
    title: 'Action',
    dataIndex: 'action',
    key: 'action',
  },
]

export const sellersCol = [
  {
    title: 'Seller Name',
    dataIndex: 'sellerName',
    key: 'sellerName',
  },
  {
    title: 'Member Since',
    dataIndex: 'memberSince',
    key: 'memberSince',
  },
  {
    title: 'Seller Rating',
    dataIndex: 'sellerRating',
    key: 'sellerRating',
  },
  {
    title: 'Action',
    dataIndex: 'action',
    key: 'action',
  },
];

export const genderOpt = [
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' },
];