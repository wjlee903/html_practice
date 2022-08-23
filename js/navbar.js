const toggleBtn = document.querySelector(`.navbar_toggleBtn`);
const item = document.querySelector(`.navbar_item`);
const icon = document.querySelector(`.navbar_icon`);

toggleBtn.addEventListener("click", function () {
  item.classList.toggle("active");
  icon.classList.toggle("active");
});
