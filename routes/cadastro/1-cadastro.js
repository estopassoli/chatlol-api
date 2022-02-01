const db = require("../../models/db");
const {bt_add} = require("../../inc/buttons/bt_add");

async function execute(user, msg, contato, client, message) {

  db.setStage(user, '1.1-cadastro');
  await client.sendButtons(user,
    `Saudações invocador!\nNotei que você ainda não tem um cadastro em nosso sistema!\n`+
    `Vi que seu nome aqui no WhatsApp é *${message.sender.pushname}*,\nvocê gostaria de fazer o cadastro com esse nome?`
    ,bt_add, '@Chatlol Factory')

}

exports.execute = execute;