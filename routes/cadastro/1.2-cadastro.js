const db = require("../../models/db");
const {bt_add} = require("../../inc/buttons/bt_add");
const { temp_db } = require("../../models/temp-db");

async function execute(user, msg, contato, client, message) {
  await db.setStage(user, '1.3-cadastro')
  await client.sendText(user, `O nome escolhido digitado foi: ${msg}`)
  await client.sendButtons(user, 'Está correto?', bt_add, '@Chatlol Factory')
}

exports.execute = execute;