import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("Component is created using Constructor");

    this.increment = this.increment.bind(this);
  }

  componentDidMount() {
    console.log("Component mounted (loaded)");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(
      "Component updated from ",
      prevState.count,
      " to ",
      this.state.count
    );
  }

  componentWillUnmount() {
    console.log("Component will be unmount(remove)");
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    console.log("Render UI");
    return (
      <div style={{textAlign: "center"}}>
        <h2>Component Lifecycle and event-binding</h2>
        <h1>Count: {this.state.count}</h1>

        <button onClick={this.increment}>Increment</button>
        <br />
        <button onClick={this.decrement}>Decrement</button>
        <br />
        <button onClick={() => this.setState({ count: this.state.count * 0 })}>Reset</button>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <>
        <Counter />
      </>
    );
  }
}

export default App;
