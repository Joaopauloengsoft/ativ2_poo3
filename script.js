const nome = document.getElementById("nome");
const email = document.getElementById("email");
const senha = document.getElementById("senha");

const botaoEnviar = document.getElementById("botaoEnviar");
const mensagem = document.getElementById("mensagem");

function addUsuario() {

    if (nome.value === "" || email.value === "" || senha.value === "") {

        window.prompt('Erro: Por favor, preencha todos os campos!')
        mensagem.textContent = "Erro: Por favor, preencha todos os campos!";
        mensagem.style.color = "red";
        
    } else {

        window.prompt('Sucesso! Usuário cadastrado.')
        mensagem.textContent = "Sucesso! Usuário cadastrado.";
        mensagem.style.color = "green";

        nome.value = "";
        email.value = "";
        senha.value = "";
    }
}

botaoEnviar.addEventListener("click", addUsuario);