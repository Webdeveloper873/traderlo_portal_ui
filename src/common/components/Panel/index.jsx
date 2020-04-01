import React from 'react';
import { Row, Col } from 'antd';

//styles
import classes from './styles.module.scss';

const Panel = ({ header, className, headerRight, children }) => {
  return(
    <div className={className}>
      {header ? <Row className={classes.panelHeader}>
        <Col span={16}>{header}</Col>
        {headerRight ? <Col span={8} className={classes.headerRight}>{headerRight}</Col> : null}
      </Row> : null}
      {children ? <Row className={classes.panelBody}>{children}</Row> : null}
    </div>
  );
};

export default Panel;