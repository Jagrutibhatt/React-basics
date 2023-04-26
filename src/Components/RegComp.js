import React, { Component } from "react";

export class RegComp extends Component {
  render() {
    console.log("regular component");
    return (
      <div>
        <p>I'm Regular component {this.props.name} </p>
      </div>
    );
  }
}

export default RegComp;
