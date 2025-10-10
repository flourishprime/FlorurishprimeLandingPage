// modal 
function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    const overlay = document.getElementById('overlay');
    menu.classList.toggle('-translate-x-full');
}

// Events Dropdown
const dropdown = document.querySelector(".dropdown");
const button = dropdown.querySelector(".dropbtn");

// Toggle dropdown on click
button.addEventListener("click", () => {
  dropdown.classList.toggle("show");
});

// Close when clicking outside
window.addEventListener("click", (e) => {
  if (!dropdown.contains(e.target)) {
    dropdown.classList.remove("show");
  }
});


// Resources Dropdown
const dropdown2 = document.querySelector(".dropdown2");
const button2 = dropdown2.querySelector(".dropbtn2");

// Toggle dropdown2 on click
button2.addEventListener("click", () => {
  dropdown2.classList.toggle("show");
});

// Close when clicking outside
window.addEventListener("click", (e) => {
  if (!dropdown2.contains(e.target)) {
    dropdown2.classList.remove("show");
  }
});

// accordion
function toggleAccordion(id) {
  const panel = document.getElementById(`panel-${id}`);
  const icon = document.getElementById(`icon-${id}`);

  const isOpen = !panel.classList.contains("hidden");
  if (isOpen) {
      panel.classList.add("hidden");
      icon.classList.replace("bi-chevron-up", "bi-chevron-down");
  } else {
      panel.classList.remove("hidden");
      icon.classList.replace("bi-chevron-down", "bi-chevron-up");
  }
}

// accordion 2

const accordions = document.querySelectorAll(".accordion-toggle");
  accordions.forEach((accordion) => {
  const button = accordion.querySelector("button");
  const content = accordion.querySelector(".accordion-content");
  const icon = accordion.querySelector("svg");

  button.addEventListener("click", () => {
    const isOpen = content.style.maxHeight;

    // Close all others
    document.querySelectorAll(".accordion-content").forEach((c) => {
      c.style.maxHeight = null;
    });
    document.querySelectorAll(".accordion-toggle svg").forEach((i) => {
      i.classList.remove("rotate-180");
    });

    // Toggle current one
    if (!isOpen) {
      content.style.maxHeight = content.scrollHeight + "px";
      icon.classList.add("rotate-180");
    } else {
      content.style.maxHeight = null;
    }
  });
});


