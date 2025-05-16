document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.nav-menu');
  
  toggle?.addEventListener('click', () => {
    menu.classList.toggle('active');
  });
  
});

// Get all sections and nav links
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

// Function to update active link
function updateActiveLink() {
  if (window.scrollY < 100) { 
    navLinks.forEach(link => link.classList.remove("active"));
    return;
  }

  let index = sections.length;
  while (--index && window.scrollY + 50 < sections[index].offsetTop) {}
  
  navLinks.forEach(link => link.classList.remove("active"));
  navLinks[index]?.classList.add("active");
}

window.addEventListener("scroll", updateActiveLink);
window.addEventListener("load", updateActiveLink);