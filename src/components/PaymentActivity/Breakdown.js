import React from "react";
import { Row, Col } from "antd";
import PropTypes from "prop-types";

// ICONS
import TotalEarnedIcon from "assets/paymentActivity/TotalEarned.png";
import PendingClearanceIcon from "assets/paymentActivity/PendingClearance.png";
import NetAccountBalanceIcon from "assets/paymentActivity/NetBalanceAccount.png";
import AvailableForWithdrawlIcon from "assets/paymentActivity/AvailableForWithdrawl.png";

// Components
import MiniCard from "./MiniCard";

function Breakdown({ data }) {
  const getIcon = label => {
    switch (label) {
      case "Total Earned":
        return TotalEarnedIcon;
      case "Pending Clearance":
        return PendingClearanceIcon;
      case "Net Account Balance":
        return NetAccountBalanceIcon;
      case "Available for withdrawls":
        return AvailableForWithdrawlIcon;
      default:
        return TotalEarnedIcon;
    }
  };

  return (
    <React.Fragment>
      <p className="h6 mt-2">Active Balance Breakdown:</p>

      <Row gutter={16}>
        {data &&
          data.length > 0 &&
          data.map((value, idx) => {
            return (
              <Col xs={12} md={6} sm={12} lg={6} key={idx}>
                <MiniCard
                  icon={getIcon(value.label)}
                  label={value.label}
                  amount={value.amount}
                />
              </Col>
            );
          })}
      </Row>
    </React.Fragment>
  );
}

Breakdown.propTypes = {
  data: PropTypes.array.isRequired
};

export default Breakdown;
