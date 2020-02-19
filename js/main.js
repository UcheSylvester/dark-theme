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

// GRAPHQL

getCharacterQuery = () => {
  return JSON.stringify({
    query: `
    {
      launches {
        launches {
          id
        }
      }
    }
    `
  });
};

fetch("http://localhost:4000/", {
  method: "POST",
  headers: { "Content-Type": "Application/json" },
  body: getCharacterQuery()
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));
