const db = require("../models/db");
const comandos = require('../inc/comandos');
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

    return;
}

exports.execute = execute;