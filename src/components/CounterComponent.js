import React, { Component } from "react";
import { connect } from "react-redux";
import {
  add1,
  remove1,
  remove10,
  add10,
  resetCount
} from "../actions/counterActions";

class CounterComponent extends Component {
  render() {
    const {
      counterValue,
      add1,
      remove1,
      remove10,
      add10,
      resetCount
    } = this.props;
    return (
      <div className="CounterComponent">
        <p id="render-store">{counterValue}</p>
        <button id="add1" onClick={add1}>
          add 1
        </button>
        <button id="remove1" onClick={remove1}>
          remove 1
        </button>
        <button id="add10" onClick={add10}>
          add 10
        </button>
        <button id="remove10" onClick={remove10}>
          remove 10
        </button>
        <button id="reset" onClick={resetCount}>
          reset
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  counterValue: state.count.value
});

export default connect(
  mapStateToProps,
  {
    add1,
    remove1,
    remove10,
    add10,
    resetCount
  }
)(CounterComponent);


