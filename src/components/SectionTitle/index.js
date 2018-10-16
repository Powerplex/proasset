import React from "react";
import PropTypes from "prop-types";

import "./styles.scss";

class SectionTitle extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired
  };
  render() {
    const { text } = this.props;
    return (
      <div className="SectionTitle">
        <div className="SectionTitleDecoration" />
        <h2>{text}</h2>
      </div>
    );
  }
}

export default SectionTitle;
