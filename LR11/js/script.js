let windowForm = document.querySelector(".departur_window");

let ByTicketBtn = document.getElementById("concert-map");

let sendFormBtn = document.getElementById("sendForm");

let mainForm = document.querySelector("form");

ByTicketBtn.addEventListener("click", (event) => {
  let variable = event.target;

  if (variable.classList.contains("button")) {
    windowForm.style.display = "block";
  }
});

sendFormBtn.addEventListener("click", (event) => {
  if (!confirm("Відправити дані?")) {
    event.preventDefault();
    alert("Дані не було відправлено");
    alert("Спробуйте знову");
    mainForm.reset();
    windowForm.style.display = "none";
  }
});
