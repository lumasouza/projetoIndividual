if (sessionStorage.NOME_USUARIO != null) {
    divHeader.innerHTML = `
    <div class="nav">
        <img id="imgLogo" onclick="window.location.href='index.html'" src="assets/logoChazim2.png">
        <ul class="navbar">
            <li><a href="index.html">Home</a></li>
            <li><a href="telaUsuario.html">Sua página</a></li>
            <li><a href="#" onclick="limparSessao()">Sair</a></li>
        </ul>
    </div>
    `
}
//  else {
//     divHeader.innerHTML = `
//     <div class="nav">
//             <img id="imgLogo" onclick="window.location.href='index.html' src="assets/logoChazim2.png">
//             <ul class="navbar">
//                 <li><a href="index.html">Home</a></li>
//                 <li><a class="login" href="telaLogin.html">Login</a></li>
//                 <li><a class="cad" href="telaCadastro.html">Cadastre-se</a></li>
//             </ul>
//         </div>
//     `
// }

function limparSessao() {
    sessionStorage.clear();
    window.location = "index.html";
}