const db = require("../models/db");
const comandos = require('../inc/comandos');
const {
    menuInicial
} = require("../inc/messages");
async function execute(user, msg, contato, client, message) {

    if (msg == "!help") {
        let cmd = '';
        Object.keys(comandos).forEach((value) => {
            let i = comandos[value];
            cmd += `${i}\n`;
        });
        await client.sendText(user, `Aqui vai uma lista de comandos disponíveis:\n` + cmd)
    }

    if (msg == "!elo") {

    }
    if (msg == "!info") {

    }
    if (msg == "!winrate") {

    }
    if (msg == "!role") {

    }
    if (msg == "!addsmurf") {
        await db.setStage(user, '1-smurf')
        await client.sendText(user, 'Agora digite seu nome de *Invocador* da sua conta no *League of Legends* ')
    }
    
    else {
        await client.sendTexT(user, menuInicial())
    }
    return;
}

exports.execute = execute;