import React from "react";
import { Row, Col } from "antd";

// ICONS
import TotalEarnedIcon from "assets/paymentActivity/d4.png";
import PendingClearanceIcon from "assets/paymentActivity/d5.png";
import NetAccountBalanceIcon from "assets/paymentActivity/d6.png";

// Components
import MiniCard from "./MiniCard";

function Breakdown() {
  return (
    <React.Fragment>
      <p className="h6 mt-2">Active Balance Breakdown:</p>

      <Row gutter={16}>
        <Col xs={12} md={6} sm={12} lg={6}>
          <MiniCard icon={TotalEarnedIcon} label="Total Earned" amount={4000} />
        </Col>
        <Col xs={12} md={6} sm={12} lg={6}>
          <MiniCard
            icon={PendingClearanceIcon}
            label="Pending Clearance"
            amount={2000}
          />
        </Col>
        <Col xs={12} md={6} sm={12} lg={6}>
          <MiniCard
            icon={NetAccountBalanceIcon}
            label="Net Account Balance"
            amount={2000}
          />
        </Col>
        <Col xs={12} md={6} sm={12} lg={6}>
          <MiniCard
            icon={TotalEarnedIcon}
            label="Available for Withdrawl"
            amount={2000}
          />
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default Breakdown;
