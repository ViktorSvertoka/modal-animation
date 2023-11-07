const buttons = document.querySelectorAll(".button");
buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    const buttonId = this.getAttribute("id");

    const modalContainer = document.getElementById("modal-container");
    modalContainer.removeAttribute("class");
    modalContainer.classList.add(buttonId);
    document.body.classList.add("modal-active");
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        modalContainer.classList.add("out");
        document.body.classList.remove("modal-active");
      }
    });
  });
});

const modalContainer = document.getElementById("modal-container");
modalContainer.addEventListener("click", function () {
  this.classList.add("out");
  document.body.classList.remove("modal-active");
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    modalContainer.classList.remove("out");
    document.body.classList.remove("modal-active");
  }
});
