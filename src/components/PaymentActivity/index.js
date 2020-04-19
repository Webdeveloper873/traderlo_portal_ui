import React, { useMemo, useState } from "react";
import { Col, Card, Row, Modal, Input, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";

//styles
import classes from "./styles.module.scss";

// Actions
import { paymentActivity } from "appRedux/actions/myFinance";

//utils
import { useFormInput } from 'common/utils/hooks';

// Components
import Banner from "common/components/Banner";
import UserSideBar from "common/components/UserSidebar";
import PageWrapper from "common/components/PageWrapper";
import Activity from "./Activity";
import Breakdown from "./Breakdown";
import BalanceHistory from "./BalanceHistory";

function PaymentActivity() {
  const redeemAmt = useFormInput();
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const profile = useSelector(({ user }) => user.profile);
  const { id } = profile || {};
  const paymentActivities = useSelector(
    ({ paymentActivity }) => paymentActivity || {}
  );
  const { values, balanceHistory } = paymentActivities;
  const bannerPath = ['Dashboard', 'My Finance', 'Payment Activity'];

  const onToggleModal = () => {
    setShowModal(!showModal);
  }

  const onClickRequest = () => {
    dispatch(paymentActivity.requestRedeem({
      amount: parseInt(redeemAmt.value)
    }));
  }

  useMemo(() => {
    dispatch(paymentActivity.getPaymentActivities(id));
    dispatch(paymentActivity.getBalanceHistory(id));
  }, [id, dispatch]);

  return (
    <React.Fragment>
      <Banner text={"Payment Activity"} path={bannerPath}/>
      <PageWrapper addTopMargin>
        <Col xs={24} sm={24} md={6} lg={6}>
          <UserSideBar />
        </Col>
        <Col xs={24} sm={24} md={18} lg={18} className="pl-4">
          <Modal centered
            title='Request for Redeem'
            visible={showModal}
            onOk={onToggleModal}
            onCancel={onToggleModal}
            footer={null}
          >
            <Row type="flex" justify="center">
              <Col span={15} className={classes.contentCenter}>
                <Input size='large'
                  onChange={redeemAmt.handleInputChange}
                />
                <p>Enter amount to send redeem request to admin</p>
                <Button size='large'
                  type='primary'
                  onClick={onClickRequest}
                >
                  Request
                </Button>
              </Col>
            </Row>
          </Modal>
          <Card
            type="inner"
            title={"Payment Activity"}
            className={classes.tableContainer}
          ></Card>
          <Row gutter={16} className="mt-3">
            <Col xs={24} sm={24} md={12} lg={12}>
              {values && values["paymentActivities"] && (
                <Activity data={values["paymentActivities"]} onClickWithdraw={onToggleModal} />
              )}
            </Col>
            <Col xs={24} sm={24} md={12} lg={12}>
              <div className="ant-card ant-card-bordered">
                {balanceHistory && balanceHistory.length > 0 && (
                  <BalanceHistory data={balanceHistory} />
                )}
              </div>
            </Col>
          </Row>
          {values && values["paymentBreakdown"] && (
            <Breakdown data={values["paymentBreakdown"]} />
          )}
        </Col>
      </PageWrapper>
    </React.Fragment>
  );
}

export default PaymentActivity;
