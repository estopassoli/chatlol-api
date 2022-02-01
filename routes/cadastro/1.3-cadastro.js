const db = require("../../models/db");
const {bt_add} = require("../../inc/buttons/bt_add");

async function execute(user, msg, contato, client, message) {
  msg = msg.toUpperCase();
  msg = msg.replace(' ', '');

   if(msg === "SIM"){

    await db.updateUser(user, 'realname', temp_db[user].nomereal);
    await db.setStage(user, '2-cadastro');
    await client.sendText(user, `Agora digite seu NICK do League of Legends:`)
  }
  if(msg === "NAO" || msg === "NÃO"){
    await db.setStage(user, '1.1-cadastro');
    await client.sendText(user, `Ok, então me diga o nome que você quer que eu coloque no seu cadastro!`)
  }
  else{
    await client.sendText(user, `Digite *Sim* para usar *${message.sender.pushname}* como nome ou digite *Não* para escrever um nome diferente para o cadastro.`)
  }
}

exports.execute = execute;