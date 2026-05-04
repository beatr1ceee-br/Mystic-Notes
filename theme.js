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