let {tmp_db} = require("../models/temp-db");

let RiotRequest = require('riot-lol-api');
const {
    api
} = require("../configs/api");

let riot = new RiotRequest(api.key);

function createTmpSummoner(nome, chatid){
    riot.request('BR1', 'encryptedSummonerId', `/lol/summoner/v4/summoners/by-name/${nome}`, function (err, data) {
        riot.request('BR1', 'encryptedSummonerId', `/lol/league/v4/entries/by-summoner/${data['id']}`, function (err, data2) {
            tmp_db[chatid] = {}
            // console.log(data2)
            let summonerId = data['id']
            let accountId = data['accountId']
            let puuid = data['puuid']
            let name = data['name']
            let profileIconId = data['profileIconId']
            let summonerLevel = data['summonerLevel']

            tmp_db[chatid] = {
            summonerId:summonerId,
            accountId:accountId,
            puuid:puuid,
            name:name,
            profileIconId:profileIconId,
            summonerLevel:summonerLevel,
            queueType: {}
            }

            for (let i in data2){
                let queueType = data2[i]['queueType']
                let leaguePoints = data2[i]['leaguePoints']
                let tier = data2[i]['tier']
                let rank = data2[i]['rank']
                let wins = data2[i]['wins']
                let losses = data2[i]['losses']
                let winrate = (wins / (wins+losses)*100).toFixed(2)+'%'
                queueTypeChild = {
                    summonerId:summonerId,
                    leaguePoints:leaguePoints,
                    tier:tier,
                    rank:rank,
                    wins:wins,
                    losses:losses,
                    winrate:winrate
                }

                tmp_db[chatid]['queueType'][queueType] = queueTypeChild

                // tmp_db[chatid]['queueType'][queueType] = queueTypeChild;
            }
            console.log(tmp_db[chatid])
            return tmp_db[chatid];
        })
    })
}

createTmpSummoner('katarina','12314523')

exports.createTmpSummoner = createTmpSummoner;