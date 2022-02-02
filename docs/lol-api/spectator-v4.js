let RiotRequest = require('riot-lol-api');
const {
    api
} = require("../../configs/api");

let riot = new RiotRequest(api.key);

let encryptedSummonerId = "QIT98Umnob5jHyC8ZgAJsAM65wEpyw6DefjXq1Q5gqar";

// retorna informações sobre partida em andamento
// riot.request('BR1', 'encryptedSummonerId', `/lol/spectator/v4/active-games/by-summoner/${encryptedSummonerId}`, async function (err, data) {
//     console.log(data)
// })

// infomrações sobre últimos jogos do jogador
// riot.request('BR1', 'encryptedSummonerId', `/lol/spectator/v4/featured-games`, async function (err, data) {
//     console.log(data)
// })