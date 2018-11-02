import React from "react";
import userSVG from "assets/svg/user.svg";
import profitSVG from "assets/svg/bars.svg";

import "./styles.scss";

const steps = [
  "On the one hand, PAI offers individuals to finance real estate properties",
  "On the other, individuals are looking for higher returns for their savings",
  "PAI allows to investors to discover these opportunities and offersto participate in the financing of the property",
  "An investment proposal is presented (nature, amount of investment, guarantees and insurance)",
  "As a future investor, you decide to continue the adventure with us",
  "You complete and sign a personnalized loan agreement",
  "You pay the funds and become an investor",
  "Property is acquired and renovations begin",
  "12 to 36 months later, you are refunded and you receive your interest."
];

class InvestSteps extends React.Component {
  renderStep(step, index) {
    const direction = index % 2 === 0 ? "left" : "right";

    const classes = ["InvestSteps__step", `InvestSteps__step-${direction}`]
      .filter(e => e)
      .join(" ");

    return (
      <div className={classes} key={index}>
        <p>{step}</p>

        <div className="InvestSteps__step-index">
          <div className="InvestSteps__step-losange" />
          <p>{index + 1}</p>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="InvestSteps">
        <img src={userSVG} alt="you" />
        {steps.map(this.renderStep)}
        <div className="ProfitStep">
          <img src={profitSVG} alt="profit" />
          <p>Profit</p>
        </div>
      </div>
    );
  }
}

export default InvestSteps;
