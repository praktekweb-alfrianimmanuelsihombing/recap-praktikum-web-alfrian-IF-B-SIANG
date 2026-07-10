const registerBtn = document.querySelector(".signup-btn");
const loginBtn = document.querySelector(".login-btn");

registerBtn.addEventListener("click", function () {
  alert("Website Dalam Perbaikan");
});

loginBtn.addEventListener("click", function () {
  alert("Website Dalam Perbaikan");
});

const text = document.querySelector(".kedua-text");

const genreFilm = ["HORROR", "ACTION", "ROMANCE", "COMEDY"];

let index = 0;

setInterval(function () {
  index++;

  if (index >= genreFilm.length) {
    index = 0;
  }

  text.textContent = genreFilm[index];
}, 4000);