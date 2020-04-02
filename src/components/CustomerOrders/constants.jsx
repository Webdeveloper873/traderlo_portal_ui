import React from 'react';
import { Tag, Avatar } from 'antd';

//components
import TableNameCol from 'common/components/TableNameCol';

//styles
import classes from './styles.module.scss';

//assets
import paymentsImg from 'assets/myOrders/payments.png';

export const columns = [
  {
    title: 'Order Id',
    dataIndex: 'noOfBids',
    key: 'noOfBids',
    render: text => {
      return `#${text}`;
    }
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => {
      return <TableNameCol name={text} type={''} />;
    },
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
    render: (text) => {
      return text ? `$${text}` : '$0';
    }
  },
  {
    title: 'Sold Date',
    dataIndex: 'soldDate',
    key: 'soldDate',
  },
  {
    title: 'Invoice',
    key: 'invoice',
    render: () => (
      <Avatar size={50} src={paymentsImg} shape="square" />
    )
  },
  {
    title: 'Order Status',
    dataIndex: 'orderStatus',
    key: 'orderStatus',
    render: () => {
      return (
        <>
          <Tag color="#ec008c">In Progress</Tag>
          <span className={classes.trackText}>Track</span>
        </>
      );
    }
  },
];

export const sampleData = [
  {
    name: 'test',
  }
]
