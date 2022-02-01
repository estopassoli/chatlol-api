const db = require("../../models/db");
const {bt_add} = require("../../inc/buttons/bt_add");

async function execute(user, msg, contato, client, message) {

  msg = msg.toUpperCase();
  msg = msg.replace(' ', '');

  if (msg === 'SIM') {
    await db.updateSummoner(user, 'realname', message.sender.pushname)
    await db.setStage(user, '2-cadastro');
    await client.sendText(user, `Agora digite seu NICK do League of Legends`)
    return;
  }
  if (msg === 'NAO' || msg == 'NÃO') {
    await db.setStage(user, '1.1-cadastro');
    await client.sendText(user, `Ok, então me diga o nome que você quer que eu coloque no seu cadastro!`)
    return;
  }
  else{
    await client.sendText(user, `Digite *Sim* para usar *${message.sender.pushname}* como nome ou digite *Não* para escrever um nome diferente para o cadastro.`)
    return;
  }
}

exports.execute = execute;