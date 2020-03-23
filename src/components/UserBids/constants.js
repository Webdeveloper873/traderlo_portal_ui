import React from 'react';
import { Tag } from 'antd';

//components
import Name from './components/Name';

export const myBidsCol = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text, record, index) => {
      console.log('record', record);
      const { listingName, listingCategory } = record || {};
      return <Name name={listingName} type={listingCategory} />;
    }
  },
  {
    title: 'My Last Bid',
    dataIndex: 'lastBid',
    key: 'lastBid',
    render: (text) => {
      return text ? `$${text}` : '$0';
    }
  },
  {
    title: 'Current Top bid',
    dataIndex: 'topBid',
    key: 'topBid',
    render: (text) => {
      return text ? `$${text}` : '$0';
    }
  },
  {
    title: 'Bid Status',
    dataIndex: 'status',
    key: 'status',
    render: (text) => {
      const color = text === 'WINNING' ? '#28a745' : '#ec008c';
      return <Tag color={color}>{text}</Tag>
    }
  },
  {
    title: 'Buy Now',
    dataIndex: 'buyNowPrice',
    key: 'buyNowPrice',
    render: (text) => {
      return text ? `$${text}` : '$0';
    }
  },
  {
    title: 'Days to End',
    dataIndex: 'daysLeft',
    key: 'daysLeft',
    render: (daysLeft) => {
      const { day, hour, minute, seconds } = daysLeft || {};
      if(day > 0){
        return `${day} days left`;
      }else if(hour>0){
        return `${hour} hrs ${minute} mins`;
      }else if(minute > 0) {
        return `${minute} mins ${seconds} sec`;
      }else if(seconds>0){
        return `${seconds} sec`;
      }else{
        return 'wala'
      }
    }
  },
];

export const bidsTempData = {
  "bids": [
    {
      "buyNowPrice": 0,
      "daysLeft": {
        "day": 20,
        "hour": 0,
        "minute": 0,
        "seconds": 0
      },
      "lastBid": 0,
      "listingCategory": "string",
      "listingName": "string",
      "status": "WINNING",
      "topBid": 0
    },
  ],
  "pageNum": 0,
  "totalPage": 0
};