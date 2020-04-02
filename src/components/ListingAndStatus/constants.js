import React from 'react';
import moment from 'moment';
import { Tag, Icon } from 'antd';

//components
import TableNameCol from 'common/components/TableNameCol';

//styles
import classes from './styles.module.scss';

export const listAndStatusCol = [
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
    title: 'Listed Date',
    dataIndex: 'listedDate',
    key: 'listedDate',
    render: (text) => moment(text).format('LL')
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (text) => {
      const color = text === 'APPROVED' ? '#28a745' : '#ec008c';
      return <Tag color={color}>{text}</Tag>
    }
  },
  {
    title: 'Action',
    dataIndex: 'action',
    key: 'action',
    render: () => {
      return(
        <>
          <Icon type="edit" theme="twoTone" className={classes.actionStyle}/>{`  /  `}<Icon type="delete" theme='twoTone' twoToneColor='#eb2f96' className={classes.actionStyle}/>
        </>
      );
    }
  },
];