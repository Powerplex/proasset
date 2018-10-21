import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import Centered from "components/Centered";

import "./styles.scss";

// import logo from "assets/images/logo.png";

class PageHero extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    img: PropTypes.string
  };
  render() {
    const { title, img } = this.props;
    return (
      <div className={classNames("PageHero", { withImage: !!img })}>
        <Centered>
          {/* <img src={logo} alt="logo" className="PageHero__logo" /> */}
          <h1>{title}</h1>
          {img && <img className="PageHero__img" src={img} alt="skyscrapers" />}
        </Centered>
      </div>
    );
  }
}

export default PageHero;
