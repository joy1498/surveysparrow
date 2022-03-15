const resDiv = document.querySelector("#results");
const resBtn = document.querySelector("#getData");

resBtn.addEventListener("click", () => {
  generateAdvice();
});

generateAdvice = () => {
  fetch("https://api.adviceslip.com/advice")
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      resDiv.innerHTML = '"' + data.slip.advice + '."';
    });
};
