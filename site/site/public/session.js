if (sessionStorage.NOME_USUARIO != "" || sessionStorage.ID_USUARIO != "") {
    divHeader.innerHTML = `
    <div class="nav">
        <img id="imgLogo" src="assets/logoChazim2.png">
        <ul class="navbar">
            <li><a href="index.html">Home</a></li>
            <li><a href="telaUsuario.html">Sua página</a></li>
            <li><a href="#" onclick="limparSessao()">Sair</a></li>
        </ul>
    </div>
    `
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "index.html";
}