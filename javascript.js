const manualBtn = document.querySelectorAll(".manual-btn");
let count = 1;
manualBtn.forEach((element, idx) => {
  element.addEventListener("click", (e) => {
    count = idx + 1;
  });
});
setInterval(function () {
  document.getElementById("radio" + count).checked = true;
  count++;
  if (count > 4) count = 1;
}, 5000);
