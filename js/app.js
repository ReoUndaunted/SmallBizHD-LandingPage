// JavaScript for form validation
var form = document.querySelector("form");

form.onsubmit = function (event) {
  event.preventDefault();

  var name = document.querySelector("#name").value;
  var email = document.querySelector("#email").value;

  if (!name) {
    alert("Please enter your name");
    return;
  }

  if (!email) {
    alert("Please enter your email");
    return;
  }

  if (!validateEmail(email)) {
    alert("Please enter a valid email");
    return;
  }

  alert("Form submitted successfully!");
};

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
