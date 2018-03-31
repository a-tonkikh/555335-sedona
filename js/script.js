var button = document.querySelector(".form-search");
var modal = document.querySelector(".hotel-search");
var form = modal.querySelector("form");
var arrive = modal.querySelector("[name=arrive]");
var leave = modal.querySelector("[name=leave]");
var adult = modal.querySelector("[name=adult]");
var child = modal.querySelector("[name=child]");
var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("arrive");
} catch (err) {
  isStorageSupport = false;
}

button.addEventListener("click", function(evt) {
  evt.preventDefault();
  modal.classList.toggle("form-show");
});

form.addEventListener("submit", function(evt) {
  evt.preventDefault();
  if (isStorageSupport) {
    localStorage.setItem("adult", adult.value);
    localStorage.setItem("child", child.value);
  }
});
