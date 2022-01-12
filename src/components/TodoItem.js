import React, { Component } from "react";
import "./todoItem.css";

export default class TodoItem extends Component {
  removeTodo(id) {
    this.props.removeTodo(id);
  }

  render() {
    return (
      <li>
        <div className="todoWrapper">
          <span>{this.props.todo.text}</span>
          <button
            className="btn btn-danger removeTodo"
            onClick={() => {
              this.removeTodo(this.props.id);
            }}
          >
            Delete
          </button>
        </div>
      </li>
    );
  }
}
