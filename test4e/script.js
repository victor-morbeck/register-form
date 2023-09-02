const form = document.getElementById("main_form");

form.addEventListener("submit", function(event){

    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
    const endereco = document.getElementById("endereco").value;
    const profissao = document.getElementById("profissao").value;

    console.log("Nome: " + nome);
    console.log("Idade: " + idade);
    console.log("Endereco: " + endereco);
    console.log("Profissao: " + profissao)




});