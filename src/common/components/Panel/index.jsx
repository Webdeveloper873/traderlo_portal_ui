import React from 'react';
import { Row, Col } from 'antd';

//styles
import classes from './styles.module.scss';

const Panel = ({ header, className, children }) => {
  return(
    <div className={className}>
      {header ? <Row className={classes.panelHeader}>{header}</Row> : null}
      {children ? <Row className={classes.panelBody}>{children}</Row> : null}
    </div>
  );
};

export default Panel;