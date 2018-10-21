import React from "react";
import PropTypes from "prop-types";

import "./styles.scss";

class ImageSeparator extends React.Component {
  static propTypes = {
    src: PropTypes.string.isRequired
  };
  render() {
    const { src } = this.props;
    return (
      <div
        className="ImageSeparator"
        style={{
          backgroundImage: "url(" + src + ")"
        }}
      />
    );
  }
}

export default ImageSeparator;
