//const button = document.querySelector("#app-button");
//button.addEventListener("click", () => {
  //console.log(("Butoon Cli"))
//});
/*
 button.addEventListener("click", () => {
  setTimeout(() => {
    console.log("Hello Word")
  }, 2_000)
  button.setAttribute("disabled", "disabled");
  button.textContent = "Loading >>";
 });
 
button.addEventListener("click", (event) => {
  console.log(event.currentTarget.textContent)
});

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
  button.addEventListener("click", event => {
    console.log(event.currentTarget);
  });
})
const form = document.querySelector("#address-form");
form.addEventListener("submit", event => {
  event.preventDefault();
  console.log(event.currentTarget)
})
  */
const form = document.querySelector("#weather-form");
const city = document.querySelector("#city");
form.addEventListener("submit", event => {
  event.preventDefault();
  console.log(city.value);
});

const button = document.querySelector("button");
button.addEventListener("click", () => {
  console.log("button clicked");
}, {
  once: true
});
const button1 = document.querySelector("button1");
const result = document.querySelector("#result");
const API = new FetchWrapper("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app");
button1.addEventListener("click", () => {
  API.get("/notifications/new.json").then(data => {
    console.log(data);
    result.textContent = data.message;
  })
})
