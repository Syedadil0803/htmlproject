import React from "react";

class EmailComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    console.log("Constructor - Component Born");
  }

  componentDidMount() {
    console.log("componentDidMount - Component Mounted");
  }

  componentDidUpdate(_prevProps, prevState) {
    console.log("componentDidUpdate - Component Updated");
    console.log("Previous Count:", prevState.count);
    console.log("Current Count:", this.state.count);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount - Component Removed");
  }

  render() {

    return (
      <div>
        <h2>Counter: {this.state.count}</h2>

        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}

export default EmailComponent;
