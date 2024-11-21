const openMenu = document.getElementById("open__menu");
const aside = document.querySelector(".aside");

export const open = () => {
  openMenu.addEventListener("click", () => {
    aside.classList.toggle("open");
  });
};
