import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./styles.scss";

class CompanyValue extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.arrayOf(PropTypes.string).isRequired,
    img: PropTypes.string,
    reverse: PropTypes.bool
  };
  render() {
    const { title, text, img, reverse } = this.props;
    return (
      <div
        className={classNames("CompanyValue", {
          reverse
        })}
      >
        <div className="CompanyValue__content">
          <h3 className="CompanyValue__title">{title}</h3>
          <div className="CompanyValue__content__text">
            {text.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
        {img !== undefined && <img src={img} alt={title} />}
      </div>
    );
  }
}

export default CompanyValue;
