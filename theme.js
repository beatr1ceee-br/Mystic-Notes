const btn = document.getElementById("theme-toggle");

if (btn) {
    let theme = localStorage.getItem("theme") || "light";

    // aplică tema la încărcare
    applyTheme(theme);
    updateIcon(theme);

    btn.addEventListener("click", () => {
        theme = theme === "dark" ? "light" : "dark";

        applyTheme(theme);
        updateIcon(theme);

        localStorage.setItem("theme", theme);
    });
}

function applyTheme(theme) {
    if (theme === "dark") {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
    }
}

function updateIcon(theme) {
    const btn = document.getElementById("theme-toggle");
    btn.textContent = theme === "dark" ? "☀️" : "🌙";
}



document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("theme-toggle");

  if (!btn) return;

  const saved = localStorage.getItem("theme");

  if (saved) {
    document.documentElement.setAttribute("data-theme", saved);
    btn.textContent = saved === "dark" ? "☀️" : "🌙";
  }

  btn.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");

    if (current === "dark") {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
      btn.textContent = "🌙";
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      btn.textContent = "☀️";
    }
  });
});