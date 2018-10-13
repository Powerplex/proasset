import React from "react";
import PropTypes from "prop-types";

import "./styles.scss";
import skyscrapers from "assets/images/bg-skyscrapers2.jpg";

class PageHero extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired
  };
  render() {
    const { title } = this.props;
    return (
      <div className="PageHero">
        <h1>{title}</h1>
        <img className="PageHero__img" src={skyscrapers} alt="skyscrapers" />
      </div>
    );
  }
}

export default PageHero;
