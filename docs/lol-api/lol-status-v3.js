let RiotRequest = require('riot-lol-api');
const {
    api
} = require("../../configs/api");

let riot = new RiotRequest(api.key);

// retorna o status do servidor escolhido
riot.request('BR1', 'encryptedSummonerId', `/lol/status/v3/shard-data`, async function (err, data) {
    console.log(data)
})