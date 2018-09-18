import React, { Component } from "react";
import { Link } from "react-router-dom";
// import Header from '../layout/Header';

import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div className="intro">
        <div className="box">
          <h1 className="logo">Lorem Barbeque</h1>
          <p className="introText">
            Try out our incredibly delicious and mouthwatering barbeque!
          </p>
          <Link to="/menu">
            <button>Take a look!</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
