const db = require("../../models/db");
const temp_db = require('../../models/temp-db')
const {
    bt_add
} = require("../../inc/buttons/bt_add");
var RiotRequest = require('riot-lol-api');
const {
    api
} = require("../../configs/api");

var riot = new RiotRequest(api.key);

async function execute(user, msg, contato, client, message) {

    msg = msg.toUpperCase();
    msg = msg.replace(' ', '');
    if (msg === "SIM") {

        await db.setStage(user, 'menu-inicial');
        await client.sendText(user, "Pronto, cadastro realizado com sucesso!")
    }
    if (msg === "NAO" || msg === "NÃO") {
        await client.sendText(user, "Digite o seu *nick* do *League of Legends*!")
    }
    else{
        riot.request('BR1', `summoner`, `/lol/summoner/v4/summoners/by-name/${msg}`, function(err, data) {
            if (err) {
                client.sendText(user, "Usuario nao identificado");
            }
            else {
                riot.request('BR1', 'encryptedSummonerId', `/lol/league/v4/entries/by-summoner/${data.id}`, function (err, data2) {
                    if (data2[0] === undefined) { //caso o summoner seja unranked
                        client.sendButtons(user, `NICKNAME: ${data.name}\nLEVEL: ${data.summonerLevel}\nRANK: Unranked\nWINRATE: 0%\n`, bt_add, "Deseja adicionar esta conta ao seu cadastro?");
                    } else { //caso encontre ranked games

                        client.sendButtons(user, `NICKNAME: ${data.name}\nLEVEL: ${data.summonerLevel}\nRANK: ${data2[0].tier} ${data2[0].rank} ${data2[0].leaguePoints} PDL\nWINRATE: ${data2[0].wins} W/${data2[0].losses}L - ${((data2[0].wins / (data2[0].wins + data2[0].losses)) * 100).toFixed(2)}%\n`, bt_add, "Deseja adicionar esta conta ao seu cadastro?");
                    }
                });
            }
        })
    }

}
exports.execute = execute;