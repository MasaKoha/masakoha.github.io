const revealTargets = document.querySelectorAll(".reveal");
const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

if (!("IntersectionObserver" in window) || prefersReducedMotion) {
  revealTargets.forEach((element) => {
    element.classList.add("is-visible");
  });
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.16,
    }
  );

  revealTargets.forEach((element) => {
    observer.observe(element);
  });
}

// Hamburger menu toggle
(function () {
  var hamburger = document.querySelector(".hamburger");
  var topnav = document.querySelector(".topnav");
  if (!hamburger || !topnav) return;

  hamburger.addEventListener("click", function () {
    var expanded = hamburger.getAttribute("aria-expanded") === "true";
    hamburger.setAttribute("aria-expanded", String(!expanded));
    topnav.classList.toggle("is-open");
  });

  topnav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      hamburger.setAttribute("aria-expanded", "false");
      topnav.classList.remove("is-open");
    });
  });

  var dropdownToggle = document.querySelector(".nav-dropdown-toggle");
  var dropdown = document.querySelector(".nav-dropdown");
  if (!dropdownToggle || !dropdown) return;

  dropdownToggle.addEventListener("click", function (e) {
    e.stopPropagation();
    var expanded = dropdownToggle.getAttribute("aria-expanded") === "true";
    dropdownToggle.setAttribute("aria-expanded", String(!expanded));
    dropdown.classList.toggle("is-open");
  });

  document.addEventListener("click", function (e) {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove("is-open");
      dropdownToggle.setAttribute("aria-expanded", "false");
    }
  });
})();
