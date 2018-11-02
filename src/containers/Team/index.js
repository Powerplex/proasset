import React from "react";
import PageHero from "components/PageHero";
import TeamMember from "components/TeamMember";
import Section from "components/Section";
import ContactShortcut from "components/ContactShortcut";
import CompanyValue from "components/CompanyValue";

import { COMPANY_NAME } from "const";

import keydoPicture from "assets/images/team-keydorlane.png";
import imranPicture from "assets/images/team-imran.png";
import brianPicture from "assets/images/team-brian.png";
import robertPicture from "assets/images/team-robert.png";
import hugoPicture from "assets/images/team-hugo.png";
import ImageProfessionalism from "assets/images/value-professionalism.png";
import ImageProfitability from "assets/images/value-profitability.png";
import ImageProtection from "assets/images/value-protection.png";
import bgStreet from "assets/images/bg-street.png";

import "./styles.scss";

class Team extends React.Component {
  teamMembers = [
    {
      picture: keydoPicture,
      firstname: "Keydorlane",
      lastname: "Lancreot",
      job: "Director",
      description: `Founding director of ${COMPANY_NAME}, Keydorlane maximise the company's asset value trough systemised management and experienced team deployment.`
    },
    {
      picture: imranPicture,
      firstname: "Imran",
      lastname: "Lokhon",
      job: "Non Executive Director",
      description:
        "Professional investor for a decade and mentor, Imran has a guenuine and high valuable experience in the UK property investment process."
    },
    {
      picture: brianPicture,
      firstname: "Brian",
      lastname: "Mason",
      job: "Accountant",
      description:
        "Director of Aviscompany. Brian provides outsourced financial management advices across accounting,, business advice and taxation."
    },
    {
      picture: robertPicture,
      firstname: "Robert",
      lastname: "Joesph",
      job: "Exchange Currency Specialist",
      description:
        "Fouding director of CenttralFX. Robert has a expensive experience in taloring foreign currency strategies and protecting profit margins."
    },
    {
      picture: hugoPicture,
      firstname: "Hugo",
      lastname: "Beardsall",
      job: "Sourcing Manager",
      description:
        "Investor and managing director of MySourcingHub. Hugo has a hiçgh experience dealing with estate and sourcing agents."
    }
  ];

  renderValue({ title, text, img }) {
    return <CompanyValue title={title} text={text} img={img} />;
  }

  values = [
    {
      title: "Pro-fessionalism",
      text: [
        "As a professional property investment company operating in the UK, we care about quality.",
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
    }
  ];

  render() {
    const { teamMembers } = this;
    return (
      <div className="AboutUs">
        <PageHero title="About Us" />
        {/* <CatchPhrase text="We are here for you" /> */}
        <Section title="Our Team">
          <div className="TeamMembers">
            {teamMembers.map((member, i) => (
              <TeamMember key={i} {...member} />
            ))}
          </div>
        </Section>
        <Section
          title="Our Values"
          theme="beige"
          transition={{ from: "white" }}
        >
          {this.values.map(this.renderValue)}
        </Section>
        <Section
          background={bgStreet}
          transition={{ from: "beige", reversed: true }}
        >
          <ContactShortcut />
        </Section>
      </div>
    );
  }
}

export default Team;
