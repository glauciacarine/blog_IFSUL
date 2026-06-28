window.onload = function () {
  const temaSalvo = localStorage.getItem("tema");
  if (temaSalvo === "dark") {
    document.body.classList.add("dark");
  }

  const fonteSalva = localStorage.getItem("fonte");
  if (fonteSalva) {
    document.body.style.fontSize = fonteSalva;
  }
};

function toggleDarkMode() {
  document.body.classList.toggle("dark");
  localStorage.setItem("tema", document.body.classList.contains("dark") ? "dark" : "light");
}

function aumentarFonte() {
  const atual = parseFloat(getComputedStyle(document.body).fontSize);
  const novo = Math.min(atual + 1, 24) + "px";
  document.body.style.fontSize = novo;
  localStorage.setItem("fonte", novo);
}

function diminuirFonte() {
  const atual = parseFloat(getComputedStyle(document.body).fontSize);
  const novo = Math.max(atual - 1, 12) + "px";
  document.body.style.fontSize = novo;
  localStorage.setItem("fonte", novo);
}

function resetarFonte() {
  document.body.style.fontSize = "16px";
  localStorage.setItem("fonte", "16px");
}

const form = document.getElementById("formContato");
const mensagemSucesso = document.getElementById("mensagemSucesso");

if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome")?.value.trim();
    const email = document.getElementById("email")?.value.trim();
    const mensagem = document.getElementById("mensagem")?.value.trim();

    if (!nome || !email || !mensagem) {
      alert("Preencha todos os campos obrigatórios!");
      return;
    }

    mensagemSucesso.classList.remove("d-none");
    this.reset();

    setTimeout(() => {
      mensagemSucesso.classList.add("d-none");
    }, 3000);
  });
}