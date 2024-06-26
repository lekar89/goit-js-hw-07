const form = document.querySelector(".login-form");
const formElements = form.querySelectorAll("input");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;
  const obj = {};
  if (email === "" || password === "") {
    alert("All form fields must be filled in");
  } else {
    obj[form.elements.email.name] = email.trim();
    obj[form.elements.password.name] = password.trim();
    console.log(obj);
  }

  form.reset();
});
