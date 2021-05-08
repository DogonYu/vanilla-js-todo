export default function TodoInput({ $app, onClick }) {
  this.state = "";
  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };
  const $todo = document.createElement("div");
  const $todoInput = document.createElement("input");
  const $todoButton = document.createElement("button");
  $todo.className = "todo-wrapper";
  $todo.innerHTML = `<div class="input-wrapper"></div>`;
  $app.appendChild($todo);
  $todoInput.placeholder = "할 일";
  $todoButton.innerText = "추가";
  document.querySelector(".input-wrapper").appendChild($todoInput);
  document.querySelector(".input-wrapper").appendChild($todoButton);

  this.render = () => {
    $todoInput.value = this.state;
  };

  $todoInput.addEventListener("keyup", (e) => {
    this.state = e.target.value;
  });

  $todoInput.addEventListener("keyup", (e) => {
    if (e.keyCode === 13) {
      if (this.state) {
        onClick(e.target.value);
        this.setState("");
        return;
      }
      alert("할 일을 입력해주세요!");
    }
  });

  $todoButton.addEventListener("click", () => {
    if (this.state) {
      onClick(this.state);
      this.setState("");
      return;
    }
    alert("할 일을 입력해주세요!");
  });
}
