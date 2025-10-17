// modal 
function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    const overlay = document.getElementById('overlay');
    menu.classList.toggle('-translate-x-full');
}

// Dropdown
function setupDropdown(menuId, btnId, dropdownId) {
  const menu = document.getElementById(menuId);
  const button = document.getElementById(btnId);
  const dropdown = document.getElementById(dropdownId);

  let hoverTimeout;

  // Show dropdown on hover
  button.addEventListener("mouseenter", () => {
    clearTimeout(hoverTimeout);
    dropdown.classList.remove("hidden");
  });

  // Keep open when hovering dropdown
  dropdown.addEventListener("mouseenter", () => {
    clearTimeout(hoverTimeout);
    dropdown.classList.remove("hidden");
  });

  // Hide when hover leaves both
  menu.addEventListener("mouseleave", () => {
    hoverTimeout = setTimeout(() => dropdown.classList.add("hidden"), 150);
  });

  // Close when a link is clicked
  dropdown.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => dropdown.classList.add("hidden"));
  });
}

setupDropdown("servicesMenu", "servicesBtn", "servicesDropdown");
setupDropdown("resourcesMenu", "resourcesBtn", "resourcesDropdown");
setupDropdown("insightsMenu", "insightsBtn", "insightsDropdown");



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


