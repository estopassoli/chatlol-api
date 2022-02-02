const db = require("../models/db");
const {comandos} = require('../inc/comandos');
const {commandsjson}=require('../inc/cmds_json.json')
const {
    menuInicial
} = require("../inc/messages");
const {searchSummoner}=require('../functions/searchSummoner')

async function execute(user, msg, contato, client, message) {

    if (msg == "!help") {
        let cmds= '';
        Object.keys(comandos).forEach((value) => {
          let v = comandos[value];
          cmds += `*${v.cmd}* - ${v.desc}\n${v.guia}\n\n`;
      });
        client.sendText(user, `Aqui vai uma lista de comandos disponíveis:\n\n` + cmds);
    }
    else if (msg == "!elo") {

    }
    else if (msg == "!info") {

    }
    else if (msg == "!winrate") {

    }
    else if (msg == "!role") {

    }
    else if (msg == "!list") {

    }
    else if (msg == "!addsmurf") {
        db.setStage(user, '1-smurf')
        client.sendText(user, 'Agora digite seu nome de *Invocador* da sua conta no *League of Legends* ')
    }
    else if(!commandsjson[msg]){
        await client.sendText(user, menuInicial());
    }
}

exports.execute = execute;