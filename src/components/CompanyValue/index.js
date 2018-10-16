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
