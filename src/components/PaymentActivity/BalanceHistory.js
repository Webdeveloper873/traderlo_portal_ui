import React, { useEffect } from "react";
import { Line } from "@antv/g2plot";
import PropTypes from "prop-types";
import moment from "moment";

function BalanceHistory({ data }) {
  const renderChart = () => {
    const balanceHistoryChart = new Line(
      document.getElementById("balaceHistoryCanvas"),
      {
        data,
        xField: "createdDate",
        yField: "amount",
        width: 300,
        height: 193,
        forceFit: true,
        meta: {
          createdDate: {
            formatter: v => moment(v).format("DD")
          }
        },
        title: {
          visible: true,
          text: "Balance History"
        },
        description: {
          visible: true,
          text: "Last 10 Days"
        }
      }
    );

    balanceHistoryChart.render();
  };
  useEffect(() => {
    renderChart();
  }, []);
  return <div id="balaceHistoryCanvas"></div>;
}

BalanceHistory.propTypes = {
  data: PropTypes.array.isRequired
};
export default BalanceHistory;
