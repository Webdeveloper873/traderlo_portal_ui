import React from "react";
import { Card, Button } from "antd";

const buttonStyle = {
  backgroundColor: "#00bcd4",
  color: "white",
  textAlign: "center",
  height: "42px"
};

function Activities() {
  return (
    <Card bordered={true}>
      <div className="d-flex flex-row justify-content-around activity">
        <div className="p-1">
          <h3>$5000</h3>
          <p className="text-muted">Life Time Earnings</p>
        </div>
        <div className="p-1">
          <h3>$4000</h3>
          <p className="text-muted">Life Time Withdrawls</p>
        </div>
        <div className="p-1">
          <h3>$1000</h3>
          <p className="text-muted">Active Balance</p>
        </div>
      </div>
      <div className="d-flex flex-column align-items-center justify-content-middle p-2">
        <Button className="pl-3 pr-3 pt-2 pb-2" style={buttonStyle}>
          <b>Withdraw</b>
        </Button>
      </div>
    </Card>
  );
}

export default Activities;
