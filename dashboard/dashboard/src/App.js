import React, { Component } from "react";
import "./App.css";
import Iframe from "react-iframe";

class App extends Component {
  render() {
    return (
      <div>
        <h1> The App Component</h1>
        <Iframe
          url="https://flutterdemo-59d42.firebaseapp.com/#/"
          width="1000px"
          height="500px"
          id="myId"
          className="myClassname"
          display="initial"
          position="relative"
        />
      </div>
    );
  }
}

export default App;
