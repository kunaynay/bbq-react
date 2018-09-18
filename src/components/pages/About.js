import React, { Component } from "react";
import AboutSection from '../AboutSection';
import "./About.css";

class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="content">
        <h1>Our Story</h1>
          <AboutSection image='about1' title="Chef Michael"/>
          <AboutSection image='about2' title="Chef Toa"/>
          <AboutSection image='about3' title="Sous Chef Aaron"/>
        </div>
      </div>
    );
  }
}

export default About;
