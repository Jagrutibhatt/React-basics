import React, { Component } from "react";
import BellA from "./Images/BellA.jpg";
import BellB from "./Images/BellB.jpg";

class NewComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Subscribe to my channel JagrutiBhatt",
      sub: "Subscribe",
      imageUrl: BellA,
    };
  }
  styles = { fontStyle: "italic", color: "purple" };

  ButtonChange = () => {
    this.setState({
      message: "Hit the bell icon never miss an update",
      sub: "Unsubscribed",
    });
  };

  ImageChange = () => {
    this.setState({
      message: "Thank you",
      imageUrl: BellB,
    });
  };

  render() {
    return (
      <div>
        <h2 style={this.styles}>{this.state.message}</h2>
        <button onClick={this.ButtonChange}>{this.state.sub}</button> <p />
        <img
          onClick={this.ImageChange}
          style={{ width: "80px", height: "80px" }}
          src={this.state.imageUrl}
          alt="Bell icon"
        />
      </div>
    );
  }
}

export default NewComp;
