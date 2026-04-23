const beeBtn    = document.getElementById("beeBtn");
const overlay   = document.getElementById("overlay");
const lastSlide = document.querySelector(".slides5");

// Show bee button only when last slide is in view
const observer = new IntersectionObserver(
  ([entry]) => {
    beeBtn.classList.toggle("bee-visible", entry.isIntersecting);
  },
  { threshold: 0.5 }
);
observer.observe(lastSlide);

beeBtn.addEventListener("click", () => overlay.classList.add("open"));

function closeModal() {
  overlay.classList.remove("open");
}

overlay.addEventListener("click", (e) => {
  if (e.target === overlay) closeModal();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

function handleSubscribe() {
  const email = document.getElementById("emailInput").value.trim();
  if (!email || !email.includes("@")) {
    document.getElementById("emailInput").focus();
    return;
  }
  document.getElementById("formView").style.display = "none";
  const sv = document.getElementById("successView");
  sv.style.display = "flex";
}