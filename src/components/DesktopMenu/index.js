import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import "./styles.scss";

import Centered from "components/Centered";

class DesktopMenu extends React.Component {
  static propTypes = {
    menu: PropTypes.object.isRequired
  };
  render() {
    const { menu } = this.props;
    return (
      <div className="DesktopMenu">
        <Centered>
          <div className="DesktopMenu__content">
            {menu.map(({ path, label }) => (
              <NavLink
                exact
                to={path}
                key={path}
                // onClick={onClose}
                activeClassName="active"
              >
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
