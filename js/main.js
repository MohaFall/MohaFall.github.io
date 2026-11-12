// Mobile menu: show or hide the links when the "Menu" button is clicked.
const toggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
  const isOpen = links.classList.toggle("open");
  toggle.setAttribute("aria-expanded", isOpen);
});

// Close the menu after clicking a link (otherwise it stays open over the page).
links.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    links.classList.remove("open");
    toggle.setAttribute("aria-expanded", false);
  }
});

// Always show the current year in the footer.
document.querySelector("#year").textContent = new Date().getFullYear();
