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

router.post("/listarFinalidade", function (req, res) {
    chaController.listarFinalidade(req, res);
});

router.post("/listarContraindic", function (req, res) {
    chaController.listarContraindic(req, res);
});

router.post("/addFavorito", function (req, res) {
    chaController.addFavorito(req, res);
});

router.post("/registrarConsumo", function (req, res) {
    chaController.registrarConsumo(req, res);
});

router.post("/visualizarConsumo", function (req, res) {
    chaController.visualizarConsumo(req, res);
});

router.get("/ultimasXicaras/:idUsuario", function (req, res) {
    chaController.buscarUltimasXicaras(req, res);
});

router.get("/consumoTotal/:idUsuario", function (req, res) {
    chaController.buscarConsumoTotal(req, res);
});

router.get("/listarFavoritosGeral", function (req, res) {
    chaController.listarFavoritosGeral(req, res);
});


module.exports = router;