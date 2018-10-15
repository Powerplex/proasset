import React from "react";
import PropTypes from "prop-types";

import "./styles.scss";

class CatchPhrase extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    background: PropTypes.string
  };
  render() {
    const { text } = this.props;
    return (
      <div className="CatchPhrase">
        <p className="CatchPhrase__text">"{text}"</p>
      </div>
    );
  }
}

export default CatchPhrase;
