let RiotRequest = require('riot-lol-api');
const {
    api
} = require("../../configs/api");

let riot = new RiotRequest(api.key);

// free week & free week para novos jogadores
riot.request('BR1', 'encryptedSummonerId', `/lol/platform/v3/champion-rotations`, async function (err, data) {
    console.log(data)
})