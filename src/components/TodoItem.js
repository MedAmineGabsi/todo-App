import React, { Component } from "react";
import "./todoItem.css";
import swal from "sweetalert";

export default class TodoItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lined: false,
      crypted: false,
      hash: "",
    };

    this.crossTodo = this.crossTodo.bind(this);
    this.hashTodo = this.hashTodo.bind(this);
  }
  hashTodo() {
    if (!this.state.crypted) {
      console.log("Crypted: " + this.props.todo.text);
      const textTohash = (str) => {
        let res = str
          .split("")
          .map((char) => {
            return String.fromCharCode(char.charCodeAt(0) + 75);
          })
          .join("");
        return res;
      };
      let hashMode = textTohash(this.props.todo.text);
      document.getElementsByClassName(this.props.todo.class)[0].innerHTML =
        hashMode;
      this.setState({
        lined: this.state.lined,
        crypted: true,
        hash: hashMode,
      });
    } else {
      var password = prompt("Type your password: ");
      if (password === this.props.password) {
        let hashed = this.state.hash.split("");
        let unHashMode = hashed
          .map((e) => String.fromCharCode(e.charCodeAt(0) - 75))
          .join("");
        document.getElementsByClassName(this.props.todo.class)[0].innerHTML =
          unHashMode;
        this.setState({
          lined: this.state.lined,
          crypted: false,
          hash: this.state.hash,
        });
        swal("You pass", "Uncrypted Task: " + this.props.todo.text, "success");
      } else {
        swal("Incorrect Password", "The password didn't match", "error");
      }
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
            <button
              className="btn btn-bin"
              onClick={() => {
                this.hashTodo();
              }}
            >
              {this.state.crypted ? "Uncrypt" : "Crypt"}
            </button>
            <button
              className="btn btn-warn linedTodo"
              onClick={() => {
                this.crossTodo();
              }}
            >
              {this.state.lined ? "Uncross" : "Cross"}
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
