let RiotRequest = require('riot-lol-api');
const {
    api
} = require("../../configs/api");

let riot = new RiotRequest(api.key);

// algumas outras informações sobre o servidor escolhido.
riot.request('BR1', 'encryptedSummonerId', `/lol/status/v4/platform-data`, async function (err, data) {
    console.log(data)
})