const toastBox = document.getElementById("toast-box");
let msgSuccess =
  '<i class="fa-solid fa-circle-check"></i> Successfully submitted.';
let msgError = '<i class="fa-solid fa-circle-xmark"></i> Fix the error.';
let msgInvalid =
  '<i class="fa-solid fa-circle-exclamation"></i> Invalid input, check again.';

function toast(msg) {
  let eleToast = document.createElement("div");
  eleToast.classList.add("toast");
  eleToast.innerHTML = msg;
  toastBox.appendChild(eleToast);

  if (msg.includes("error")) {
    eleToast.classList.add("error");
  }
  if (msg.includes("Invalid")) {
    eleToast.classList.add("invalid");
  }

  setTimeout(() => {
    toastBox.remove();
  }, 5000);
}
