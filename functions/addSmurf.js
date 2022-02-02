let {
    tmp_db
} = require("../models/temp-db");
let db = require("../models/db");

async function addSmurf(chatid) {
    let summonerId = tmp_db[chatid]['summonerId']
    let accountId = tmp_db[chatid]['accountId']
    let puuid = tmp_db[chatid]['puuid']
    let summonerName = tmp_db[chatid]['name']
    let profileIconId = tmp_db[chatid]['profileIconId']
    let summonerLevel = tmp_db[chatid]['summonerLevel']

    // adicionar informações do usuário no banco de dados
    db.createSmurf(
        summonerId,
        accountId,
        puuid,
        chatid,
        summonerName,
        profileIconId,
        summonerLevel)
    for (let mode in tmp_db[chatid]['queueType']) {
        // mode == ranked mode name

        // variaveis de acordo com a fila ranqueada:
        let tier = tmp_db[chatid]['queueType'][mode]['tier']
        let elo = tmp_db[chatid]['queueType'][mode]['rank']
        let leaguePoints = tmp_db[chatid]['queueType'][mode]['leaguePoints']
        let wins = tmp_db[chatid]['queueType'][mode]['wins']
        let losses = tmp_db[chatid]['queueType'][mode]['losses']

        // insert no banco MySQL com as informações do tmp db
        await db.createRankedData(mode, chatid, summonerId, mode, tier, elo, leaguePoints, wins, losses);
    }

    return;

}

exports.addSmurf = addSmurf;