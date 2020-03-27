import React from "react";
import { Col, Card, Row } from "antd";

//styles
import classes from "./styles.module.scss";

// Components
import Banner from "common/components/Banner";
import UserSideBar from "common/components/UserSidebar";
import PageWrapper from "common/components/PageWrapper";
import Activity from "./Activity";
import Breakdown from "./Breakdown";

function PaymentActivity() {
  return (
    <React.Fragment>
      <Banner text={"Payment Activity"} />
      <PageWrapper addTopMargin>
        <Col xs={24} sm={24} md={6} lg={6}>
          <UserSideBar />
        </Col>
        <Col xs={24} sm={24} md={18} lg={18} className="pl-4">
          <Card
            type="inner"
            title={"Payment Activity"}
            className={classes.tableContainer}
          ></Card>
          <Row gutter={16} className="mt-3">
            <Col xs={24} sm={24} md={12} lg={12}>
              <Activity />
            </Col>
            <Col xs={24} sm={24} md={12} lg={12}>
              <Card bordered={true}>Card 1</Card>
            </Col>
          </Row>
          <Breakdown />
        </Col>
      </PageWrapper>
    </React.Fragment>
  );
}

export default PaymentActivity;
