const menuButton = document.getElementById("menu-button");
const menu = document.getElementById("menu");

menuButton.onclick = function () {
  menu.hidden = !menu.hidden;
  menuButton.setAttribute("aria-expanded", !menu.hidden);
};

menu.onclick = function (event) {
  if (event.target.tagName === "A") {
    menu.hidden = true;
    menuButton.setAttribute("aria-expanded", "false");
  }
};

const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function changeSlide(step) {
  slides[currentSlide].hidden = true;
  currentSlide = currentSlide + step;
  if (currentSlide < 0) currentSlide = slides.length - 1;
  if (currentSlide === slides.length) currentSlide = 0;
  slides[currentSlide].hidden = false;
}

document.getElementById("previous").onclick = function () {
  changeSlide(-1);
};
document.getElementById("next").onclick = function () {
  changeSlide(1);
};

document.getElementById("calculator").onsubmit = function (event) {
  event.preventDefault();
  const hours = Number(document.getElementById("hours").value);
  const rate = Number(document.getElementById("rate").value);
  const total = document.getElementById("total");
  const cost = hours * rate;
  if (hours <= 0 || rate <= 0 || !Number.isFinite(cost)) {
    total.textContent = "Введите два числа больше нуля.";
    return;
  }
  total.textContent = "Итого: " + cost.toLocaleString("ru-RU", { maximumFractionDigits: 2 }) + " ₽";
};

document.getElementById("feedback").onsubmit = function (event) {
  event.preventDefault();
  const name = document.getElementById("visitor-name").value;
  const email = document.getElementById("visitor-email").value;
  const message = document.getElementById("message").value;
  const draft = document.getElementById("draft");
  draft.textContent = "Черновик обращения\n" + name + "\n" + email + "\n\n" + message;
  draft.hidden = false;
};
