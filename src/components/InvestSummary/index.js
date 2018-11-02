import React from "react";

import "./styles.scss";

class InvestSummary extends React.Component {
  render() {
    return (
      <div className="InvestSummary">
        <div className="InvestSummary__text">
          <h3>Take only the best of real estate investing</h3>
          <p>
            Pro-Asset Investment’s offers to investors to grow their wealth from
            secured property investments through funding, joint ventures or
            profit shares
          </p>
        </div>
        <div className="InvestSummary__image" />
        <div className="InvestSummary__list">
          <div className="InvestSummary__list-item">
            <img src="" alt="???" />
            <p>Direct loans</p>
          </div>
          <div className="InvestSummary__list-item">
            <img src="" alt="???" />
            <p>Rates between 6% and 15%</p>
          </div>
          <div className="InvestSummary__list-item">
            <img src="" alt="???" />
            <p>No fees and online</p>
          </div>
          <div className="InvestSummary__list-item">
            <img src="" alt="???" />
            <p>No management</p>
          </div>
        </div>
      </div>
    );
  }
}

export default InvestSummary;
