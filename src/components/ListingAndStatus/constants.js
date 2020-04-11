import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { Tag, Icon } from 'antd';

//components
import TableNameCol from 'common/components/TableNameCol';

//styles
import classes from './styles.module.scss';

//constants
import { routes } from 'common/constants'

export const listAndStatusCol = (onEditListing, onDeleteListing) => {
  return [
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
      render: (text, record) => {
        const { id } = record || {};
        return(
          <>
            <Link to={`${routes.SELLING_DOMAINS_PAGE}?edit=true`}>
              <Icon type="edit" theme="twoTone" className={classes.actionStyle}
                onClick={() => {
                  onEditListing(id)
                }}
              />
            </Link>
            {`  /  `}
            <Icon type="delete" theme='twoTone' 
              twoToneColor='#eb2f96' 
              className={classes.actionStyle}
              onClick={() => {
                onDeleteListing(id);
              }}
            />
          </>
        );
      }
    },
]
};