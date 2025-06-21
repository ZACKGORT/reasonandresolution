// script.js

// Project data with minimalist titles
const projects = [
  { id: 1, title: "Silence",   year: "2021", image: "https://cdn.cosmos.so/7d47d4e2-0eff-4e2f-9734-9d24a8ba067e?format=jpeg" },
  { id: 2, title: "Resonance", year: "2022", image: "https://cdn.cosmos.so/5eee2d2d-3d4d-4ae5-96d4-cdbae70a2387?format=jpeg" },
  { id: 3, title: "Essence",   year: "2022", image: "https://cdn.cosmos.so/def30e8a-34b2-48b1-86e1-07ec5c28f225?format=jpeg" },
  { id: 4, title: "Void",      year: "2023", image: "https://cdn.cosmos.so/44d7cb23-6759-49e4-9dc1-acf771b3a0d1?format=jpeg" },
  { id: 5, title: "Presence",  year: "2023", image: "https://cdn.cosmos.so/7712fe42-42ca-4fc5-9590-c89f2db99978?format=jpeg" },
  { id: 6, title: "Flow",      year: "2024", image: "https://cdn.cosmos.so/cbee1ec5-01b6-4ffe-9f34-7da7980454cf?format=jpeg" },
  { id: 7, title: "Clarity",   year: "2024", image: "https://cdn.cosmos.so/2e91a9d1-db85-4499-ad37-6222a6fea23b?format=jpeg" },
  { id: 8, title: "Breath",    year: "2024", image: "https://cdn.cosmos.so/ff2ac3d3-fa94-4811-89f6-0d008b27e439?format=jpeg" },
  { id: 9, title: "Stillness", year: "2025", image: "https://cdn.cosmos.so/c39a4043-f489-4406-8018-a103a3f89802?format=jpeg" },
  { id: 10, title: "Surrender",year: "2025", image: "https://cdn.cosmos.so/e5e399f2-4050-463b-a781-4f5a1615f28e?format=jpeg" }
];

document.addEventListener("DOMContentLoaded", () => {
  const projectsContainer = document.querySelector(".projects-container");
  const backgroundImage   = document.getElementById("background-image");

  renderProjects(projectsContainer);
  initialAnimation();
  preloadImages();
  setupHoverEvents(backgroundImage, projectsContainer);
});

function renderProjects(container) {
  projects.forEach(project => {
    const item = document.createElement("div");
    item.classList.add("project-item");
    item.dataset.id    = project.id;
    item.dataset.image = project.image;
    item.innerHTML = `
      <div class="project-title">${project.title}</div>
      <div class="project-year">${project.year}</div>
    `;
    container.appendChild(item);
  });
}

function initialAnimation() {
  document.querySelectorAll(".project-item").forEach((item, i) => {
    item.style.opacity   = "0";
    item.style.transform = "translateY(20px)";
    setTimeout(() => {
      item.style.transition = "opacity 0.8s ease, transform 0.8s ease";
      item.style.opacity    = "1";
      item.style.transform  = "translateY(0)";
    }, i * 60);
  });
}

function setupHoverEvents(bg, container) {
  // Preload images
  projects.forEach(p => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src         = p.image;
  });

  document.querySelectorAll(".project-item").forEach(item => {
    item.addEventListener("mouseenter", () => {
      bg.style.transition = "none";
      bg.style.transform  = "scale(1.2)";
      bg.src              = item.dataset.image;
      bg.style.opacity    = "1";
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          bg.style.transition = "transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
          bg.style.transform  = "scale(1.0)";
        });
      });
    });
  });

  container.addEventListener("mouseleave", () => {
    bg.style.opacity = "0";
  });
}

function preloadImages() {
  projects.forEach(p => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src         = p.image;
  });
}
