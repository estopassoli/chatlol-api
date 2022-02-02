const db = require("../../models/db");
const {bt_add} = require("../../inc/buttons/bt_add");

async function execute(user, msg, contato, client, message) {
  msg = msg.toUpperCase();
  msg = msg.replace(' ', '');

   if(msg === "SIM"){
    await db.setStage(user, '2-cadastro');
    await client.sendText(user, 'Agora digite seu nome de *Invocador* da sua conta no *League of Legends* ')
  }
  if(msg === "NAO" || msg === "NÃO"){
    await db.setStage(user, '1.2-cadastro');
    await client.sendText(user, `Ok, então me diga o nome que você quer que eu coloque no seu cadastro!`)
  }
  else{
    await client.sendButtons(user, `Você deseja utilizar o nome ${message.sender.pushname}?`, bt_add, `@Chatlol-Factory`)
    return;
  }
}

exports.execute = execute;