// script.js

// --- Header winkelwagen ---
const winkelmandIcon = document.querySelector("header .winkelmand-icon");

if (winkelmandIcon) {
  winkelmandIcon.addEventListener("click", function (event) {
    event.preventDefault();
    winkelmandIcon.classList.add("geklikt");
    setTimeout(() => {
      winkelmandIcon.classList.remove("geklikt");
    }, 400);
  });
}

// --- Alle winkelwagen-iconen ---
const productCarts = document.querySelectorAll("article .cart-icon");
const popup = document.querySelector(".cart-popup");

if (productCarts.length > 0 && popup) {
  productCarts.forEach(function (icon) {
    icon.addEventListener("click", function (event) {
      event.preventDefault();

      // Toon popup
      popup.classList.add("show");

      // Verberg popup na 2s
      setTimeout(() => {
        popup.classList.remove("show");
      }, 2000);
    });
  });
}

// --- Slider (font size) ---
const slider = document.getElementById("fontSlider");
const fontValue = document.getElementById("fontValue");

if (slider && fontValue) {
  slider.addEventListener("input", () => {
    const px = slider.value + "px";
    document.documentElement.style.setProperty("--base-font-size", px);
    fontValue.textContent = px; // update de tekst
  });
}

// --- Hamburger menu ---
document.addEventListener("DOMContentLoaded", () => {
  const openButton = document.querySelector(".menu-open");
  const closeButton = document.querySelector(".menu-close");
  const menuPanel = document.querySelector(".menu-panel");

  if (openButton && closeButton && menuPanel) {
    openButton.addEventListener("click", () => {
      menuPanel.classList.add("toonMenu");
    });

    closeButton.addEventListener("click", () => {
      menuPanel.classList.remove("toonMenu");
    });

    // : sluiten met Escape
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        menuPanel.classList.remove("toonMenu");
      }
    });
  }
});


const carrousel = document.querySelector("main > section > ul:first-of-type");
const indicators = document.querySelectorAll(".carrousel-indicator li");

carrousel.addEventListener("scroll", () => {
  const index = Math.round(carrousel.scrollLeft / carrousel.offsetWidth);
  indicators.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
});
