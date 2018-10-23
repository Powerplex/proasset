import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa";

import "./styles.scss";

import Centered from "components/Centered";

class DesktopMenu extends React.Component {
  static propTypes = {
    menu: PropTypes.array.isRequired
  };
  render() {
    const { menu } = this.props;
    return (
      <div className="DesktopMenu">
        <Centered>
          <div className="DesktopMenu__content">
            {menu.map(({ path, label }, index) => (
              <NavLink
                exact
                to={path}
                key={path}
                activeClassName="active"
                onClick={() => window.scrollTo(0, 0)}
              >
                {index + 1 === menu.length && <FaEnvelope />}

                {label}
              </NavLink>
            ))}
          </div>
        </Centered>
      </div>
    );
  }
}

export default DesktopMenu;
