let {tmp_db} = require("../models/temp-db")

function createTmpSummoner(chatid, nickname, summonerLevel, eloSoloQ, eloFlex, winRate, wins, losses){
    let data = {
        nickname: "",
        summonerLevel: 0,
        eloSoloQ: "",
        eloFlex: "",
        winRate: "",
        wins: "",
        losses: ""
    }
    tmp_db[chatid] = data;

    tmp_db[chatid].nickname = nickname;
    tmp_db[chatid].summonerLevel = summonerLevel;
    tmp_db[chatid].eloSoloQ = eloSoloQ;
    tmp_db[chatid].eloFlex = eloFlex;
    tmp_db[chatid].winRate = winRate;
    tmp_db[chatid].wins = wins;
    tmp_db[chatid].losses = losses;

    console.log(tmp_db)
}

exports.createTmpSummoner = createTmpSummoner;