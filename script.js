"use strict";
const generatePassword = document.getElementById("btn");
const copyText = document.getElementById("copytext");
const password = document.getElementById("password");

// Generate password when the user clicks on generatePassword
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const digits = "0123456789";
const specials = "~!@#$%^&*()_+:|<>?";
const length = 8;
const allCharacters = upperCase + lowerCase + digits + specials;

generatePassword.addEventListener("click", function () {
  let generatedPassword = "";
  generatedPassword += upperCase[Math.floor(Math.random() * upperCase.length)];
  generatedPassword += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  generatedPassword += digits[Math.floor(Math.random() * digits.length)];
  generatedPassword += specials[Math.floor(Math.random() * specials.length)];

  while (length > generatedPassword.length) {
    generatedPassword +=
      allCharacters[Math.floor(Math.random() * allCharacters.length)];
  }
  password.value = generatedPassword;
});

// Copy password after it has been generated.
copyText.addEventListener("click", function () {
  password.select();
  document.execCommand("copy");
});
