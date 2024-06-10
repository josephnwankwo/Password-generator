"use strict";
const generatePasswordBtn = document.getElementById("btn");
const copyTextBtn = document.getElementById("copytext");
const passwordInput = document.getElementById("password");
const lengthOfPassword = document.getElementById("passwordLength");

// Checkbox
const selectUppercase = document.getElementById("checkbox-uppercase");
const selectlowerCase = document.getElementById("checkbox-lowercase");
const selectDigits = document.getElementById("checkbox-digits");
const selectSpecials = document.getElementById("checkbox-specials");

// Generate password when the user clicks on generatePassword
const allCharacters = {
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  digits: "0123456789",
  specials: "~!@#$%^&*()_+:|<>?",
};

// Generating random password text after user has selected password content
function generatePassword(characters, passwordLength) {
  let password = "";

  while (passwordLength > password.length) {
    const randomIndex = Math.floor(Math.random() * (characters.length - 1));
    password += characters[randomIndex];
  }

  return password;
}

// User's Password content
function handleGeneratePassword() {
  const characters = [];

  if (selectUppercase.checked) {
    characters.push(allCharacters.upperCase);
  }

  if (selectlowerCase.checked) {
    characters.push(allCharacters.lowerCase);
  }

  if (selectDigits.checked) {
    characters.push(allCharacters.digits);
  }

  if (selectSpecials.checked) {
    characters.push(allCharacters.specials);
  }

  if (characters.length === 0) {
    alert("Please select an input to get an output");
    return;
  }

  passwordInput.value = generatePassword(
    characters.join(""),
    // Updating the user's password length
    lengthOfPassword.value
  );
}

// Copy password after it has been generated.
function copyPassword() {
  passwordInput.select();
  document.execCommand("copy");
}

function main() {
  generatePasswordBtn.addEventListener("click", handleGeneratePassword);
  copyTextBtn.addEventListener("click", copyPassword);
  lengthOfPassword.addEventListener("input");
}

main();
