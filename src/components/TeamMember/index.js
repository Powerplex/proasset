import React from "react";
import PropTypes from "prop-types";

import "./styles.scss";

class TeamMember extends React.Component {
  static propTypes = {
    picture: PropTypes.string.isRequired,
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    job: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  };
  render() {
    const { picture, firstname, lastname, job, description } = this.props;
    return (
      <div className="TeamMember">
        <div className="TeamMember__name">
          <div>{firstname.toUpperCase()}</div>{" "}
          <span>{lastname.toUpperCase()}</span>
        </div>
        <p className="TeamMember__job">- {job} -</p>
        <img src={picture} alt={`${firstname} ${lastname}`} />
        <p className="TeamMember__description">{description}</p>
      </div>
    );
  }
}

export default TeamMember;
