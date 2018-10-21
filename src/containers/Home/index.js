import React from "react";
import PageHero from "components/PageHero";
import CatchPhrase from "components/CatchPhrase";
import CompanyValue from "components/CompanyValue";
import Section from "components/Section";
import ImageSeparator from "components/ImageSeparator";

import { COMPANY_NAME } from "const";

import ImageProfessionalism from "assets/images/value-professionalism.png";
import ImageProfitability from "assets/images/value-profitability.png";
import ImageProtection from "assets/images/value-protection.png";
import bgSunset from "assets/images/bg-sunset.png";
import bgStreet from "assets/images/bg-street.png";

import "./styles.scss";

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <PageHero title="Pro Asset Investments" />
        <CatchPhrase text="Let your savings work for you" />
        <div className="Home__content">
          <Section title="About Us">
            <p>
              At <span>{COMPANY_NAME}</span>, we believe every under-utilised
              home can be converted into a valuable asset.
            </p>
            <p>
              We specialise in acquiring smelly houses and houses of multiple
              occupations and valorize them into quality and functional houses
              for the community.
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
          <ImageSeparator src={bgSunset} />
          <Section title="Our Values">
            <CompanyValue
              title="Pro-fessionalism"
              text={[
                "As a professional property investment company operating in the UK, we care about quality.",
                "Our company works closely with highly-experienced team intergrated into the English real-estate market for more than 10 years."
              ]}
              img={ImageProfessionalism}
            />
            <CompanyValue
              reverse
              title="Pro-fitability"
              text={[
                "We firstly focus on providing quality houses in areas with strong rental demand and a lack of supply for the community.",
                "We know that well-researched investments provide you with the safety and protection you need to reach your financial goals."
              ]}
              img={ImageProfitability}
            />
            <CompanyValue
              title="Pro-tection"
              text={[
                "For every property investment, we make a deap due diligence to ensure quality standards.",
                "Each project is followed and secured by a solicitor. All our partnerships are authorized fully regulated by their respective third-party regulatory body to exercise."
              ]}
              img={ImageProtection}
            />
          </Section>
          <ImageSeparator src={bgStreet} />
          <Section title="Why Investing In The UK ?">TODO</Section>
        </div>
      </div>
    );
  }
}

export default Home;
