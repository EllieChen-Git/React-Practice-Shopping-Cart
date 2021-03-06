import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>

        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-success btn-sm m-2"
        >
          Add
        </button>

        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-primary btn-sm m-2"
        >
          Remove
        </button>

        <button
          onClick={() => this.props.onDelete(this.props.counter.id)} //raising an 'delete' event
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "info";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Interested?" : value;
  }
}

export default Counter;
