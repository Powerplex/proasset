import React from "react";

import "./styles.scss";

class Centered extends React.Component {
  render() {
    const { children } = this.props;
    return <div className="Centered">{children}</div>;
  }
}

export default Centered;
