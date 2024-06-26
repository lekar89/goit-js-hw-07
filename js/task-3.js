const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");
textInput.addEventListener("input", (event) => {
  textOutput.textContent = event.currentTarget.value.trim();
  if (event.currentTarget.value == 0) textOutput.textContent = "Anonymous";
});
