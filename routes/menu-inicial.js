

async function execute(user, msg, contato, client, message){
    await client.sendText(user, `🤖  Seja bem-vindo ao Chatbot League of Legends!  🤖`);
    await client.sendText(user, 
        `
        Digite *!help* para ver uma lista com todos os comandos possíveis
        Para mais informações acesse nosso Discord <>
        *{chave-pix}*
        Faça uma doação para incentivar o nosso trabalho!
        NOTA: Ajudas monetárias são *totalmente opcionais*.
    `);
    await client.sendText(user, `🤖 =============================== 🤖`);

    return;
}

exports.execute = execute;