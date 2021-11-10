const skills = document.querySelectorAll(".skils__item");

skills.forEach((skill) => {
  skill.querySelector(".skils__line").style.transitionDuration = `3s`;
  skill.querySelector(".skils__line").style.opacity = `1`;
  skill.querySelector(".skils__line").style.width =
    skill.querySelector(".skils__item-num").innerHTML;
});

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
  smoothLink.addEventListener("click", function (e) {
    e.preventDefault();
    const id = smoothLink.getAttribute("href");

    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

document.querySelector(".menu-btn").addEventListener("click", function () {
  document.querySelector(".menu-btn span").classList.toggle("active");
  document.querySelector(".menu__list").classList.toggle("active");
});

document.querySelector(".menu__list").addEventListener("click", function () {
  document.querySelector(".menu-btn span").classList.toggle("active");
  document.querySelector(".menu__list").classList.toggle("active");
});

let scrollToTopBtn = document.querySelector(".logo");
let rootElement = document.documentElement;

function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
scrollToTopBtn.addEventListener("click", scrollToTop);
