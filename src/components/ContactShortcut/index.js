import React from "react";

import { FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./styles.scss";

class ContactShortcut extends React.Component {
  render() {
    return (
      <div className="ContactShortcut">
        <div className="ContactShortcut__content">
          <p>A question ? Do not hesitate and contact one of our experts.</p>
          <Link exact to="/contact" key="/contact">
            <FaEnvelope />
            Contact Us
          </Link>
        </div>
      </div>
    );
  }
}

export default ContactShortcut;
