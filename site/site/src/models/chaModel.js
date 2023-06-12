var database = require("../database/config")

function listarFavoritos(fkUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    select cha.id, cha.nome, cha.imagem from usuario
	join favoritos on usuario.id = fkUsuario
		join cha on cha.id = fkCha
			where usuario.id = ${fkUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function addFavorito(fkUsuario, fkCha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", fkUsuario, fkCha);
    
    var instrucao = `
        INSERT INTO favoritos VALUES (null, '${fkUsuario}', '${fkCha}', date(now()));
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarCha(nome) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    select * from cha
	    where nome like '${nome}%' or nomePop1 like '${nome}%' or nomePop2 like '${nome}%'
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarFinalidade(fkCha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    select cha.nome as cha, finalidadelista.nome as finalidade from finalidadecha
	join finalidadelista on finalidadelista.id = fkFinalidade
    join cha on cha.id = fkCha
		where cha.id = ${fkCha}
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarContraindic(fkCha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    select cha.nome as cha, contraindiclista.nome as contraindic from contraindiccha
	join contraindiclista on contraindiclista.id = fkContra
    join cha on cha.id = fkCha
		where cha.id = ${fkCha}
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function registrarConsumo(fkUsuario, fkCha, qntd, dtConsumo) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    insert into consumo values
        (null, ${fkUsuario}, ${fkCha}, ${qntd}, '${dtConsumo}')
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function visualizarConsumo(fkUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    select cha.nome, consumo.qntd, DATE_FORMAT(consumo.dtConsumo, '%d/%m/%Y') as dtConsumo from cha
	join consumo on cha.id = fkCha
    join usuario on usuario.id = fkUsuario
		where usuario.id = ${fkUsuario}
        order by date(dtConsumo) desc;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function buscarUltimasXicaras(fkUsuario) {
    // var instrucao = ''
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    select sum(qntd) 'Xícaras', DATE_FORMAT (dtConsumo, '%d/%m/%Y') 'Data' from consumo
        where fkUsuario = ${fkUsuario}
	        group by dtConsumo
                order by dtConsumo desc limit 7;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function buscarConsumoTotal(fkUsuario) {
    // var instrucao = ''
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    select truncate((sum(qntd)*240/1000), 2) 'total_litros', cha.nome 'Chá' from consumo
	    join cha on fkCha = cha.id
            where fkUsuario = ${fkUsuario}
                group by cha.nome
                    order by 'Total' desc
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarFavoritosGeral() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    select count(cha.nome) as maiorConsumo, cha.id, cha.nome, cha.imagem from cha
	    join consumo on cha.id = fkcha
            group by cha.nome, cha.id, cha.nome, cha.imagem
                order by count(cha.nome) desc limit 5;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
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
    listarFavoritosGeral
};