import React, { Component } from "react";
import PropTypes from "prop-types";

import SectionTitle from "components/SectionTitle";

import "./styles.scss";

class Section extends Component {
  static propTypes = {
    title: PropTypes.string
  };
  render() {
    const { children, title } = this.props;
    return (
      <div className="Section">
        {title && <SectionTitle text={title} />}
        {children}
      </div>
    );
  }
}

export default Section;
