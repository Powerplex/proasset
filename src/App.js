import React, { Component } from "react";
import { Route } from "react-router-dom";
// import { scaleDown as BurgerMenu } from "react-burger-menu";

import Home from "containers/Home";
import Team from "containers/Team";
import Faq from "containers/Faq";
import Contact from "containers/Contact";

import DesktopMenu from "components/DesktopMenu";
import BurgerMenu from "components/BurgerMenu";
import Footer from "components/Footer";

import "./styles/reset.scss";
import "./styles/layout.scss";

class App extends Component {
  menu = [
    {
      path: "/",
      label: "About Us",
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

  closeBurgerMenu = () => {
    this.setState({ isMenuOpen: false });
  };

  handleBurgerMenu = ({ isOpen }) => {
    this.setState({ isMenuOpen: isOpen });
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
        <DesktopMenu menu={menu} />
        <BurgerMenu
          menu={menu}
          onChange={this.handleBurgerMenu}
          onClose={this.closeBurgerMenu}
          isMenuOpen={isMenuOpen}
        />

        <div id="outer-container">
          <div id="main-container">
            <div id="page-container">
              {menu.map(({ path, component }) => (
                <Route exact path={path} key={path} component={component} />
              ))}
              <Footer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
