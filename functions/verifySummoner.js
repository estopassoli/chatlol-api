const db = require('../models/db');

async function verifySummoner(message){
    const id = await db.getSummonerData(message.from,'summonerid');
    if (typeof id[0] !== 'undefined'){
        //return true; // já existia o cadastro do cliente no banco
    }
    else{
        await db.createSummoner(message.from,'1-cadastro');
        // não existia o cadastro mas foi criado
    }
    let res = await db.getStage(
        message.from
        );
    // console.log(`verifySummoner: ${res}`)
    return res;
}

exports.verifySummoner = verifySummoner;