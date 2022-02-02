const db = require("../../models/db");
const {tmp_db} = require("../../models/temp-db"); 
const {createTmpSummoner} = require("../../functions/createTmpSummoner");
const {createSummoner} = require("../../functions/createSummoner");
const {
    bt_add
} = require("../../inc/buttons/bt_add");
var RiotRequest = require('riot-lol-api');
const {
    api
} = require("../../configs/api");
const { menuInicial } = require("../../inc/messages");

var riot = new RiotRequest(api.key);

async function execute(user, msg, contato, client, message) {
    msg = msg.toUpperCase();
    msg = msg.replace(' ', '');
    if (msg === "SIM") {
        await db.setStage(user, 'comandos');
        let summonerid =  await db.getSummonerData(user, 'summonerid')

        await db.createSmurf(user, summonerid, tmp_db[user].name, tmp_db[user].summonerLevel, tmp_db[user].tier, tmp_db[user].winrate)
        await client.sendText(user, "Pronto, smurf cadastrada com sucesso!\nPara listar todas suas contas cadastradas utilize o comando: *!myaccs*")

        createSummoner(user);

        return;
    }
    if (msg === "NAO" || msg === "NÃO") {
        await client.sendText(user, "Digite o seu *nick* do *League of Legends*!")
        return;
    }
    else{
        riot.request('BR1', `summoner`, `/lol/summoner/v4/summoners/by-name/${msg}`, async function(err, data) {
            if (err) {
                await client.sendText(user, "Usuario nao identificado");
                return;
            }
            else {
                riot.request('BR1', 'encryptedSummonerId', `/lol/league/v4/entries/by-summoner/${data.id}`, async function (err, data2) {
                    if (data2[0] === undefined) { //caso o summoner seja unranked
                        await client.sendButtons(user, `NICKNAME: ${data.name}\nLEVEL: ${data.summonerLevel}\nRANK: Unranked\nWINRATE: 0%\n`, bt_add, "Deseja adicionar esta conta ao seu cadastro?");   
                        createTmpSummoner(data.name,user);

                        return;
                    } else { //caso encontre ranked games
                        let wins = `${data2[0].wins}`
                        let losses = `${data2[0].losses}`
                        let winrate = `${((wins / (wins + losses)) * 100).toFixed(2)}%`
                        await client.sendButtons(user, `NICKNAME: ${data.name}\nLEVEL: ${data.summonerLevel}\nRANK: ${data2[0].tier} ${data2[0].rank} ${data2[0].leaguePoints} PDL\nWINRATE: ${winrate}\n`, bt_add, "Deseja adicionar esta conta ao seu cadastro?");
                        createTmpSummoner(data.name,user);
                        return;
                    }
                });
            }
        })
    }
}
exports.execute = execute;