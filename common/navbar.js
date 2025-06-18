const base = location.hostname === "127.0.0.1" ? "" : "/expression-website";

fetch(`${base}/common/navbar.html`)
  .then(response => response.text())
  .then(data => {
    document.body.insertAdjacentHTML('afterbegin', data);
  });