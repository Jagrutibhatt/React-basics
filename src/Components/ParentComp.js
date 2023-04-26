import React, { Component } from "react";
import PureComp from "./PureComp";
import RegComp from "./RegComp";

class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Jagruti",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ name: "Jagruti" });
    }, 3000);
  }

  render() {
    console.log("parent component");
    return (
      <div>
        <p>I'm a Parent component</p>
        <PureComp name={this.state.name} />
        <RegComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComp;
