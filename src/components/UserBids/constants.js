import React from 'react';
import { Tag } from 'antd';

//components
import TableNameCol from 'common/components/TableNameCol';

export const myBidsCol = [
  {
    title: 'Name',
    dataIndex: 'listingName',
    key: 'listingName',
    render: (text, record) => {
      const { listingCategory } = record || {};
      return <TableNameCol name={text} type={listingCategory} />;
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
        return 'n/a'
      }
    }
  },
];