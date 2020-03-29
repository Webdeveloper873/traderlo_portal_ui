import React from "react";
import { Card, Button } from "antd";
import PropTypes from "prop-types";

const buttonStyle = {
  backgroundColor: "#00bcd4",
  color: "white",
  textAlign: "center",
  height: "42px"
};

function Activities({ data }) {
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
        <Button className="pl-3 pr-3 pt-2 pb-2" style={buttonStyle}>
          <b>Withdraw</b>
        </Button>
      </div>
    </Card>
  );
}

Activities.propTypes = {
  data: PropTypes.array.isRequired
};

export default Activities;
