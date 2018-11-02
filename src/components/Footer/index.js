import React from "react";

import { COMPANY_NAME } from "const";
import Centered from "components/Centered";

import "./styles.scss";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <Centered>
          {" "}
          <div className="Footer">
            <p>©2018 by {COMPANY_NAME}</p>
            <p>
              Pro-AssetInvestment’s is registered as a UK Private Limited
              company under company number 11563588 Warning : Property can be a
              risky method of investment and requires your savings to be
              immobilised. The information provided throughout our website,
              services or products is not and cannot ever be intended either as
              tax, financial or investment advice and any general information is
              provided to help you make your own informed decisions. Customers
              are advised to obtain their own independant appropriate tax,
              financial or investment advice where necessary.The information is
              general information about property in the UK only. All comments
              are of a general nature only. Any financial figures referred to on
              this website are indicative only and should never be considered as
              any promise of actual or future performance.
            </p>
          </div>
        </Centered>
      </footer>
    );
  }
}

export default Footer;
