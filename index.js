// ANIMATION
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

// NAVIGATION BAR
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    // toggle nav
    nav.classList.toggle("nav-active");

    // animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation =
          link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`;
      }
    });

    // burger animation
    burger.classList.toggle("toggle");
  });
};

navSlide();

// PRELOADER

const startTime = performance.now();
const loader = document.getElementById("preloader");
const line = document.querySelector(".line");

window.addEventListener("load", () => {
  const loadTime = (performance.now() - startTime) / 1000; // in seconds
  line.style.setProperty("--loading-duration", `${loadTime}s `);
  loader.style.display = "none";
});

// NAV MENU DRINKS AND FOODS

document.addEventListener("DOMContentLoaded", function () {
  const drinksMenu = document.getElementById("drinks-menu");
  const foodsMenu = document.getElementById("foods-menu");
  const drinksSection = document.getElementById("drinks-section");
  const foodsSection = document.getElementById("foods-section");

  drinksMenu.addEventListener("click", function () {
    drinksSection.style.display = "block";
    foodsSection.style.display = "none";
  });

  foodsMenu.addEventListener("click", function () {
    foodsSection.style.display = "block";
    drinksSection.style.display = "none";
  });
});

const openBtn = document.getElementById("open-cart-btn");
const cart = document.getElementById("sidecart");
const closeBtn = document.getElementById("close-btn");
const backdrop = document.querySelector(".backdrop");

openBtn.addEventListener("click", openCart);
closeBtn.addEventListener("click", closeCart);
backdrop.addEventListener("click", closeCart);

// open cart
function openCart() {
  cart.classList.add("open");
  backdrop.style.display = "block";
  setTimeout(() => {
    backdrop.classList.add("show");
  }, 0);
}

function closeCart() {
  cart.classList.remove("open");
  backdrop.classList.remove("show");
  setTimeout(() => {
    backdrop.style.display = none;
  }, 500);
}
