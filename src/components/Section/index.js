import React, { Component } from "react";
import PropTypes from "prop-types";

import SectionTitle from "components/SectionTitle";
import Centered from "components/Centered";

import "./styles.scss";

class Section extends Component {
  static propTypes = {
    title: PropTypes.string
  };
  render() {
    const { children, title } = this.props;
    return (
      <div className="Section">
        <Centered>
          {title && <SectionTitle text={title} />}
          {children}
        </Centered>
      </div>
    );
  }
}

export default Section;
