create database chazim;
use chazim;

-- entidade independente
create table usuario (
	id int primary key auto_increment,
    nome varchar(25) not null,
    email varchar(50) not null,
    senha varchar(16) not null
);

-- entidade independente
create table cha (
	id int primary key auto_increment,
    nome varchar(45) not null,
    nomeCientifico varchar(45), -- reconsiderar
	nomePop1 varchar(45),
    nomePop2 varchar(45),
    descricao varchar(300) not null,
    tipo varchar(20) not null,
		constraint chkTipo check (tipo in ('Folha','Raiz','Flor','Casca','Semente', 'Outros')),
	colherSopa int not null,
    imagem varchar(200)
);

-- entidade independente
create table finalidadeLista (
	id int primary key auto_increment,
    nome varchar(25) not null
    );

-- entidade independente
create table contraIndicLista (
	id int primary key auto_increment,
    nome varchar(25) not null
    );

-- entidade dependente - N-N
create table finalidadeCha (
	id int auto_increment,
    fkCha int,
    fkFinalidade int,
		constraint fkCha foreign key (fkCha) references cha(id),
        constraint fkFin foreign key (fkFinalidade) references finalidadeLista(id),
        constraint pkCompFin primary key (id, fkCha, fkFinalidade)
	);

-- entidade dependente - N-N
create table contraIndicCha (
	id int auto_increment,
    fkCha int,
    fkContra int,
		constraint fkChaContra foreign key (fkCha) references cha(id),
        constraint fkContraLista foreign key (fkContra) references contraIndicLista(id),
        constraint pkCompContra primary key (id, fkCha, fkContra)
	);

-- entidade dependente - N-N
create table favoritos (
	id int auto_increment,
    fkUsuario int,
    fkCha int,
    dtAdd date not null,
		constraint fkFavUsuario foreign key (fkUsuario) references usuario(id),
		constraint fkFavCha foreign key (fkCha) references cha(id),
        constraint pkCompFav primary key (id, fkUsuario, fkCha)
);

-- entidade dependente - N-N
create table consumo (
	id int auto_increment,
    fkUsuario int,
    fkCha int,
    qntd int not null,
    dtConsumo date not null,
		constraint fkConsUsuario foreign key (fkUsuario) references usuario(id),
        constraint fkConsCha foreign key (fkCha) references cha(id),
        constraint pkCompCons primary key (id, fkUsuario, fkCha)
);

/* relacao 1-1
create table tema (
	id int primary key auto_increment,
    cod_cor char(6),
    fkUsuario int,
		constraint fkTemaUsuario foreign key (fkUsuario) references usuario(id)
	);
*/

/* relacao 1-n
create table pontuacao (
	id int primary key auto_increment,
    valor int not null,
    dtAdd date
);
*/

insert into usuario values
(null, 'Luma','luma.souza@sptech.school','1234');

insert into cha (`id`, `nome`, `descricao`, `tipo`, `colherSopa`, `imagem`) values
	(null,'Camomila','Originário da Europa, é um chá com propriedades calmantes e aroma herbal,
sendo muito utilizado para reduzir os sintomas da ansiedade e aplicar em conjunto a rotinas de cuidados com a pele.','Flor',2,'https://i.imgur.com/AyjzUy0.jpg'),
    (null,'Erva doce','O chá de erva doce é um chá herbal e aromático com propriedades digestivas,
auxiliando em desconfortos estomacais, sendo também utilizado como calmante e expectorante.','Semente',1,'https://i.imgur.com/MJ0rE2V.jpg');

insert into cha (`id`, `nome`, `descricao`, `tipo`, `colherSopa`, `imagem`) values
	(null,'Hibisco','O chá de hibisco é um chá de coloração avermelhada e gosto que pode variar entre levemente amargo a ácido, sendo muito utilizado no combate à retenção de líquidos, hipertensão, além de possuir propriedades anti-inflamatórias e antioxidantes.','Flor',1,'https://i.imgur.com/Qo1pnEN.jpg'),
	(null,'Capim limão','Também conhecido como capim santo ou capim cidreira, é um chá que possui propriedades calmantes, analgésicas e antimicrobianas, sendo muito útil no combate contra a insônia e ansiedade, dores em geral e infecções cutâneas ou estomacais, possuindo aroma parecido com o do limão.','Folha',3,'https://i.imgur.com/EPi2ffA.jpg'),
	(null,'Hortelã','O chá de hortelã é um chá muito conhecido por suas propriedades que ajudam a tratar sintomas digestivos, como má digestão, naúseas, gases intestinas e acidez, além de ser ajudar a aliviar a tosse e promover o relaxamento, possuindo um gosto herbal característico.','Folha',2,'https://i.imgur.com/WEZlMQ2.jpg'),
	(null,'Melissa','Também conhecido como erva cidreira, é um chá herbal e aromático muito utilizado como calmante natural, atuando na ansiedade, insônia e estresse, possuindo também propriedades analgésicas e anti-inflamatórias, sendo utilizada em oturas formas além do chá, como em sucos, sobremesas e cápsulas.','Folha',2,'https://i.imgur.com/tJkCxJd.jpg'),
	(null,'Passiflora','O chá de passiflora nada mais é do que chá feito com as folhas do maracujá, rico em propriedades sedativas, atuando sob a ansiedade, insônia, estresse, aliviando também sintomas da menopausa e de doenças inflamatórias.','Folha',2,'https://i.imgur.com/9ngNteQ.jpg');

insert into finalidadelista values
	(null,'Calmante'),
    (null,'Hipoglicemiante'),
    (null,'Sintomas gripais'),
	(null,'Cicatrizante'),
    (null,'Digestivo'),
	(null,'Bactericida'),
	(null,'Diurético'),
	(null,'Anti-inflamatório'),
	(null,'Expectorante');

insert into finalidadecha values
	(null, 3, 7),
	(null, 3, 8),
	(null, 4, 1),
	(null, 4, 5),
	(null, 4, 6),
	(null, 5, 5),
	(null, 5, 3),
	(null, 6, 1),
	(null, 6, 8),
	(null, 7, 8);

insert into contraindiclista values
	(null, 'Gestantes'),
	(null, 'Hipertensos'),
	(null, 'Uso prolongado');

insert into finalidadecha values
	(null, 1, 1),
	(null, 1, 8),
	(null, 2, 5),
	(null, 2, 9),
	(null, 2, 3);

-- verificar propriedades de um chá em específico (pesquisa) (trazendo todos os campos)
select * from finalidadecha
	join finalidadelista on finalidadelista.id = fkFinalidade
    join cha on cha.id = fkCha
		where cha.id = 4;

-- verificar propriedades de um chá em específico (trazendo apenas nome do chá, nome da finalidade)
select cha.nome as cha, finalidadelista.nome as finalidade from finalidadecha
	join finalidadelista on finalidadelista.id = fkFinalidade
    join cha on cha.id = fkCha
		where cha.id = 4;

truncate favoritos;
insert into favoritos values
	(null, 1, 2, date(now()));
select * from cha;
insert into consumo values
	(null, 1, 1, 4, date(now()));

select * from usuario;
select * from finalidadelista;
insert into finalidadelista values
(null,'Hipotensor');
insert into finalidadecha values
(null, 3, 10);
insert into contraindiclista values
(null, 'Problemas com a tireoide');

-- recuperar todos os chas
select * from cha;
select * from contraindiclista;

update contraindiclista set nome = 'Gravidez e lactantes' where id = 1;
-- atualizando nomes populares
/*
update cha set nomePop1 = 'Vinagreira' where id = 3;
update cha set nomePop2 = 'Azedinha' where id = 3;
update cha set nomePop1 = 'Capim santo' where id = 4;
update cha set nomePop2 = 'Capim cidreira' where id = 4;
update cha set nomePop1 = 'Hortelã-pimenta' where id = 5;
update cha set nomePop2 = 'Menta' where id = 5;
update cha set nomePop1 = 'Erva cidreira' where id = 6;
update cha set nomePop2 = 'Cidreira' where id = 6;
update cha set nomePop1 = 'Maracujá' where id = 7;
*/
select * from contraindiccha;
-- adicionando contra indicações
insert into contraindiccha values
	(null,1,1),
	(null,2,1),
	(null,3,1),
	(null,3,3),
	(null,4,1),
	(null,5,5),
	(null,6,1),
	(null,6,6),
	(null,7,1);


select * from finalidadecha
	join finalidadelista on finalidadelista.id = fkFinalidade
		join cha on cha.id  = fkCha;

-- nope
/*select cha.nome as cha, finalidadelista.nome as finalidade, contraindiclista.nome as contraindic from finalidadecha
	join finalidadelista on finalidadelista.id = fkFinalidade
    join cha on cha.id = finalidadecha.fkCha
	join contraindiccha on cha.id = contraindiccha.fkCha
    join contraindiclista on contraindiclista.id = fkContra;*/

        
select * from contraindiccha
	join contraindiclista on contraindiclista.id = fkContra
		join cha on cha.id  = fkCha
			where cha.id = 3;

-- recuperar favoritos do usuário X
select cha.id, cha.nome, cha.imagem from usuario
	join favoritos on usuario.id = fkUsuario
		join cha on cha.id = fkCha
			where usuario.id = 1;

-- procurar um chá
select * from cha
	where nome like 'camom%';
    
-- visualizar últimos chás consumidos pelo usuário
select cha.nome, consumo.qntd, DATE_FORMAT (consumo.dtConsumo, '%d/%m/%Y') as dtConsumo from cha
	join consumo on cha.id = fkCha
    join usuario on usuario.id = fkUsuario
		where usuario.id = 1;
        
        
select * from consumo;

-- Gráfico de total de xícaras por dia
select sum(qntd) 'Xícaras', DATE_FORMAT (dtConsumo, '%d/%m/%Y') 'Data' from consumo
where fkUsuario = 1
	group by dtConsumo
    order by dtConsumo desc limit 7
    ;

-- Gráfico de consumo total
select truncate((sum(qntd)*240/1000), 2) 'Total (litros)', cha.nome 'Chá' from consumo
	join cha on fkCha = cha.id
    where fkUsuario = 1
    group by cha.nome
    order by 'Total' desc;
    
truncate favoritos;
truncate consumo;
select * from favoritos;
select * from consumo;

-- recuperar favoritos em geral
select count(cha.nome) as maiorConsumo, cha.id, cha.nome, cha.imagem from cha
	join consumo on cha.id = fkcha
    group by cha.nome, cha.id, cha.nome, cha.imagem
    order by count(cha.nome) desc limit 5;