const image_input = document.querySelector("#input-file");
let upload_image = "";
image_input.addEventListener("change", function () {
  const render = new FileReader();
  render.addEventListener("load", () => {
    upload_image = render.result;
    document.getElementById(
      "display"
    ).style.backgroundImage = `url(${upload_image})`;
  });
  render.readAsDataURL(this.files[0]);
});
