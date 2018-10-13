import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./styles.scss";

class PageHero extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    img: PropTypes.string
  };
  render() {
    const { title, img } = this.props;
    return (
      <div className={classNames("PageHero", { withImage: !!img })}>
        <h1>{title}</h1>
        {img && <img className="PageHero__img" src={img} alt="skyscrapers" />}
      </div>
    );
  }
}

export default PageHero;
