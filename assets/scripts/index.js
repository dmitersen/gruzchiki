const menuItems = document.querySelectorAll(".menu__item");
const mobileMenuItems = document.querySelectorAll(".mobile-menu__item");
const mobileMenuOverlay = document.querySelector(".mobile-menu__overlay");
const mobileMenuContainer = document.querySelector(".mobile-menu__container");
const burgerIcon = document.querySelector(".burger-icon");


const listenMenu = (menu, activeSelector) => {
  menu.forEach((item) => {
    item.addEventListener("click", function () {
      menu.forEach((item) => item.classList.remove(activeSelector));
      this.classList.add(activeSelector);

      
      if (menu === mobileMenuItems) {
        mobileMenuOverlay.classList.remove("mobile-menu__overlay--open");
      }
    });
  });
};


listenMenu(menuItems, "menu__item--active");
listenMenu(mobileMenuItems, "mobile-menu__item--active");


const initSwiper = (selector, params) =>
  new Swiper(selector, {
    direction: "horizontal",
    ...params,
  });


initSwiper(".hot-items", {
  pagination: {
    el: ".hot__pagination",
    bulletClass: "hot__pagination-bullet",
    bulletActiveClass: "hot__pagination-bullet--active",
  },
  navigation: {
    nextEl: ".hot__button-next",
    prevEl: ".hot__button-prev",
  },
});


initSwiper(".cars-carousel", {
  slidesPerView: 3.2,
  spaceBetween: 16,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    440: {
      slidesPerView: 2,
    },
    720: {
      slidesPerView: 3,
    },
  },
  navigation: {
    nextEl: ".cars-carousel__button-next",
    prevEl: ".cars-carousel__button-prev",
  },
});

burgerIcon.addEventListener("click", () => {
  mobileMenuOverlay.classList.add("mobile-menu__overlay--open");
});

mobileMenuOverlay.addEventListener("click", () =>
  mobileMenuOverlay.classList.remove("mobile-menu__overlay--open")
);

// 
mobileMenuContainer.addEventListener("click", (e) => e.stopPropagation());
