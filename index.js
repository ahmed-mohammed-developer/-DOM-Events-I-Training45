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


function number_sum(num) {
  // write your code here
  let sum = 0;
  for (let i=1; i <= num; i++){
    sum += i;
  }
  return sum;
}
console.log(number_sum(13))
