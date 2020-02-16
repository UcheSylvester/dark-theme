const checkbox = document.querySelector("input[name=theme]");
const html = document.documentElement;

const toggleTheme = e => {
  if (e.target.checked) {
    trans();

    html.setAttribute("data-theme", "dark");
  } else {
    trans();
    html.setAttribute("data-theme", "light");
  }
};

checkbox.addEventListener("change", toggleTheme);

// Give the page transtion
const trans = () => {
  html.classList.add("transition");

  setTimeout(() => {
    html.classList.remove("transition");
  }, 1000);
};
