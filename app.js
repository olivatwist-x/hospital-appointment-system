//Form Validation
const form = document.getElementById("appointment-form");
const contactForm = document.getElementById("contact-form");
const messageDiv = document.querySelector(".message-div");
const articles = document.querySelectorAll(".article-title");

function addMessage(e) {
  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const email = document.getElementById("email");
  const number = document.getElementById("number");
  const select = document.getElementById("select");
  const message = document.getElementById("message");

  if (
    firstName.value != "" &&
    lastName.value != "" &&
    email.value != "" &&
    number.value != "" &&
    select.value != "" &&
    message.value != ""
  ) {
    storeValuesInLS(firstName, lastName, email, number, select, message);

    showMsg(" Booked Successfully.", "rgb(105, 203, 106)");
    location.reload();
  } else {
    e.preventDefault();
    showMsg("Please fill the form.", "rgb(235, 31, 31)");
  }
}

//Add to Local Storage
function storeValuesInLS() {
  const value = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    number: number.value,
    subject: select.value,
    message: message.value
  };

  let regValue = [];

  if (localStorage.getItem("regValue") === null) {
    regValue = [];

    regValue.push(value);
    localStorage.setItem("regValue", JSON.stringify(regValue));
  } else {
    regValue = JSON.parse(localStorage.getItem("regValue"));
    regValue.push(value);
    localStorage.setItem("regValue", JSON.stringify(regValue));
  }
}

function showMsg(msg, color) {
  messageDiv.style.color = color;
  messageDiv.textContent = msg;
  messageDiv.style.display = "block";
  messageDiv.style.border = "1.5px solid rgb(172, 169, 169)";

  setTimeout(clearError, 2000);
}

function clearError() {
  messageDiv.style.display = "none";
}

//Event Listeners
if (form) {
  addEventListener("submit", addMessage);
}
if (contactForm) {
  addEventListener("submit", addMessage);
}

articles.forEach(function(article) {
  const btn = article.querySelector(".article-button");
  btn.addEventListener("mouseover", function() {
    articles.forEach(function(item) {
      if (item !== article) {
        item.classList.remove("show-text");
      }
    });

    article.classList.toggle("show-text");
  });
});
