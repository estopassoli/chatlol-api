const db = require("../../models/db");
const {bt_add} = require("../../inc/buttons/bt_add");

async function execute(user, msg, contato, client, message) {
   if(msg === "Sim"){

    await db.updateUser(user, 'realname', temp_db[user].nomereal);
    await db.setStage(user, '2-cadastro');
    await client.sendText(user, `Agora digite seu NICK do League of Legends:`)
  }
  if(msg ==="Não"){
    await db.setStage(user, '1.1-cadastro');
    await client.sendText(user, `Ok, então me diga o nome que você quer que eu coloque no seu cadastro!`)
  }
}

exports.execute = execute;