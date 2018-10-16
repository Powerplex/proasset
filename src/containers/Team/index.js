import React from "react";
import PageHero from "components/PageHero";
import TeamMember from "components/TeamMember";
import CatchPhrase from "components/CatchPhrase";
import Section from "components/Section";

import { COMPANY_NAME } from "const";

import keydoPicture from "assets/images/team-keydorlane.png";
import imranPicture from "assets/images/team-imran.png";
import brianPicture from "assets/images/team-brian.png";
import robertPicture from "assets/images/team-robert.png";
import hugoPicture from "assets/images/team-hugo.png";

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

  render() {
    const { teamMembers } = this;
    return (
      <div className="Team">
        <PageHero title="Our Power team" />
        <CatchPhrase text="We are here for you" />
        <Section>
          <div className="TeamMembers">
            {teamMembers.map((member, i) => (
              <TeamMember key={i} {...member} />
            ))}
          </div>
        </Section>
      </div>
    );
  }
}

export default Team;
