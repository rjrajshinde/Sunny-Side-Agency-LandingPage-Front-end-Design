const menu_btn = document.getElementById("open-menu-hamburger");
const close_menu_btn = document.getElementById("close-menu-hamburger");
const nav = document.getElementById("nav");
// const ul = document.getElementById("ul");

menu_btn.addEventListener("click", () => {
  close_menu_btn.style.display = "flex";
  menu_btn.style.display = "none";
  nav.classList.add("menu-btn");
});

close_menu_btn.addEventListener("click", () => {
  close_menu_btn.style.display = "none";
  menu_btn.style.display = "flex";
  nav.classList.remove("menu-btn");
});
