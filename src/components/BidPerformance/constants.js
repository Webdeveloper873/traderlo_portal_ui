import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'antd';
import moment from 'moment';

//components
import TableNameCol from 'common/components/TableNameCol';

//styles
import classes from './styles.module.scss';

//constants
import { routes } from 'common/constants'

export const bidPerfCol = (onEditListing, onDeleteListing) => {
  return [
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
      render: (text) => moment(text).format('LL')
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      render: (text, record) => {
        const { id } = record || {};
        return (
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
  ];
};