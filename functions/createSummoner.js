let {tmp_db} = require("../models/temp-db");
let db = require("../models/db");

async function createSummoner(chatid){

    let json = tmp_db[chatid];

    console.log(json.nickname)
    console.log(json.summonerLevel)
    console.log(json.eloSoloQ)
    console.log(json.winRate)

    await db.updateSummoner(chatid, 'nickname', json.nickname);
    await db.updateSummoner(chatid, 'level', json.summonerLevel);
    await db.updateSummoner(chatid, 'elosoloq', json.eloSoloQ);
    await db.updateSummoner(chatid, 'winrate', json.winRate);

    // falta wins, losses, role
    
    return;
    
}

exports.createSummoner = createSummoner;