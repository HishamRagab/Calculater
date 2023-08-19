let calculator = document.querySelector(".calculator");
let circle = document.querySelector(".circle");
let result = document.querySelector("input[type='text']");
let buttons = document.querySelectorAll("input[type='button']");

////////////////////////////////////////

buttons.forEach(function (btn) {
  btn.onclick = function () {
    if (btn.value === "AC") {
      result.value = "";
    } else if (btn.value === "DE") {
      result.value = result.value.toString().slice(0, -1);
    } else if (btn.value === "×") {
      result.value += "*";
    } else if (btn.value === "÷") {
      result.value += "/";
    } else if (btn.value === "=") {
      result.value = eval(result.value);
    } else {
      result.value += btn.value;
    }
  };
});

////////////////////////////////////////

circle.onclick = function () {
  calculator.classList.toggle("dark");
};

////////////////////////////////////////
