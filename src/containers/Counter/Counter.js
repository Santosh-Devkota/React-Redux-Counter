import React, { Component } from "react";
import { connect } from "react-redux";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import Table from "../../components/table";

class Counter extends Component {
  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl label="Add 10" clicked={this.props.onAddition} />
        <CounterControl label="Subtract 10" clicked={this.props.onSubtration} />
        <hr />
        <Table
          deleteFunction={this.props.onDeleteLogs}
          logs={this.props.logs}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ctr: state.counter,
    logs: state.logs,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () => dispatch({ type: "INCREMENT" }),
    onDecrementCounter: () => dispatch({ type: "DECREMENT" }),
    onAddition: () => dispatch({ type: "ADDITION", value: 10 }),
    onSubtration: () => dispatch({ type: "SUBTRACTION", value: 10 }),
    onDeleteLogs: (_id) => dispatch({ type: "DELETE_LOGS", id: _id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
