import React from "react";
import Button from "./components/button";

class ClassComponent extends React.Component {
  state = {
    counter: 0,
    name: ""
  };

  handleCounter = () => {
    this.setState((curState) => ({
      counter: curState.counter + 1
    }));
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    const { counter, value } = this.state;
    return (
      <div>
        <h1> Class component will reload state </h1>
        <div>
          <Button onClick={this.handleCounter}>Increase value</Button>
          <p>{counter}</p>
        </div>
        <div>
          <label htmlFor="name">Enter First Name</label>
          <input
            value={value}
            onChange={this.handleInputChange}
            name="name"
            id="name"
          />
        </div>
      </div>
    );
  }
}

export default ClassComponent;
