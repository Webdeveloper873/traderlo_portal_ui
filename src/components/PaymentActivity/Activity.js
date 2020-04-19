import React from "react";
import { Card, Button, Tooltip } from "antd";
import PropTypes from "prop-types";

const buttonStyle = {
  backgroundColor: "#00bcd4",
  color: "white",
  textAlign: "center",
  height: "42px"
};

function Activities({ data, onClickWithdraw }) {
  console.log('data: ', data);
  let enableWithdraw = true;

  if(data.length >= 3){
    const activeBal = data[3] || {};
    if(activeBal && activeBal.amount > 0) {
      enableWithdraw = false;
    }
  }

  return (
    <Card bordered={true}>
      <div className="d-flex flex-row justify-content-around activity">
        {data &&
          data.map((value, idx) => {
            return (
              <div className="p-1" key={idx}>
                <h3>${value.amount}</h3>
                <p className="text-muted">{value.label}</p>
              </div>
            );
          })}
      </div>
      <div className="d-flex flex-column align-items-center justify-content-middle p-2">
        <Tooltip title="No active balance">
          <Button className="pl-3 pr-3 pt-2 pb-2" style={buttonStyle} onClick={onClickWithdraw} disabled={enableWithdraw}>
            <b>Withdraw</b>
          </Button>
        </Tooltip>
      </div>
    </Card>
  );
}

Activities.propTypes = {
  data: PropTypes.array.isRequired
};

export default Activities;
