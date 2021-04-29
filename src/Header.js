export default function Header({ $app }) {
  const $header = document.createElement("header");
  $app.appendChild($header);
  $header.innerHTML = `<div>투두앱</div>`;
}
