import React, { Component } from "react";
import "./todoItem.css";

export default class TodoItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lined: false,
      crypted: false,
    };

    this.crossTodo = this.crossTodo.bind(this);
    this.hashTodo = this.hashTodo.bind(this);
  }

  hashTodo() {
    if (!this.state.crypted) {
      console.log("crypted: " + this.props.todo.text);
      const textToBinary = (str) => {
        let res = "";
        res = str
          .split("")
          .map((char) => {
            return char.charCodeAt(0).toString(2);
          })
          .join(" ");
        return res;
      };
      let binaryMode = textToBinary(this.props.todo.text);
      document.getElementsByClassName(this.props.todo.class)[0].innerHTML =
        binaryMode;
      this.setState({
        lined: this.state.lined,
        crypted: true,
      });
    }
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
            <button className="btn btn-bin" onClick={() => {this.hashTodo()}}>
              Convert to Bin
            </button>
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
