const form = document.getElementById("forminscricao");

form.addEventListener("submit", function(event){

if (!form.checkValidity()) {
    return; 
}

    event.preventDefault();

    const ingressoSelecionado = document.querySelector('input[name="ingresso"]:checked');

    const dados = {
        nome: document.getElementById("nome").value,
        email: document.getElementById("email").value,
        telefone: document.getElementById("telefone").value,
        ingresso: ingressoSelecionado ? ingressoSelecionado.value : "",
        atualizacoes: document.getElementById("atualizacoes").checked
    };

    console.log(dados);

    form.reset();
});