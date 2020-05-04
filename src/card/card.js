import React from "react";
import map from "./map.jpeg";
import puce from "./puce.png";
import logo from "./mastercard.png";
import "./card.css";

class Credit extends React.Component {
  state = { name: "", date: "", num: "" };
  writeName = (event) => {
    event.target.value = event.target.value.replace(/[^a-zA-Z]+/g, "");
    this.setState({ name: event.target.value });
  };
  writeDate = (event) => {
    this.setState({ date: event.target.value });
  };
  writeNum = (event) => {
    this.setState({ num: event.target.value });
  };
  render() {
    return (
      <div className="inout">
        <div className="image">
          <img alt="backgroung image" src={map} className="backgroung" />
          <img src={puce} alt="ship image" className="puce" />
          <img src={logo} className="logo" />
          <h1 className="title">Credit Card</h1>
        </div>
        <div className="show">
          <h5 className="showName">{this.state.name}</h5>
          <h5 className="showDate">{this.state.date}</h5>
          <h5 className="showNum">{this.state.num}</h5>
        </div>
        <div className="write">
          <input
            type="text"
            className="writeName"
            onChange={this.writeName}
            placeholder="Enter your name"
          />
          <input
            type="text"
            className="writeDate"
            onChange={this.writeDate}
            placeholder="MM/AA"
          />
          <input
            type="text"
            className="writeNum"
            onChange={this.writeNum}
            placeholder="RIB"
          />
        </div>
      </div>
    );
  }
}
export default Credit;
