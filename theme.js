fetch("theme.json")
  .then(res => res.json())
  .then(data => {
    console.log("Theme loaded");

    const btn = document.getElementById("theme-toggle");

    if (!btn) {
      console.log("Butonul nu există!");
      return;
    }

    let theme = localStorage.getItem("theme") || data.defaultTheme;

    applyTheme(theme);
    btn.innerHTML = data.themes[theme].icon;

    btn.addEventListener("click", () => {
      theme = theme === "dark" ? "light" : "dark";
      applyTheme(theme);
      btn.innerHTML = data.themes[theme].icon;
      localStorage.setItem("theme", theme);
    });

    function applyTheme(t) {
      document.body.classList.remove("light-mode", "dark-mode");
      document.body.classList.add(data.themes[t].class);
    }
  })
  .catch(err => console.error("Eroare:", err));