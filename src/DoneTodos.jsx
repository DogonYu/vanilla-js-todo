export default function Todos({ $app }) {
  const $todos = document.createElement("div");
  $todos.className = "done-todos";
  $app.appendChild($todos);
}
