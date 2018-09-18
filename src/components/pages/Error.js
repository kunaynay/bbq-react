import React from "react";
import { Link } from "react-router-dom";
// import Header from '../layout/Header';

import "./Error.css";

const Error = () => {
  return (
    <div className="error">
      <div className="box">
        <h1 className="logo">404: Page not found</h1>
        <p className="errorText">
          Oh no! Looks like you went somewhere that doesn't exist...
        </p>
        <Link to="/">
          <button>Take me back!</button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
