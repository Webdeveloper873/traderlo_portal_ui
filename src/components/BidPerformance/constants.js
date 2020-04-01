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
    render: (text) => {
      return <TableNameCol name={text} type={''} />;
    },
  },
  {
    title: 'No Of Bids',
    dataIndex: 'noOfBids',
    key: 'noOfBids',
  },
  {
    title: 'Current Top bid',
    dataIndex: 'currTopBid',
    key: 'currTopBid',
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
    name: 'test',
  }
]
