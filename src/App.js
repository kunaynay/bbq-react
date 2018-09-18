import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Menu from "./components/pages/Menu";
import Contact from "./components/pages/Contact";
import Error from "./components/pages/Error";
import "./App.css";

//Main page exists in "page" div
class App extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <div className="page">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/menu" component={Menu} />
              <Route exact path="/contact" component={Contact} />
              <Route component={Error} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
