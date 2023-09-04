const body = document.querySelector("body");
const themeSelector = document.querySelector("select");

themeSelector.addEventListener("change", changeTheme);

function changeTheme() {
  body.dataset.theme = themeSelector.value;
}
