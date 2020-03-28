import React from 'react';
import { Row, Col } from 'antd';

//styles
import classes from './styles.module.scss';

const Panel = ({ header, children }) => {
  return(
    <>
      {header ? <Row className={classes.panelHeader}>{header}</Row> : null}
      {children ? <Row className={classes.panelBody}>{children}</Row> : null}
    </>
  );
};

export default Panel;