"use strict";

const submitBtn = document.querySelector(".btn");
const inputField = document.querySelector(".input-field");
const emailAdres = document.getElementById("email");
const errorIcon = document.getElementById("error-icon");
const errorMessage = document.getElementById("error-message");

submitBtn.addEventListener("click", function (e) {
  console.log(emailAdres.value);
  if (emailAdres.value === "" || !emailAdres.value.includes("@")) {
    errorIcon.classList.remove("hide");
    errorMessage.classList.remove("hide");
    inputField.style.border = "2px hsl(0, 93%, 68%) solid";
  } else {
    e;
  }
});
