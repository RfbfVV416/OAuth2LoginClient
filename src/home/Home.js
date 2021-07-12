import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
  renderCircles() {
    return (
      <div className="container">
        <h1 className="home-title">React OAuth2 Login</h1>
      </div>
    );
  }

  render() {
    return <div className="home-container">{this.renderCircles()}</div>;
  }
}

export default Home;
