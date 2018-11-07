import React from "react";

import "./styles.scss";

import imgPercent from "assets/images/main-percent.png";
import imgNofees from "assets/images/main-nofees.png";
import imgManage from "assets/images/main-nomanage.png";
import imgDirect from "assets/images/main-direct.png";

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
            <img src={imgDirect} alt="Direct loans" />
            <p>Direct loans</p>
          </div>
          <div className="InvestSummary__list-item">
            <img src={imgPercent} alt="Rates between 6% and 15%" />
            <p>Rates between 6% and 15%</p>
          </div>
          <div className="InvestSummary__list-item">
            <img src={imgNofees} alt="No fees and online" />
            <p>No fees and online</p>
          </div>
          <div className="InvestSummary__list-item">
            <img src={imgManage} alt="No management" />
            <p>No management</p>
          </div>
        </div>
      </div>
    );
  }
}

export default InvestSummary;
