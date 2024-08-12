let confirmar = document.getElementById("confirmar");

confirmar.addEventListener("click", submit)

function submit() {
    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    let cpf = document.getElementById("cpf").value;
    console.log(nome, idade, cpf)
}