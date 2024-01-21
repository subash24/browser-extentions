const pxInput = document.querySelector(".px-input");
const unitInput = document.querySelector(".unit-input");
const remInput = document.querySelector(".rem-input");
const copyMessage = document.querySelector(".copy-message");

pxInput.addEventListener("input", (e) => {
  remInput.value = e.target.value / 16;
  unitInput.value = e.target.value / 4;
});
unitInput.addEventListener("input", (e) => {
  pxInput.value = e.target.value * 4;
  remInput.value = e.target.value / 4;
});
remInput.addEventListener("click", (e) => {
  if (e.target.value === "") {
    return;
  }
  copyMessage.classList.remove("animate-fade");
  navigator.clipboard.writeText(`${e.target.value} rem`);
  setTimeout(function () {
    copyMessage.classList.add("animate-fade");
  }, 0.1);
});
