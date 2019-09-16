import React from "react";
class CounterButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, nextState);

    return true;
  }

  //  updateCount = () => {
  //    this.setState({
  //      count: count + 1
  //    });
  //  };

  updateCount = () => {
    this.setState(state => {
      return { count: state.count + 1 };
    });
  };

  render() {
    return (
      <button id="counter" color={this.props.colors} onClick={this.updateCount}>
        Count: {this.state.count}
      </button>
    );
  }
}
export default CounterButton;
