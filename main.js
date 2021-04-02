const myBtn = document.querySelector("#myBtn");

//final version
myBtn.addEventListener("click", function () {
  let desiredPercent = document.querySelector("#retention").value;
  let currentPercent = document.querySelector("#current").value;
  let desired = desiredPercent / 100;
  let current = currentPercent / 100;
  let decimalForm = getInterval(desired, current);
  let suggested = Math.floor(decimalForm);
  if (currentPercent >= 100) {
    document.querySelector("h2").classList.remove("message");
    document.querySelector("h2").textContent = "You're a Genius";
  } else if (isNaN(suggested)) {
    document.querySelector("h2").classList.add("message");
    document.querySelector("h2").textContent = "Please input numbers";
  } else {
    document.querySelector("h2").classList.remove("message");
    document.querySelector("h2").textContent = `${suggested}%`;
  }
});

function getInterval(x, y) {
  return (Math.log(x) / Math.log(y)) * 100;
}
// don't forget to use .value to get the value 바보
//input as a decimal
// myBtn.addEventListener("click", function () {
//   let desired = document.querySelector("#retention").value;
//   let current = document.querySelector("#current").value;
//   let decimalForm = getInterval(desired, current);
//   let suggested = Math.floor(decimalForm);
//   document.querySelector("h2").textContent = `${suggested}%`;
// });

// function getInterval(x, y) {
//   return (Math.log(x) / Math.log(y)) * 100;
// }

//input as a %
// myBtn.addEventListener("click", function () {
//   let desiredPercent = document.querySelector("#retention").value;
//   let currentPercent = document.querySelector("#current").value;
//   let desired = desiredPercent / 100;
//   let current = currentPercent / 100;
//   let decimalForm = getInterval(desired, current);
//   let suggested = Math.floor(decimalForm);
//   document.querySelector("h2").textContent = `${suggested}%`;
// });
