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
      const todoTemplate = this.state
        .map((todo, idx) => {
          return `
          <div class="todo-item">
            <div>${todo}</div>
            <div class="remove-btn" data-id="${idx + 1}">X</div>
          </div>`;
        })
        .join("");
      $todos.innerHTML = todoTemplate;
    }
  };

  $todos.addEventListener("click", (e) => {
    const removeId = parseInt(e.target.dataset.id, 10);
    onTodoRemove(removeId);
  });

  $todos.onpointerdown = function (e) {
    const originalTodo = e.target.closest(".todo-item");
    if (originalTodo) {
      const ghostNode = originalTodo.cloneNode(true);
      const placeholder = originalTodo.cloneNode();
      const originalTodoRect = originalTodo.getBoundingClientRect();
      const originalTodoStyle = window.getComputedStyle(originalTodo);
      const originalTop = originalTodoRect.top;
      const originalLeft = originalTodoRect.left;
      const initialX = e.pageX;
      const initialY = e.pageY;
      const distance =
        originalTodoRect.height +
        parseInt(originalTodoStyle.marginTop) +
        parseInt(originalTodoStyle.marginBottom);

      $todos.appendChild(ghostNode);
      ghostNode.style.position = `fixed`;
      ghostNode.style.top = `${originalTodoRect.top}px`;
      ghostNode.style.left = `${originalTodoRect.left}px`;
      ghostNode.style.zIndex = `9999`;
      ghostNode.style.transition = `transform 200ms ease, box-shadow 200ms ease`;
      ghostNode.style.transform = `scale(1.03)`;
      ghostNode.style.opacity = `0.9`;
      ghostNode.style.boxShadow = `0 30px 60px rgba(0, 0, 0, .3)`;

      placeholder.classList.add("placeholder");
      placeholder.style.position = "absolute";
      placeholder.style.top = "0px";
      placeholder.style.transform = `translate3d(0, ${originalTodo.offsetTop}px, 0`;
      placeholder.style.height = `${originalTodo.offsetHeight}px`;
      originalTodo.parentElement.prepend(placeholder);

      window.addEventListener("pointermove", (e) => {
        const offsetX = e.pageX - initialX;
        const offsetY = e.pageY - initialY;
        const toX = originalLeft + offsetX;
        const toY = originalTop + offsetY;

        ghostNode.style.left = `${toX}px`;
        ghostNode.style.top = `${toY}px`;
      });
    }
  };
}
