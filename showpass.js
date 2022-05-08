const showElement = document.getElementById("show");
const inputPass = document.getElementById("password");
const statusPass = document.querySelector(".register--pass__show");
showElement.addEventListener("click", showPass);
function showPass() {
  if (inputPass.type === "text") {
    statusPass.textContent = "show";
    return (inputPass.type = "password");
  }
  if (inputPass.type === "password") {
    statusPass.textContent = "hide";

    return (inputPass.type = "text");
  }
}
