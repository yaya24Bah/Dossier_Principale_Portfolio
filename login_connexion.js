"use strict";

const form = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const errorMessage = document.getElementById("loginError");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = usernameInput.value.trim();
  const password = passwordInput.value;
  const isValid = username === "yayabah" && password === "yayabah22";

  if (isValid) {
    errorMessage.hidden = true;
    window.location.assign("index.html");
    return;
  }

  errorMessage.hidden = false;
  passwordInput.value = "";
  passwordInput.focus();
});

usernameInput.addEventListener("input", () => { errorMessage.hidden = true; });
passwordInput.addEventListener("input", () => { errorMessage.hidden = true; });
