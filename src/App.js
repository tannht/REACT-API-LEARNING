import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Menu/Header";
import Footer from "./components/Footer";
import routes from "./routes";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
          <Switch>{this.showRoutes(routes)}</Switch>
          <Footer />
        </Router>
      </div>
    );
  }
  showRoutes = (routes) => {
    var results = null;
    if (routes.length > 0) {
      results = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      });
    }
  
    return results;
  };
}
export default App;
