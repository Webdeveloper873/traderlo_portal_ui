import React from 'react';
import { Icon } from 'antd';

//components
import TableNameCol from 'common/components/TableNameCol';

//styles
import classes from './styles.module.scss';

export const bidPerfCol = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text, record) => {
      const { listingCategory, listingName } = record || {};
      return <TableNameCol name={listingName || ''} type={listingCategory || ''} />;
    },
  },
  {
    title: 'No Of Bids',
    dataIndex: 'bidCount',
    key: 'bidCount',
  },
  {
    title: 'Current Top bid',
    dataIndex: 'topBid',
    key: 'topBid',
  },
  {
    title: 'Bid End Date',
    dataIndex: 'endDate',
    key: 'endDate',
  },
  {
    title: 'Action',
    dataIndex: 'action',
    key: 'action',
    render: () => {
      return (
        <>
          <Icon type="edit" theme="twoTone" className={classes.actionStyle} />{`  /  `}<Icon type="delete" theme='twoTone' twoToneColor='#eb2f96' className={classes.actionStyle} />
        </>
      );
    }
  },
];

export const sampleData = [
  {
    "bidCount": 0,
    "endDate": "2020-04-01T11:06:21.128Z",
    "listingCategory": "string",
    "listingName": "string",
    "topBid": 0
  }
]
