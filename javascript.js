const usuarios = [];

function Persona() {
    for (let i = 0; i < 3; i++) {
        const nome = prompt("Digite seu nome:");
        const apelido = prompt("Digite seu apelido:");
        const email = prompt("Digite seu e-mail:");

        const usuario = {
            nome: nome,
            apelido: apelido,
            email: email
        };

        usuarios.push(usuario);

        alert("Nome adicionado com sucesso!");
    }
}

function mostrarUsuarios() {
    const usuariosDiv = document.getElementById("usuarios-lista");

    // Limpar a div antes de adicionar os usuários
    usuariosDiv.innerHTML = "";
    
    // Verificar se há usuários no array
    if (usuarios.length === 0) {
        usuariosDiv.textContent = "Não há usuários para mostrar.";
    } else {
        // Criar uma lista não ordenada (ul) para os usuários
        const lista = document.createElement("ul");

        // Percorrer o array e criar um item de lista (li) para cada usuário
        usuarios.forEach(function(usuario) {
            const itemLista = document.createElement("li");
            itemLista.textContent = "Nome: " + usuario.nome + ", Apelido: " + usuario.apelido + ", E-mail: " + usuario.email;
            lista.appendChild(itemLista);
        });

        // Adicionar a lista à div
        usuariosDiv.appendChild(lista);
    }
}