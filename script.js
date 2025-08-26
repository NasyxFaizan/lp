const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".job-panel");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // Remove active class from all
    tabs.forEach((t) => t.classList.remove("active"));
    panels.forEach((p) => p.classList.remove("active"));

    // Add active class to selected
    tab.classList.add("active");
    const activePanel = document.getElementById(tab.getAttribute("data-tab"));
    activePanel.classList.add("active");
  });
});

document.querySelectorAll(".toggle-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const moreText = btn.previousElementSibling.querySelector(".more-text");
    const isShown = moreText.style.display === "inline";

    moreText.style.display = isShown ? "none" : "inline";
    btn.textContent = isShown ? "Show More" : "Show Less";
    btn.setAttribute("aria-expanded", !isShown);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector(".about-section");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          section.classList.add("show");
        }
      });
    },
    { threshold: 0.1 }
  );

  observer.observe(section);
});

// Scroll progress bar
const progressBar = document.getElementById('scrollProgressBar');
function updateScrollProgress() {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const progress = Math.min(100, Math.max(0, (scrollTop / docHeight) * 100));
  progressBar.style.width = progress + '%';
}

window.addEventListener('scroll', updateScrollProgress, { passive: true });
window.addEventListener('resize', updateScrollProgress);
updateScrollProgress();
