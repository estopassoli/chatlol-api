const db = require("../functions/db-functions");

async function execute(user, msg, contato, client, message){
    await client.sendText(user, `🤖  Seja bem-vindo ao Chatbot League of Legends!  🤖`);
    await client.sendText(user, 
        `
        Olá ${message.sender.pushname},\n
        Digite *!help* para ver uma lista com todos os comandos possíveis\n
        Para mais informações acesse nosso Discord <>\n
        *{chave-pix}*\n
        Faça uma doação para incentivar o nosso trabalho!\nNOTA: Ajudas monetárias são *totalmente opcionais*.
    `);
    await client.sendText(user, `🤖 =============================== 🤖`);

    return;
}

exports.execute = execute;