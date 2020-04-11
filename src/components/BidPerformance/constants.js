import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'antd';

//components
import TableNameCol from 'common/components/TableNameCol';

//styles
import classes from './styles.module.scss';

//constants
import { routes } from 'common/constants'

export const bidPerfCol = (onEditListing) => {
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
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      render: (text, record) => {
        const { id } = record || {};
        return (
          <>
            <Icon type="edit" theme="twoTone" className={classes.actionStyle} />
            <Link to={`${routes.SELLING_DOMAINS_PAGE}?edit=true`}>
              <Icon type="edit" theme="twoTone" className={classes.actionStyle}
                onClick={() => {
                  onEditListing(id)
                }}
              />
            </Link>
            {`  /  `}
            <Icon type="delete" theme='twoTone' twoToneColor='#eb2f96' className={classes.actionStyle} />
          </>
        );
      }
    },
  ];
};