import React from "react";
import PropTypes from "prop-types";

import "./styles.scss";

class CompanyValue extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.arrayOf(PropTypes.string).isRequired,
    img: PropTypes.string
  };
  render() {
    const { title, text, img } = this.props;
    return (
      <div className="CompanyValue">
        <h3 className="CompanyValue__title">{title}</h3>
        <div className="CompanyValue__content">
          <div className="CompanyValue__content__text">
            {text.map(paragraph => (
              <p>{paragraph}</p>
            ))}
          </div>
          {img !== undefined && <img src={img} alt={title} />}
        </div>
      </div>
    );
  }
}

export default CompanyValue;
