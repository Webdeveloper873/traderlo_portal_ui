import React from 'react';
import { Tag, Avatar } from 'antd';

//components
import TableNameCol from 'common/components/TableNameCol';

//assets
import paymentsImg from 'assets/myOrders/payments.png';

//styles
import classes from './styles.module.scss';

export const myBidsCol = [
  {
    title: 'Order Id',
    dataIndex: 'orderId',
    key: 'orderId',
    render: (text) => {
      return text ? `#${text}` : '';
    },
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
    title: 'Purchase Price',
    dataIndex: 'purchasePrice',
    key: 'purchasePrice',
    render: (text) => {
      return text ? `$${text}` : '';
    },
  },
  {
    title: 'Ordered On',
    dataIndex: 'orderedOn',
    key: 'orderedOn',
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

export const tempData = [
  {
    orderId: '12345',
    name: 'abc.com',
    purchasePrice: '123',
    orderedOn: 'August 18, 2019',
    orderStatus: 'In Progress',
  }
];