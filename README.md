# Introdução

Para começar, você precisa ter instalado o Node, npm e yarn.
Versões utilizadas nesse projeto:

```
node v14.18.2
npm v6.14.15
yarn v1.22.17
```

## Banco de Dados

Para subir uma instância do banco de dados utilizando docker, rode os seguintes comandos:

```
docker run --name mysql-chatbotlol -p 3306:3306 -e MYSQL_ROOT_PASSWORD=12345 -d mysql:8.0
mysql -uroot -h127.0.0.1 -p12345 < chatlol-api.sql

create user 'admin' IDENTIFIED BY '123';
grant all privileges on summoners.* to admin;

mysql -h127.0.0.1 -uadmin -p123
```

Parâmetros:
```
-h = Host
-u = User
-p = password
nome_db
```

MYSQL_DB=summoners
MYSQL_USER=admin
MYSQL_USER_PWD=123
MYSQL_HOST=127.0.0.1
MYSQL_PORT=3306

mysql -h127.0.0.1 -uadmin -p123 summoners
mysql://admin:123@localhost:3306/summoners

## Subir Aplicação

Para começar, digite:

```
git clone https://github.com/estopassoli/chatlol-api
cd chatlol-api
npm install
yarn start
```

No terminal aparecerá um QR Code, então é só entrar no WhatsApp, clicar em "Aparelhos Conectados" e depois em "Conectar um Aparelho" e fazer a leitura do QR Code.

# Controle de versão

## To-do-list

- Sistema de autenticação na conta do LOL. 
- "Tinder" para encontrar duo/time flex.
- Obter informações sobre jogador (elo, campeões mais jogados, maestria, winrate).
- Sistema de criação de x1.
- Sistema de campeonatos.

## Próxima versão

- Melhorar mensagem após envio do nickname usando os novos dados obtidos.

## v1.0

- Árvore de escolhas para cadastro e mensagem de boas-vindas.
- Tratamento da mensagem "Sim" e "Nao" das confirmações de cadastro para evitar problemas no uso do bot.

## v1.1

- Persistir dados no banco de dados.
- Alteração tabela "rank" para "elosoloq" no banco de dados.
- Salvo mais dados do summoner no temp_db.
- Criação novas de tabelas no banco de dados para armazenar informações de cada modo de jogo do jogador.
- Opção de cadastrar conta Smurf.

## v1.2

- Cadastro de usuários (id, nome, telefone, nick, elo, etc.).
- Sistema para limpar o banco temporário periodicamente.
- Criar as colunas para os dados novos na tabela 'summoner'.
- Estruturação tmp_db.
- Salvar do tmp_db para o MySQL.
- Criação tabela "smurf".
- Criação comando !addsmurf.
- Opção de cadastro de Smurfs.
- Organização de comandos (arquivo com verificação de comandos disponíveis cmds_json.json)