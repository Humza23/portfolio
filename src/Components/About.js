import React, { Component } from "react";
import resumepdf from "../assets/HumzaMalikResume.pdf";

import profilepic from "../images/profilepic.jpg";


class About extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var bio = this.props.data.bio;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var phone = this.props.data.phone;
    }

    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img
              className="profile-pic"
              src={profilepic}
              alt="Humza Malik Profile Pic"
            />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>{bio}</p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Information</h2>
                <p className="address">
                  <span>{name}</span>
                  <br />
                  <span>
                    {city}, {state}
                  </span>
                  <br />
                  <span>{phone}</span>
                  <br />
                  <a href="mailto:humza.m97@outlook.com">humza.m97@outlook.com</a>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a
                    href={resumepdf}
                    className="button"
                    download="Humza Malik Resume"
                  >
                    <i className="fa fa-download"></i>Download Resume
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
