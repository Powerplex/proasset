import React from "react";

import { COMPANY_NAME } from "const";

import "./styles.scss";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="Footer">
          <p>©2018 by {COMPANY_NAME}</p>{" "}
        </div>
      </footer>
    );
  }
}

export default Footer;
