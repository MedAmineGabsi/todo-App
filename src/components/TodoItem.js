import React, { Component } from "react";
import "./todoItem.css";

export default class TodoItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lined: false,
    };

    this.crossTodo = this.crossTodo.bind(this);
  }
  crossTodo() {
    if (!this.state.lined) {
      console.log("crossed: " + this.props.todo.text);
      document.getElementsByClassName(
        this.props.todo.class
      )[0].style.textDecoration = "line-through";
      this.setState({
        lined: true,
      });
    } else {
      console.log("Discrossed: " + this.props.todo.text);
      document.getElementsByClassName(
        this.props.todo.class
      )[0].style.textDecoration = "none";
      this.setState({
        lined: false,
      });
    }
  }
  removeTodo(id) {
    this.props.removeTodo(id);
  }

  render() {
    return (
      <li>
        <div className="todoWrapper">
          <span className={this.props.todo.class}>{this.props.todo.text}</span>
          <div>
            <button
              className="btn btn-warn linedTodo"
              onClick={() => {
                this.crossTodo();
              }}
            >
              Cross
            </button>
            <button
              className="btn btn-danger removeTodo"
              onClick={() => {
                this.removeTodo(this.props.id);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </li>
    );
  }
}
