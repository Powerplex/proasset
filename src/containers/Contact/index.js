import React from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";

import PageHero from "components/PageHero";
import Section from "components/Section";

import mapImg from "assets/images/map.png";

import { COMPANY_NAME } from "const";

import "./styles.scss";

class Contact extends React.Component {
  email = "info@pro-assetinvestments.com";
  phoneNumber = "(04) 229 4091 0946";

  renderMap() {
    return <img className="Map" src={mapImg} alt="map" />;
  }

  render() {
    return (
      <div className="Contact">
        <PageHero title="Contact us" />
        <Section>
          <div className="ContactInformations">
            <div className="ContactAdress">
              <p className="ContactAdress__company">{COMPANY_NAME}</p>
              <p>33a Milton Road</p>
              <p>Hampton Middlesex</p>
              <p>TW12 2LL</p>
            </div>
            ​
          </div>
        </Section>
        <Section
          theme="beige"
          // transition={{ from: "white", reversed: false }}
        >
          <p className="ContactEmail">
            <FaEnvelope />
            {this.email}
          </p>
        </Section>
        <Section transition={{ from: "beige" }}>
          <p className="ContactPhone">
            <FaPhone />
            {this.phoneNumber}
          </p>
        </Section>
        <Section title="Locate Us" theme="beige">
          {this.renderMap()}
        </Section>
      </div>
    );
  }
}

export default Contact;
