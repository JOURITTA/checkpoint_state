import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.fullName = "Chouki Amira";
    this.bio = "I just love Amira";
    this.imgSrc = "";
    this.profession = "web devlopper";
    this.state = {
      show: true,
      timer: 0,
    };
  }

  componentDidMount() {
    this.timerInterval = setInterval(() => {
      this.setState((e) => ({ timer: e.timer + 1 }));
    }, 1000);
  }
  componentDidUpdate() {
    console.log("update");
  }
  componentWillUnmount() {
    clearInterval(this.timerInterval);
  }
  render() {
    return (
      <div className="container">
        <div className={this.state.show ? "wrapper" : ""}>
          <div className={this.state.show ? "banner-image" : ""}> </div>
          <h1>{this.state.show ? this.fullName : ""}</h1>
          <p>{this.state.show ? this.bio : ""}</p>
          <p>{this.state.show ? this.profession : ""}</p>
        </div>
        <div className="button-wrapper">
          <h2>{this.state.show ? this.state.timer : (this.state.timer = 0)}</h2>
          <button
            className="btn fill"
            onClick={() => this.setState({ show: !this.state.show })}
          >
            {this.state.show ? "Hide" : "Show"}
          </button>
        </div>
      </div>
    );
  }
}

export default App;
