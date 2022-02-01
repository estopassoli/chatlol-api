const db = require('../models/db');
const {getTime} = require('../functions/getTime');
const {bt_boolean} = require('../inc/buttons/bt_boolean');

async function execute(user, msg, contato, client, message){
    await client.sendText(user, `🤖  Seja bem-vindo ao Chatbot League of Legends!  🤖`);
    await client.sendText(user, 
        `
        Digite *!help* para ver uma lista com todos os comandos possíveis\n
        Para mais informações acesse nosso Discord <>\n
        *{chave-pix}*\n
        Faça uma doação para incentivar o nosso trabalho!\nNOTA: Ajudas monetárias são *totalmente opcionais*.
    `);
    await client.sendText(user, `🤖 =============================== 🤖`);

    return;
}

exports.execute = execute;