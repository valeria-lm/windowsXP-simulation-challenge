let loader = document.getElementById('loader');
let login = document.getElementById('login');
let desktop = document.getElementById('desktop')
let forwardBtn = document.getElementById('forward-btn');

setTimeout(function() {
  loader.style.display = 'none';
  login.style.display = 'flex';
}, 5000);

forwardBtn.addEventListener("click", changeSection);

function changeSection() {
  desktop.style.display = "flex";
  login.style.display = "none";
}