function getMessage(stage){
    let json = require('../inc/config.js').config;
    let msg = json['mensagens'][stage]; 

    if (typeof msg === "undefined"){
        let err = "Mensagem não encontrada no arquivo config.json"
        return err;
    }
    return msg;
}

exports.getMessage = getMessage;