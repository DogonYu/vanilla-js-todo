export default function Header({ $app }) {
  const $header = document.createElement("header");
  $app.appendChild($header);
  $header.innerHTML = `
  <div class="inner-header">
    <h1>투두앱</h1>
  </div>`;
}
