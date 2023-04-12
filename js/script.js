let slideElement = document.querySelector('#slide');
let buttonElement = document.querySelector('#gerador-act');

let sizePassword = document.querySelector('#valor');
let senha = document.querySelector('#senha');

let containerSenha = document.querySelector('#contanier-senha');

let charset = "@ABCDEFGHIJKLMNOPQRSTUVWXYZ^_123456789";
let novaSenha = "";

sizePassword.innerHTML = slideElement.value;

slide.oninput = function(){
    sizePassword.innerHTML = this.value;
}

function gerarSenha(){
    let pass = "";
    for(let i = 0, n = charset.length; i < slideElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n));
    }
    containerSenha.classList.remove("hide")
    senha.innerHTML = pass;
    novaSenha = pass;
}

