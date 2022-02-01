# Introdução

Para começar, você precisa ter instalado o Node, npm e yarn.
Versões utilizadas nesse projeto:

```
node v14.18.2
npm v6.14.15
yarn v1.22.17
```

Para começar, digite:

```
git clone https://github.com/joel-vasiliev/chatbot-skeleton-001.git
cd chatbot-skeleton-001
npm install
yarn start
```

No terminal aparecerá um QR Code, então é só entrar no WhatsApp, clicar em "Aparelhos Conectados" e depois em "Conectar um Aparelho" e fazer a leitura do QR Code.

## Banco de Dados

Para subir uma instância do banco de dados utilizando docker, rode os seguintes comandos:

```
docker run --name mysql-chatlols -p 3306:3306 -e MYSQL_ROOT_PASSWORD=12345 -d mysql:8.0
mysql -uroot -h127.0.0.1 -p12345 < chatlol-api.sql

create user 'joelvasiliev' IDENTIFIED BY '123';
grant all privileges on clientes.* to joelvasiliev;

mysql -h127.0.0.1 -ujoelvasiliev -p123
```

Parâmetros:
```
-h = Host
-u = User
-p = password
nome_db
```

MYSQL_DB=clientes
MYSQL_USER=joelvasiliev
MYSQL_USER_PWD=123
MYSQL_HOST=127.0.0.1
MYSQL_PORT=3306

mysql -h127.0.0.1 -ujoelvasiliev -p123 clientes
mysql://joelvasiliev:123@localhost:3306/clientes

# Controle de versão

## To-do-list

- Cadastro de usuários (id, nome, telefone, nick, elo, etc.).
- "Tinder" para encontrar duo/time flex.
- Obter informações sobre jogador (elo, campeões mais jogados, maestria, winrate).
- Sistema de criação de x1.
- Sistema de campeonatos.

## Próxima versão

- Persistir dados no banco de dados.
- Arquivo JSON com comandos disponíveis e conteúdo das mensagens.

## v1.0

- Árvore de escolhas para cadastro e mensagem de boas-vindas.
- Tratamento da mensagem "Sim" e "Nao" das confirmações de cadastro para evitar problemas no uso do bot.