let RiotRequest = require('riot-lol-api');
const {
    api
} = require("../../configs/api");

let riot = new RiotRequest(api.key);

let queue = "";
let tier = "";
let division = "";

riot.request('BR1', 'encryptedSummonerId', `/lol/league-exp/v4/entries/${queue}/${tier}/${division}`, async function (err, data) {
    console.log(data)
})