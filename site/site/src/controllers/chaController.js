var chaModel = require("../models/chaModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA usuarioController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listarFavoritos(req, res) {
    var fkUsuario = req.body.fkUsuarioServer;

    if (fkUsuario == undefined) {
        res.status(400).send("fkUsuario está undefined!");
    }

    chaModel.listarFavoritos(fkUsuario)
        .then(
            function (resultado) {
                res.json(resultado);
            }).catch(function (erro) {
                console.log(erro);
                console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
            );
}

function listarCha(req, res) {
    var nomeCha = req.body.nomeChaServer;

    if (nomeCha == undefined) {
        res.status(400).send("nomeCha está undefined!");
    }

    chaModel.listarCha(nomeCha)
        .then(
            function (resultado) {
                res.json(resultado);
            }).catch(function (erro) {
                console.log(erro);
                console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
            );
}

function listarFinalidade(req, res) {
    var fkCha = req.body.fkChaServer;

    if (fkCha == undefined) {
        res.status(400).send("fkCha está undefined!");
    }

    chaModel.listarFinalidade(fkCha)
        .then(
            function (resultado) {
                res.json(resultado);
            }).catch(function (erro) {
                console.log(erro);
                console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
            );
}

function listarContraindic(req, res) {
    var fkCha = req.body.fkChaServer;

    if (fkCha == undefined) {
        res.status(400).send("fkCha está undefined!");
    }

    chaModel.listarContraindic(fkCha)
        .then(
            function (resultado) {
                res.json(resultado);
            }).catch(function (erro) {
                console.log(erro);
                console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
            );
}

function registrarConsumo(req, res) {
    var fkUsuario = req.body.fkUsuarioServer;
    var fkCha = req.body.fkChaServer;
    var qntd = req.body.qntdServer;
    var dtConsumo = req.body.dtConsumoServer;

    if (fkCha == undefined) {
        res.status(400).send("fkCha está undefined!");
    } else if (fkUsuario == undefined) {
        res.status(400).send("fkUsuario está undefined!")
    } else if (qntd == undefined) {
        res.status(400).send("fkUsuario está undefined!")
    }  else if (dtConsumo == undefined) {
        res.status(400).send("fkUsuario está undefined!")
    }

    chaModel.registrarConsumo(fkUsuario,fkCha,qntd,dtConsumo)
        .then(
            function (resultado) {
                res.json(resultado);
            }).catch(function (erro) {
                console.log(erro);
                console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
            );
}

function visualizarConsumo(req, res) {
    var fkUsuario = req.body.fkUsuarioServer;

    if (fkUsuario == undefined) {
        res.status(400).send("fkUsuario está undefined!");
    }

    chaModel.visualizarConsumo(fkUsuario)
        .then(
            function (resultado) {
                res.json(resultado);
            }).catch(function (erro) {
                console.log(erro);
                console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
            );
}

function addFavorito(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var fkUsuario = req.body.fkUsuarioServer;
    var fkCha = req.body.fkChaServer;

    // Faça as validações dos valores
    if (fkUsuario == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (fkCha == undefined) {
        res.status(400).send("Seu email está undefined!");
    }

    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    chaModel.addFavorito(fkUsuario, fkCha)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function buscarUltimasXicaras(req, res) {

    var idUsuario = req.params.idUsuario;

    chaModel.buscarUltimasXicaras(idUsuario).then(function (resultado) {
        res.json(resultado);

    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarConsumoTotal(req, res) {

    var idUsuario = req.params.idUsuario;

    chaModel.buscarConsumoTotal(idUsuario).then(function (resultado) {
        res.json(resultado);

    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function listarFavoritosGeral(req, res) {

    chaModel.listarFavoritosGeral().then(function (resultado) {
        res.json(resultado);

    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    addFavorito,
    listarFavoritos,
    listarCha,
    listarFinalidade,
    listarContraindic,
    registrarConsumo,
    visualizarConsumo,
    buscarUltimasXicaras,
    buscarConsumoTotal,
    listarFavoritosGeral,
    testar
}