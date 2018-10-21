import React from "react";
import PropTypes from "prop-types";
import { scaleDown as MobileMenu } from "react-burger-menu";
import { NavLink } from "react-router-dom";

import "./styles.scss";

class BurgerMenu extends React.Component {
  static propTypes = {
    menu: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    isMenuOpen: PropTypes.bool
  };
  render() {
    const { isMenuOpen, menu, onChange, onClose } = this.props;
    return (
      <MobileMenu
        right
        scaleDown
        pageWrapId={"main-container"}
        outerContainerId={"outer-container"}
        isOpen={isMenuOpen}
        onStateChange={onChange}
      >
        <div className="menu-title">Pro Asset Investments</div>
        {menu.map(({ path, label }) => (
          <NavLink
            exact
            to={path}
            key={path}
            onClick={onClose}
            activeClassName="active"
          >
            {label}
          </NavLink>
        ))}
      </MobileMenu>
    );
  }
}

export default BurgerMenu;
