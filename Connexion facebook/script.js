var validation = document.getElementById("submit");
var email = document.getElementById("email")
var email_m = document.getElementById("email_manquant");
var email_v = /^[a-zA-Z0-9.!#$%&’*+/=?^_{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z]{2,})$/;
validation.addEventListener("click", f_valid);


function f_valid(e) {
    if (email.validity.valueMissing) {
        e.preventDefault();
        email_m.textContent = "E-mail manquant";
        email_m.style.color = "red";
    } else if (!email_v.test(email.value)) {
        e.preventDefault();
        email_m.textContent = "Format d'e-mail invalide";
        email_m.style.color = "red";
    } else {
        email_m.textContent = "";
    }
}

theme = document.getElementById("theme");
theme.addEventListener("click", mode);

function mode() {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
        theme.value = "Theme clair";
      } else {
        theme.value = "Theme sombre";
      }
}
