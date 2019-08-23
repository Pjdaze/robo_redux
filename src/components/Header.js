import React from "react";
import CounterButton from "./CounterButton";

class Header extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }
  render() {
    return (
      <div>
        <CounterButton color={"red"} />
        <h1 className="f1">RoboFriends</h1>
      </div>
    );
  }
}
export default Header;
