import React, { Component } from "react";
import "./styles.css";
import Increment from "./cartapp";

class App extends Component {
  constructor() {
    super();
    this.state = {
      counters: [
        { id: 1, value: 4 },
        { id: 2, value: 0 },
        { id: 3, value: 0 },
        { id: 4, value: 0 }
      ]
    };
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete = counterid => {
    let newcounters = this.state.counters.filter(c => c.id !== counterid);
    this.setState({ counters: newcounters });
  };

  render() {
    return (
      <React.Fragment>
        {this.state.counters.map(counter => (
          <Increment
            key={counter.id}
            onDelete={this.handleDelete}
            countercart={counter}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default App;
