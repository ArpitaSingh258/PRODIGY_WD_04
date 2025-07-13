// Smooth scroll for navigation links
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const section = document.querySelector(link.getAttribute("href"));
    section.scrollIntoView({ behavior: "smooth" });
  });
});

// Scroll-to-top button (optional enhancement)
const scrollToTopButton = document.createElement("button");
scrollToTopButton.textContent = "↑";
scrollToTopButton.style.position = "fixed";
scrollToTopButton.style.bottom = "30px";
scrollToTopButton.style.right = "30px";
scrollToTopButton.style.padding = "10px 15px";
scrollToTopButton.style.fontSize = "20px";
scrollToTopButton.style.border = "none";
scrollToTopButton.style.borderRadius = "50%";
scrollToTopButton.style.backgroundColor = "#d78acb";
scrollToTopButton.style.color = "white";
scrollToTopButton.style.cursor = "pointer";
scrollToTopButton.style.display = "none";
scrollToTopButton.title = "Scroll to Top";

document.body.appendChild(scrollToTopButton);

scrollToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
});