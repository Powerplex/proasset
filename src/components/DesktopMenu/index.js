import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa";
import classNames from "classnames";

import logo from "assets/logo/logo-white-pure.png";
import { COMPANY_NAME } from "const";

import "./styles.scss";

import Centered from "components/Centered";

class DesktopMenu extends React.Component {
  static propTypes = {
    menu: PropTypes.array.isRequired
  };

  state = {
    revealed: false
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ revealed: true });
    }, 200);
  }

  render() {
    const { menu } = this.props;
    const { revealed } = this.state;
    return (
      <div
        className={classNames("DesktopMenu", {
          revealed
        })}
      >
        <Centered>
          <div className="DesktopMenu__content">
            <NavLink
              className="logo-desktop"
              exact
              to={"/"}
              activeClassName="active"
              onClick={() => window.scrollTo(0, 0)}
            >
              <img src={logo} alt="logo desktop" />
              {/* <p>{COMPANY_NAME}</p> */}
            </NavLink>
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
