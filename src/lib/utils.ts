export function handleBurgerClick() {
  const burger = document.querySelector("#burger");
  const nav = document.querySelector("#nav-links");
  const page = document.querySelector(".blur-bg");

  // toggle hamburger
  burger?.classList.toggle("active");
  // toggle nav
  nav?.classList.toggle("toggled");
  // toggle .blur-bg
  page?.classList.toggle("toggled");
  // const burger = document.querySelector("#burger");
  // const nav = document.querySelector(".nav");
  // const navLinks = document.querySelectorAll(".nav__link");

  // burger?.addEventListener("click", () => {
  //   nav?.classList.toggle("nav--active");
  //   burger?.classList.toggle("burger--active");
  //   navLinks.forEach((link, index) => {
  //     if (link.style.animation) {
  //       link.style.animation = "";
  //     } else {
  //       link.style.animation = `navLinkFade 0.5s ease forwards ${
  //         index / 7 + 0.5
  //       }s`;
  //     }
  //   });
  // });
}

export function handleNavClick() {
  const burger = document.querySelector("#burger");
  const nav = document.querySelector("#nav-links");
  const page = document.querySelector(".blur-bg");

  burger?.classList.remove("active");
  nav?.classList.remove("toggled");
  page?.classList.remove("toggled");
}
