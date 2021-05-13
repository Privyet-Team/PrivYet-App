document.addEventListener("DOMContentLoaded", () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach((el) => {
      el.addEventListener("click", () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
});

const fileInput = document.querySelector("#file-js-example input[type=file]");
fileInput.onchange = () => {
  if (fileInput.files.length > 0) {
    const fileName = document.querySelector("#file-js-example .file-name");
    fileName.textContent = fileInput.files[0].name;
  }
};

const imgDiv = document.querySelector(".profile-pic-div");
const img = document.querySelector("#photo");
const file = document.querySelector("#file");
const uploadBtn = document.querySelector("#uploadBtn");

imgDiv.addEventListener("mouseenter", function () {
  uploadBtn.style.display = "block";
});

imgDiv.addEventListener("mouseleave", function () {
  uploadBtn.style.display = "none";
});

//when we choose a Photo to upload

file.addEventListener("change", function () {
  //this refers to a file
  const choosedFile = this.files[0];

  if (choosedFile) {
    const reader = new FileReader(); //FileReader is a predefined function of JS

    reader.addEventListener("load", function () {
      img.setAttribute("src", reader.result);
    });

    reader.readAsDataURL(choosedFile);
  }
});

const keyChangeBtn = document.querySelector("#changeKey");
const readBtn = document.querySelector("#speak");
const code = document.querySelector("#code");
const input = document.querySelector("#uinput");
const submitBtn = document.querySelector("#btn");

//now if user click on ckange key button then

keyChangeBtn.addEventListener("click", function () {
  code.textContent = createCaptcha();
});

//also if window is refresed then

window.addEventListener("load", function () {
  code.textContent = createCaptcha();
});

//now lets create the function

function createCaptcha() {
  let letters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ];

  let a = letters[Math.floor(Math.random() * letters.length)];
  let b = letters[Math.floor(Math.random() * letters.length)];
  let c = letters[Math.floor(Math.random() * letters.length)];
  let d = letters[Math.floor(Math.random() * letters.length)];
  let e = letters[Math.floor(Math.random() * letters.length)];
  let f = letters[Math.floor(Math.random() * letters.length)];
  let g = letters[Math.floor(Math.random() * letters.length)];

  let code = a + b + c + d + e + f + g;

  return code;
}

submitBtn.addEventListener("click", function () {
  let inpValue = input.value;
  if (inpValue == "") {
    alert("Please enetr the key");
  } else if (inpValue === code.textContent) {
    alert("Valid Code Redirect Where You Want");
  } else {
    alert("Invalid Code! Try Again");
  }
});

readBtn.addEventListener("click", function () {
  let text = code.textContent;
  responsiveVoice.speak(text);
});

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
