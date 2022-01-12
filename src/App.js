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
        { id: 0, text: "Deliver Pizza" },
        { id: 1, text: "Learn React TypeScript" },
        { id: 2, text: "Take a shower" },
      ],
      nextId: 3,
    };

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }
  addTodo(todoText) {
    console.log("TODOS: " + todoText);
  }
  removeTodo(id) {
    console.log("Removed: " + id);
  }
  render() {
    return (
      <div className="App">
        <div className="todo-wrapper">
          <Header />
          <TodoInput todoText="" addTodo={this.addTodo} />
          <ul style={{listStyleType: "decimal"}}>
            {this.state.todos.map((todo) => {
              return (
                <TodoItem
                  todo={todo}
                  key={todo.id}
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
