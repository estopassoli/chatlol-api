// https://developer.riotgames.com/apis#league-v4/GET_getLeagueEntries

let RiotRequest = require('riot-lol-api');
const {
    api
} = require("../../configs/api");

let riot = new RiotRequest(api.key);

// id pego na summoner-v4 da conta 'katarina'
let encryptedSummonerId = "QIT98Umnob5jHyC8ZgAJsAM65wEpyw6DefjXq1Q5gqar"

// retorna as filas ranqueadas daquele jogador, junto com várias outras informaçoes especificas de cada modo.
riot.request('BR1', 'encryptedSummonerId', `/lol/league/v4/entries/by-summoner/${encryptedSummonerId}`, async function (err, data) {
    console.log(data)
})

// leagueId pego na requisição anterior.
let leagueId = "fb1761d8-445d-44c6-9432-5b5c21fd0bda";

// retorna todos os jogadores na mesma liga que vc.
// riot.request('BR1', 'encryptedSummonerId', `/lol/league/v4/leagues/${leagueId}`, async function (err, data) {
//     console.log(data)
// })