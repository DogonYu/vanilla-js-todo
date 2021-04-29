export default function Todos({ $app, onTodoRemove }) {
  this.state = [];
  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };
  const $todos = document.createElement("div");
  $todos.className = "todos";
  $app.appendChild($todos);

  this.render = () => {
    if (this.state) {
      const todoTemplate = this.state.map((todo, idx) => {
        return `
        <div class="todo-item">
          <div>${idx + 1}. ${todo}</div>
          <div class="remove-btn" data-id="${idx + 1}">X</div>
        </div>`;
      });
      $todos.innerHTML = todoTemplate;
    }
  };

  $todos.addEventListener("click", (e) => {
    const removeId = parseInt(e.target.dataset.id, 10);
    onTodoRemove(removeId);
  });
}
