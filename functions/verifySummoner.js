const db = require('./db-functions');
const temp_db = require('../models/temp-db')

async function verifySummoner(message) {
    console.log(temp_db[message.from]);
    temp_db[message.from] = {
        nickname: '',
        level: '',
        rank: '',
        winrate: '',
    };
    const id = await db.getSummonerData(message.from, 'chatid');
    if (typeof id[0] !== 'undefined') {} else {
        await db.createUser(message.from, '1-cadastro');
        // não existia o cadastro mas foi criado
    }
    let res = await db.getStage(
        message.from
    );
    return res;

}

exports.verifySummoner = verifySummoner;