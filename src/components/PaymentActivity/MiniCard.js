import React from "react";
import PropTypes from "prop-types";

function MiniCard({ amount, label, icon }) {
  return (
    <div className="ant-card ant-card-bordered pt-2 pb-2">
      <div className="d-flex flex-row justify-content-around align-items-center">
        <h5 className="m-0">{`$${amount}`}</h5>
        {icon && (
          <div>
            <img style={{ maxHeight: "42px" }} src={icon} alt={label} />
          </div>
        )}
      </div>
      <div className="d-flex flex-row justify-content-start">
        <p className="m-0 pl-4">{label}</p>
      </div>
    </div>
  );
}

MiniCard.propTypes = {
  amount: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.symbol
};

export default MiniCard;
