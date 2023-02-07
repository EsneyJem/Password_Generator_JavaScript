const passwEl = document.querySelector("#passw");
const copyEl = document.querySelector("#copy");
const lengthEl = document.querySelector("#length");
const upperEl = document.querySelector("#upper");
const lowerEl = document.querySelector("#lower");
const numberEl = document.querySelector("#number");
const symbolEl = document.querySelector("#symbol");
const generateEl = document.querySelector("#generate");

const upperLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetter = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=";

function getLowercase() {
  return lowerLetter[Math.floor(Math.random() * lowerLetter.length)];
}

function getUppercase() {
  return upperLetter[Math.floor(Math.random() * upperLetter.length)];
}

function getNumbers() {
  return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbols() {
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword() {
  const len = lengthEl.value;

  let password = "";

  if (upperEl.checked) {
    password += getUppercase();
  }

  if (lowerEl.checked) {
    password += getLowercase();
  }

  if (numberEl.checked) {
    password += getNumbers();
  }

  if (symbolEl.checked) {
    password += getSymbols();
  }

  for (let i = password.length; i < len; i++) {
    const x = generateX();
    password += x;
  }

  passwEl.innerHTML = password;
}

function generateX() {
  const xs = [];
  if (upperEl.checked) {
    xs.push(getUppercase());
  }

  if (lowerEl.checked) {
    xs.push(getLowercase());
  }

  if (numberEl.checked) {
    xs.push(getNumbers());
  }

  if (symbolEl.checked) {
    xs.push(getSymbols());
  }

  if (xs.length === 0) return " ";

  return xs[Math.floor(Math.random() * xs.length)];
}

generateEl.addEventListener("click", generatePassword);

copyEl.addEventListener("click", () => {
  doCopy();
});

async function doCopy() {
  const textArea = document.createElement("textArea");
  const copyText = passwEl.innerHTML;

  textArea.value = copyText;
  document.body.appendChild(textArea);
  textArea.select();
  textArea.remove();
  try {
    await navigator.clipboard.writeText(textArea.value);
    console.log("Content copied to clipboard");
  } catch (err) {
    console.error("Failed to copy:  ", err);
  }
}
