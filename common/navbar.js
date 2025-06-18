const isLocalhost = location.hostname === "127.0.0.1" || location.hostname === "localhost";

// Choose which navbar file to fetch
const navbarPath = isLocalhost 
  ? "/common/navbar-local.html"  // local version
  : "/expression-website/common/navbar-github.html";  // GitHub Pages version

fetch(navbarPath)
  .then(response => response.text())
  .then(data => {
    document.body.insertAdjacentHTML('afterbegin', data);
  })
  .catch(err => console.error("Failed to load navbar:", err));