

async function execute(user, msg, contato, client, message){
    let text = `
    🤖 ===== *Seja bem-vindo ao Chatbot League of Legends!* ===== 🤖
                
            Digite *!help* para ver uma lista com todos os comandos possíveis
            Para mais informações acesse nosso Discord <>
            *{chave-pix}*
            Faça uma doação para incentivar o nosso trabalho!
            NOTA: Ajudas monetárias são *totalmente opcionais*.\n
    🤖 ============================================ 🤖
    `
    await client.sendText(user,text);

    return;
}

exports.execute = execute;