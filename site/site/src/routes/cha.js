var express = require("express");
var router = express.Router();

var chaController = require("../controllers/chaController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.post("/listarFavoritos", function (req, res) {
    chaController.listarFavoritos(req, res);
});

router.post("/listarCha", function (req, res) {
    chaController.listarCha(req, res);
});

router.post("/addFavorito", function (req, res) {
    chaController.addFavorito(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

module.exports = router;