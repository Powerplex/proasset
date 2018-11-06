import React, { Component } from "react";
import PropTypes from "prop-types";

import SectionTitle from "components/SectionTitle";
import SectionSeparator from "components/SectionSeparator";
import Centered from "components/Centered";

import "./styles.scss";

class Section extends Component {
  static propTypes = {
    title: PropTypes.string,
    centerText: PropTypes.bool,
    theme: PropTypes.string, // gold or beige,
    background: PropTypes.string,
    transition: PropTypes.object,
    className: PropTypes.any,
    smallTitle: PropTypes.bool
  };
  render() {
    const {
      children,
      theme,
      title,
      background,
      transition,
      className,
      smallTitle = false
      // centerText = false
    } = this.props;
    const classes = [
      `Section`,
      `Section-theme-${theme || "white"}`,
      transition ? `Section-hasTransition` : undefined
    ]
      .filter(e => e)
      .join(" ");

    const styles = {};
    if (background) styles.backgroundImage = `url(${background})`;

    return (
      <div className={classes + " " + className} style={styles}>
        {transition && <SectionSeparator transition={transition} />}
        <Centered>
          {title && <SectionTitle text={title} smallTitle={smallTitle} />}
          {children}
        </Centered>
      </div>
    );
  }
}

export default Section;
