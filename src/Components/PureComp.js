import React, { PureComponent } from "react";

export class PureComp extends PureComponent {
  render() {
    console.log("pure component");
    return (
      <div>
        <p>I'm pure component {this.props.name}</p>
      </div>
    );
  }
}

export default PureComp;
