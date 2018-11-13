import React from "react";
import PageHero from "components/PageHero";
import TeamMember from "components/TeamMember";
import Section from "components/Section";
import ContactShortcut from "components/ContactShortcut";
import CompanyValue from "components/CompanyValue";
import InvestmentScheme from "components/InvestmentScheme";

import { COMPANY_NAME } from "const";

import keydoPicture from "assets/images/team-keydorlane.png";
import imranPicture from "assets/images/team-imran.png";
import brianPicture from "assets/images/team-brian.png";
import robertPicture from "assets/images/team-robert.png";
import hugoPicture from "assets/images/team-hugo.png";
import ImageProfessionalism from "assets/images/value-professionalism.png";
import ImageProfitability from "assets/images/value-profitability.png";
import ImageProtection from "assets/images/value-protection.png";
import ImageProximity from "assets/images/value-proximity.png";

import bgStreet from "assets/images/bg-street.png";

import "./styles.scss";

class Team extends React.Component {
  teamMembers = [
    {
      picture: keydoPicture,
      firstname: "Keydorlane",
      lastname: "Lancreot",
      job: "Director",
      description: `Founding director of ${COMPANY_NAME}, Keydorlane is
      an devoted entrepreneur.
      She began with real estate
      5 years ago alongside with
      the creation of her mother's
      homestaging company.
      Keydorlane's reponsabilities
      are to maximize the
      company's asset value
      through her analytical skills,
      systemized management
      and experienced team
      deployment.`
    },
    {
      picture: imranPicture,
      firstname: "Imran",
      lastname: "Lokhon",
      job: "Non Executive Director",
      description:
        "Entrepreneur, mentor and professional investor, Imran has been representing the community near Oxford within local government. for a decade. Since 2008, he has also gained a genuine and high valuable experience in the UK property investment process. Within Pro-Asset Investment's, Imran brings his sharpen advices regarding investments strategies."
    }
  ];

  teamMembers2 = [
    {
      picture: brianPicture,
      firstname: "Brian",
      lastname: "Mason",
      job: "Accountant",
      description:
        "Director of Aviscompany, Brian has been working for Alviscompany for 15 years. Within Pro-Asset Investment's, Brian provide outsourced financial management advices across accounting, business advice and taxation."
    },
    {
      picture: robertPicture,
      firstname: "Robert",
      lastname: "Joesph",
      job: "Exchange Currency Specialist",
      description:
        "Fouding director of CenttralFX, Robert is a specialist in making comprehensive solutions for international payments. Within the company, Robert brings his 15-year extensive experience in taloring foreign currency strategies and protecting profit margins."
    },
    {
      picture: hugoPicture,
      firstname: "Hugo",
      lastname: "Beardsall",
      job: "Sourcing Manager",
      description:
        "Professional Investor and author, Hugo is the managing director of MySourcingHub website. With his history as estate agent, Hugo brings into Pro-Asset Investment's company, his proven experience dealing with estate and sourcing agents."
    }
  ];

  renderValue({ title, text, img }) {
    return <CompanyValue title={title} text={text} img={img} />;
  }

  values = [
    {
      title: "Pro-fessionalism",
      text: [
        "As a professional property investment company operating in the UK, we are committed to quality.",
        "Our company works closely with highly-experienced team intergrated into the English real-estate market for more than 10 years."
      ],
      img: ImageProfessionalism
    },
    {
      title: "Pro-fitability",
      text: [
        "We firstly focus on providing quality houses in areas with strong rental demand and a lack of supply for the community.",
        "We know that well-researched investments provide you with the safety and protection you need to reach your financial goals."
      ],
      img: ImageProfitability
    },
    {
      title: "Pro-tection",
      text: [
        "For every property investment, we make a deap due diligence to ensure quality standards.",
        "Each project is followed and secured by a solicitor. All our partnerships are authorized fully regulated by their respective third-party regulatory body to exercise."
      ],
      img: ImageProtection
    },
    {
      title: "Pro-ximity",
      text: [
        "At Pro-Asset Investment's, we take the time with the investors to know them and their financial goals.",
        "We work with transparency to make our investors true wealth partners. And, we also make sure they fully understand their investment by providing a detailled investment proposal and answeing any question."
      ],
      img: ImageProximity
    }
  ];

  render() {
    const { teamMembers, teamMembers2 } = this;
    return (
      <div className="AboutUs">
        <PageHero title="About Us" withGradient />

        <Section title="Our Values" theme="white">
          <div className="OurValues">{this.values.map(this.renderValue)}</div>
        </Section>
        <Section
          title="Property Investment Scheme"
          theme="beige"
          transition={{ from: "white" }}
        >
          <InvestmentScheme />
        </Section>
        <Section title="Our Team" theme="white" transition={{ from: "beige" }}>
          <div className="TeamMembers">
            {teamMembers.map((member, i) => (
              <TeamMember key={i} {...member} />
            ))}
          </div>
          <div className="TeamMembers">
            {teamMembers2.map((member, i) => (
              <TeamMember key={i} {...member} />
            ))}
          </div>
        </Section>
        <Section
          background={bgStreet}
          transition={{ from: "white", reversed: true }}
        >
          <ContactShortcut />
        </Section>
      </div>
    );
  }
}

export default Team;
