import React from "react";
import PropTypes from "prop-types";

import "./styles.scss";

class SectionSeparator extends React.Component {
  static propTypes = {
    transition: PropTypes.object
  };
  render() {
    const { from = "white", reversed = false } = this.props.transition;

    const classes = ["SectionSeparator", `SectionSeparator-theme-${from}`]
      .filter(e => e)
      .join(" ");

    return (
      <div className={classes}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 10"
          preserveAspectRatio="none"
        >
          {reversed ? (
            <polygon points="0,0 100,0 100,10" />
          ) : (
            <polygon points="0,0 100,0 0,10" />
          )}
        </svg>
      </div>
    );
  }
}

export default SectionSeparator;
