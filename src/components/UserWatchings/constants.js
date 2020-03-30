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

export const favoritesCol = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => {
      return <TableNameCol name={text} type={''} />;
    }
  },
  {
    title: 'Asking Price',
    dataIndex: 'price',
    key: 'price',
    render: (text) => {
      return text ? `$${text}` : '$0';
    }
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
    render: () => {
      return (
        <div className={classes.deleteCol}>
          <Icon className={classes.deleteIcon} type="delete" style={{ color: '#ec008c' }} />
          <span className={classes.deleteText}>Delete</span>
        </div>
      );
    }
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
    dataIndex: 'sellerCreatedDate',
    key: 'sellerCreatedDate',
  },
  {
    title: 'Action',
    dataIndex: 'action',
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
  {
    key: 'viewListings',
    render: () => {
      return (<span className={classes.viewListings}>View Listings</span>);
    }
  },
]