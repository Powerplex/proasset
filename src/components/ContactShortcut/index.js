import React from "react";

import Centered from "components/Centered";
import { FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./styles.scss";

class ContactShortcut extends React.Component {
  render() {
    return (
      <div className="ContactShortcut">
        <Centered>
          <div className="ContactShortcut__content">
            <p>
              A project ? A question ? Do not hesitate and contact one of our
              experts.
            </p>
            <Link exact to="/contact" key="/contact">
              <FaEnvelope />
              Contact Us
            </Link>
          </div>
        </Centered>
      </div>
    );
  }
}

export default ContactShortcut;
