const input_checked = document.querySelector(".input__checkbox");

input_checked.addEventListener("change", function () {
  if (this.checked) {
    document.querySelector(".toggle").style.backgroundColor = "black";
  } else {
    document.querySelector(".toggle").style.backgroundColor = "transparent";
  }
});
