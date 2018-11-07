import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import Centered from "components/Centered";

import "./styles.scss";

// import logo from "assets/images/logo.png";

class PageHero extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    secondTitle: PropTypes.string,
    subtitle: PropTypes.string,
    img: PropTypes.string,
    withGradient: PropTypes.bool,
    high: PropTypes.bool
  };
  render() {
    const {
      title,
      secondTitle,
      subtitle,
      withGradient,
      img,
      high
    } = this.props;
    return (
      <div
        className={classNames("PageHero", {
          withImage: !!img,
          withGradient,
          high
        })}
      >
        <Centered>
          {/* <img src={logo} alt="logo" className="PageHero__logo" /> */}
          <h1 className="PageHero__title">{title}</h1>
          {secondTitle && (
            <h2 className="PageHero__secondtitle">{secondTitle}</h2>
          )}
          {subtitle && <h3 className="PageHero__subtitle">{subtitle}</h3>}
          {img && <img className="PageHero__img" src={img} alt="skyscrapers" />}
        </Centered>
      </div>
    );
  }
}

export default PageHero;
