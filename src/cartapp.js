import React from "react";
import { Component } from "react";

class Increment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.countercart.value
    };
    this.incrementHandler = this.incrementHandler.bind(this);
  }

  handleclass() {
    let v = this.state.value;
    let values = v === 0 ? <h3> Zero </h3> : v;
    return values;
  }
  classhandler() {
    let classvalue = "badge m-2 badge-";
    classvalue += this.state.value === 0 ? "warning" : "primary";
    return classvalue;
  }

  incrementHandler() {
    this.setState({
      value: this.state.value + 1
    });
  }

  render() {
    return (
      <React.Fragment>
        <h2 className={this.classhandler()}>{this.handleclass()}</h2>
        <button className="btn btn-success m-2" onClick={this.incrementHandler}>
          increment
        </button>
        <button
          className="btn btn-danger m-2"
          onClick={() => this.props.onDelete(this.props.countercart.id)}
        >
          Delete
        </button>
        <br />
      </React.Fragment>
    );
  }
}

export default Increment;
