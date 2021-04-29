import Header from "./Header.js";
import TodoInput from "./TodoInput.js";
import Todos from "./Todos.js";

export default function App($app) {
  this.state = {
    todoList: [],
  };

  this.setState = (nextState) => {
    this.state = nextState;
    todos.setState(this.state.todoList);
  };

  const header = new Header({
    $app,
  });

  const todoInput = new TodoInput({
    $app,
    onClick: (todo) => {
      this.setState({
        ...this.state,
        todoList: [...this.state.todoList, todo],
      });
    },
  });

  const todos = new Todos({
    $app,
    onTodoRemove: (removeId) => {
      this.setState({
        ...this.state,
        todoList: this.state.todoList.filter(
          (todo, idx) => idx + 1 !== removeId
        ),
      });
    },
  });
}
