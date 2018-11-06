import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./styles.scss";

class SectionTitle extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    smallTitle: PropTypes.bool
  };
  render() {
    const { text, smallTitle = false } = this.props;
    return (
      <div
        className={classNames("SectionTitle", {
          smallTitle
        })}
      >
        <div className="SectionTitleDecoration" />
        <h2>{text}</h2>
      </div>
    );
  }
}

export default SectionTitle;
