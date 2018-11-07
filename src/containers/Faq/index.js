import React from "react";
import PageHero from "components/PageHero";
import Section from "components/Section";
import ContactShortcut from "components/ContactShortcut";

import bgStreet from "assets/images/bg-street.png";

import { COMPANY_NAME } from "const";

class Faq extends React.Component {
  render() {
    return (
      <div className="Faq">
        <PageHero title="Frequently Asked Questions" withGradient />
        <Section smallTitle title="How Investing works ?">
          <p>
            Regarding your amount invested and the loan's duration, a
            personalized loan agreement, written by a lawyer, is concluded
            between you and {COMPANY_NAME}.{" "}
          </p>
          <p>
            When completed, the funds are transferred into the company bank
            account to be invested. On a quarter)basis you receive an update of
            your investment journey.
          </p>
        </Section>
        <Section smallTitle title="What are the guarantees?">
          <p>
            At {COMPANY_NAME}, every project is conscientiously analized to
            ensure the highest profitability.{" "}
          </p>
          <p>
            We also provides several security options within the loan agreement
            throught the 1st charge guarantee, the restriction guarantee and
            shares in the limited company.
          </p>
        </Section>
        <Section
          smallTitle
          title="How can I invest if I'm not leaving in the UK ?"
        >
          <p>
            Living in the UK <span>is not mandatory</span>. {COMPANY_NAME}{" "}
            operates with worldwide majors investors.
          </p>
        </Section>
        <Section smallTitle title="How is the money transfer secured ?">
          <p>
            For each funding, we work with the leading foreign exchance business
            based in London: <span>CentralFX</span>.
          </p>
          <p>
            Our partner is fully authorized and regulated by the Financial
            Conduct Authority to conduct money transfer. Central FX also
            provides substantial advices on currency exchange rate to maximize
            your investment.
          </p>
        </Section>
        <Section smallTitle title="Do I pay tax on my benefits ?">
          <p>
            Yes,{" "}
            <span>a legal 20% UK tax will be applied on your benefits</span>{" "}
            when collected. {COMPANY_NAME} will pay this tax on your behalf. And
            additional tax can be applied according to your residential country.
            Investors are advised to obtain their own independant appropriate
            tax, financial or investment advice when necessary.
          </p>
        </Section>
        <Section
          smallTitle
          background={bgStreet}
          transition={{ from: "white", reversed: true }}
        >
          <ContactShortcut />
        </Section>
      </div>
    );
  }
}

export default Faq;
