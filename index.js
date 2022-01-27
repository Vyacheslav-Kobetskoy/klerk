const menulink = document.querySelectorAll(".lead__menu-link");
const form = document.querySelector(".form");

function activeLink(evt) {
  evt.preventDefault();
  menulink.forEach((link) => {
    link.classList.remove("lead__menu-link_type_active");
  });
  evt.target.classList.add("lead__menu-link_type_active");
}

menulink.forEach((link) => {
  link.addEventListener("click", (evt) => activeLink(evt));
});

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
});
