import React from 'react';
import { Icon } from 'antd';

import classes from '../styles.module.scss';

const tempData = [
  'xzjhcjxc.com',
  'asdasd.com',
  'Demo.com',
  'sample.com',
  'asdasd.com',
];

const ListItem = ({text}) => {
  return(
    <div className={classes.similarList}>
      <Icon type="caret-right" className={classes.caretIcon}/>
      <span>{text}</span>
    </div>
  )
}

const SimilarPost = () => {
  return tempData.map(text => <ListItem text={text} />);
}

export default SimilarPost;