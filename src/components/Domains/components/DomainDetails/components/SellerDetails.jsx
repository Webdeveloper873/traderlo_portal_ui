import React from 'react';
import { List, Avatar } from 'antd';

//styles
import classes from '../styles.module.scss';

const Description = () => {
  return(
    <>
      <span>Status:</span>
      <div className={classes.online}></div>
      <span>Online</span>
      <div>Member since: Jun 27, 2019</div>
    </>
  );
}

const SellerDetails = () => {
  return(
    <List.Item key={1}>
      <List.Item.Meta
        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
        title={<a href="https://ant.design">{'item.name.last'}</a>}
        description={<Description />}
      />
    </List.Item>
  );
}

export default SellerDetails;