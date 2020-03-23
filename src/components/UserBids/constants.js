import React from 'react';
import Name from './components/Name';

export const myBidsCol = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text, record, index) => {
      return <Name name={'abc.com'} type='domain'/>;
    }
  },
  {
    title: 'My Last Bid',
    dataIndex: 'lastBid',
    key: 'lastBid',
  },
  {
    title: 'Current Top bid',
    dataIndex: 'topBid',
    key: 'topBid',
  },
  {
    title: 'Bid Status',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'Buy Now',
    dataIndex: 'buyNowPrice',
    key: 'buyNowPrice',
  },
  {
    title: 'Days to End',
    dataIndex: 'endDate',
    key: 'endDate',
  },
];

export const bidsTempData = {
  "bids": [
    {
      "buyNowPrice": 0,
      "daysLeft": {
        "day": 0,
        "hour": 0,
        "minute": 0,
        "seconds": 0
      },
      "lastBid": 0,
      "listingCategory": "string",
      "listingName": "string",
      "status": "WINNING",
      "topBid": 0
    }
  ],
  "pageNum": 0,
  "totalPage": 0
};