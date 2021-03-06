import React from "react";

import { COMPANY_NAME } from "const";

import "./styles.scss";

const steps = [
  {
    prefix: "Search",
    text: `${COMPANY_NAME} focuses on the potential of each property by starting with the search for the property. Thanks to the top UK property sourcing agent, ${COMPANY_NAME} has access to exclusive deals. Properties off market can also be negociated at the best price.`
  },
  {
    prefix: "Analysis",
    text: `Before each investment, the property is analyzed exhaustively. More than 40 parameters are taken into account in the whole analysis of the property. The local real estate market, supply and demand, the overall investment costs are part of the controlled parameters.`
  },
  {
    prefix: "Purchase",
    text: `Once the potential of the property is proven and quoted, the property is negotiated for the purchase. The proximity between real estate agents and owner-sellers allows to have the best investment possible. Mortgage and insurance brokers allow us to get bank loans at very low rates. `
  },
  {
    prefix: "Renovation",
    text: `The property is then refurbished according to ${COMPANY_NAME} quality standards. ${COMPANY_NAME} works with recommanded and experienced builders.`
  }
];

class InvestmentScheme extends React.Component {
  renderStep({ text, prefix }, index) {
    return (
      <div className="InvestmentScheme__step">
        <h3>
          Step {index + 1}: {prefix}
        </h3>
        <p>{text}</p>
      </div>
    );
  }

  render() {
    return <div className="InvestmentScheme">{steps.map(this.renderStep)}</div>;
  }
}

export default InvestmentScheme;
