import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import { scaleDown as Menu } from "react-burger-menu";

import Home from "./containers/Home";
import Team from "./containers/Team";
import Faq from "./containers/Faq";
import Contact from "./containers/Contact";

import "./styles/reset.scss";
import "./styles/mobile-menu.scss";
import "./styles/layout.scss";

class App extends Component {
  menu = [
    {
      path: "/",
      label: "Home",
      component: Home
    },
    {
      path: "/team",
      label: "Our team",
      component: Team
    },
    {
      path: "/faq",
      label: "FAQ",
      component: Faq
    },
    {
      path: "/contact",
      label: "Contact Us",
      component: Contact
    }
  ];

  state = {
    isMenuOpen: false
  };

  closeMenu = e => {
    this.setState({ isMenuOpen: false });
  };

  render() {
    const { menu } = this;
    const { isMenuOpen } = this.state;

    return (
      <div className="App" id="App">
        <header className="App-header">
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat"
            rel="stylesheet"
          />
        </header>
        <Menu
          right
          scaleDown
          pageWrapId={"main-container"}
          outerContainerId={"App"}
          isOpen={isMenuOpen}
          onStateChange={({ isOpen }) => {
            this.setState({ isMenuOpen: isOpen });
          }}
        >
          {menu.map(({ path, label }) => (
            <Link to={path} key={path} onClick={this.closeMenu}>
              {label}
            </Link>
          ))}
        </Menu>
        <div id="main-container">
          {menu.map(({ path, component }) => (
            <Route exact path={path} component={component} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
