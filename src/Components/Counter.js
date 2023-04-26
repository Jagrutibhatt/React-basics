import React, { Component } from "react";
import UpdateComp from "./HigherOrder";

export class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
    };
  }

  IncrementCount = () => {
    this.setState({ x: this.state.x + 1 });
  };

  render() {
    const { x } = this.state;
    console.log(x);
    return (
      <div>
        <button onMouseEnter={this.IncrementCount}>
          {this.props.name} increment of {x}
        </button>
      </div>
    );
  }
}

export default UpdateComp(Counter);
