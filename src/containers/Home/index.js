import React from "react";
import PageHero from "components/PageHero";

import Section from "components/Section";
import ContactShortcut from "components/ContactShortcut";
import InvestSummary from "components/InvestSummary";
import InvestSteps from "components/InvestSteps";

import { COMPANY_NAME } from "const";

import bgStreet from "assets/images/bg-street.png";

import "./styles.scss";

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <PageHero
          title="PRO ASSET"
          secondTitle="INVESTMENT'S"
          subtitle={"Let your savings work for you"}
          high
        />
        {/* <CatchPhrase text="Let your savings work for you" /> */}
        <div className="Home__content">
          <Section>
            <InvestSummary />
          </Section>
          <Section className="WhyInvest" title={`Why ${COMPANY_NAME} ?`}>
            <p style={{ fontWeight: "bold" }}>
              At {COMPANY_NAME}, we believe every under-utilised home can be
              converted into a valuable asset.
            </p>
            <p>
              We specialize in acquiring individual houses and houses of
              multiple occupations needing renovation and upgrade them into
              quality and functional houses for the community.
            </p>
            <p>
              As investing in property is passive incoe-making and
              time-consuming, we also offer to investors to growth their wealth
              from secure property investments through funding.
            </p>
            <p>
              From short-term to long-term journey, we give you the opportunity
              to take control of your financial future because everything we do
              is driven by our purpose to create quality homes for quality
              assets.
            </p>
          </Section>

          <Section
            theme="beige"
            title={`How it works`}
            transition={{ from: "white" }}
          >
            <InvestSteps />
          </Section>

          <Section
            background={bgStreet}
            transition={{ from: "beige", reversed: true }}
          >
            <ContactShortcut />
          </Section>
        </div>
      </div>
    );
  }
}

export default Home;
