let confirmar = document.getElementById("confirmar");

confirmar.addEventListener("click", submit);

function submit() {
    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    let email = document.getElementById("email").value;

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        alert("Por favor, insira um e-mail válido.");
        return;
    }

    alert(`nome: ${nome}\nidade: ${idade}\nemail: ${email}\n`);
}