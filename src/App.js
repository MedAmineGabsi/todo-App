import { Component } from "react/cjs/react.production.min";
import "./App.css";
import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItem";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        { id: 0, text: "Deliver Pizza", class: "Deliver-Pizza" },
        { id: 1, text: "Learn React TypeScript", class: "Learn-React-TypeScript"},
        { id: 2, text: "Take a shower", class: "Take-a-shower" },
      ],
      nextId: 3,
    };

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }
  addTodo(todoText) {
    let todos = this.state.todos;
    let todoClass = todoText.split(" ").join("-")
    todos.push({ id: this.state.nextId, text: todoText, class: todoClass });
    this.setState({
      todos: todos,
      nextId: this.state.nextId + 1,
    });
    console.log(
      "Added Todo this is the new state:" + JSON.stringify(this.state)
    );
  }
  removeTodo(id) {
    let todos = this.state.todos
    this.setState({
      todos: todos.filter(todo => todo.id !== id),
      nextId: this.state.nextId - 1
    })
  }
  render() {
    return (
      <div className="App">
        <div className="todo-wrapper">
          <Header />
          <TodoInput todoText="" addTodo={this.addTodo} />
          <ul style={{ listStyleType: "decimal" }}>
            {this.state.todos.map((todo) => {
              return (
                <TodoItem
                  todo={todo}
                  key={todo.text}
                  id={todo.id}
                  removeTodo={this.removeTodo}
                />
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
