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
      label: "Invest",
      component: Home
    },
    {
      path: "/about-us",
      label: "About Us",
      component: Team
    },
    {
      path: "/faq",
      label: "FAQ",
      component: Faq
    },
    {
      path: "/contact",
      label: "Contact",
      component: Contact
    }
  ];

  state = {
    isMenuOpen: false
  };

  closeBurgerMenu = () => {
    this.setState({ isMenuOpen: false });
    window.scrollTo(0, 0);
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
