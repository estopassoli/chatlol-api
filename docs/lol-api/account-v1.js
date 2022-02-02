let RiotRequest = require('riot-lol-api');
const {
    api
} = require("../../configs/api");

let riot = new RiotRequest(api.key);

// precisa testar
// riot.request('BR1', 'encryptedSummonerId', `/riot/account/v1/active-shards/by-game/{game}/by-puuid/{puuid}`, async function (err, data) {
//     console.log(data);
// })