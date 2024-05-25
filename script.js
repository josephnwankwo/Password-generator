"use strict";
const generatePassword = document.getElementById("btn");
const copyText = document.getElementById("copytext");
const password = document.getElementById("password");
const lengthOfPassword = document.getElementById("passwordLength");

// Checkbox
const selectUppercase = document.getElementById("checkbox-uppercase");
const selectlowerCase = document.getElementById("checkbox-lowercase");
const selectDigits = document.getElementById("checkbox-digits");
const selectSpecials = document.getElementById("checkbox-specials");

// Generate password when the user clicks on generatePassword
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const digits = "0123456789";
const specials = "~!@#$%^&*()_+:|<>?";
const length = 10;
const allCharacters = [];

// lengthOfPassword.addEventListener("input", function (event) {
//   let generatedPassword = "";
//   const input = lengthOfPassword.value;

//   while (input > generatedPassword.length) {
//     generatedPassword +=
//       allCharacters[Math.floor(Math.random() * allCharacters.length)];
//   }

//   password.value = generatedPassword;
// });

generatePassword.addEventListener("click", function () {
  let generatedPassword = "";

  while (length > generatedPassword.length) {
    generatedPassword +=
      allCharacters[Math.floor(Math.random() * allCharacters.length)];
  }

  password.value = generatedPassword;

  if (selectUppercase.checked) {
    allCharacters.unshift(upperCase);
    alert("checked");
  } else if (selectlowerCase.checked) {
    allCharacters.push(lowerCase);
    alert("checkeds");
  } else if (selectDigits.checked) {
    allCharacters.push(digits);
    alert("checke");
  } else if (selectSpecials.checked) {
    allCharacters.push(specials);
    alert("checkedss");
  } else {
    alert("Please select an input to get an output");
  }
  console.log(generatedPassword, selectUppercase, allCharacters);
});

// Copy password after it has been generated.
copyText.addEventListener("click", function () {
  password.select();
  document.execCommand("copy");
});
