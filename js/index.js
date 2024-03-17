const buttonMenu = document.querySelector(".site-header__button-menu");
const menu = document.querySelector(".site-header__menu");
buttonMenu.addEventListener("click", () => {
  menu.classList.remove("hidden");
  buttonMenu.classList.add("hidden");
});

const allMenuLink = document.querySelectorAll(".menu-link");

allMenuLink.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.add("hidden");
    buttonMenu.classList.remove("hidden");
  });
});

const experienceContainers = document.querySelectorAll(".experience-detail");

experienceContainers.forEach((container) => {
  const moreDetail = container.querySelector(".experience-detail__infos");
  const seeMore = container.querySelector(".experience-detail__more");
  const seeLess = container.querySelector(".experience-detail__less");

  seeMore.addEventListener("click", () => {
    moreDetail.classList.remove("hidden");
    seeMore.classList.add("hidden");
    seeLess.classList.remove("hidden");
  });

  seeLess.addEventListener("click", () => {
    moreDetail.classList.add("hidden");
    seeMore.classList.remove("hidden");
    seeLess.classList.add("hidden");
  });
});
