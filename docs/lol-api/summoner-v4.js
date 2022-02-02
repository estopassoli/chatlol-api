let RiotRequest = require('riot-lol-api');
const {
    api
} = require("../../configs/api");

let riot = new RiotRequest(api.key);

// nick do jogador
let nome = "katarina";

// puuid 'katarina'
let puuid = "vjRJfvaqhlIcNlGJ9sE4KX-ObBulmn6r_4Vf4Ua9l68Lk71_OmffVwiViq97miDwF7YvkL5Q5nmW2w"

// account id 'katarina'
let account_id = "GD_Hx_jOhjfLnL5dWIcDnPa8nt7b65EO_D14D2nXxd8"

// id
let id = "QIT98Umnob5jHyC8ZgAJsAM65wEpyw6DefjXq1Q5gqar"

// infos jogador: elo, lvl, id, puuid, etc. pelo nome
// riot.request('BR1', 'encryptedSummonerId', `/lol/summoner/v4/summoners/by-name/${nome}`, async function (err, data) {
//     console.log(data);
// })

// mesmas infos de cima mas pelo account id
// riot.request('BR1', 'encryptedSummonerId', `/lol/summoner/v4/summoners/by-account/${account_id}`, async function (err, data) {
//     console.log(data)
// })

// mesmas infos dos de cima porém pelo puuid
// riot.request('BR1', 'encryptedSummonerId', `/lol/summoner/v4/summoners/by-puuid/${puuid}`, async function (err, data) {
//     console.log(data)
// })

// mesmas infos de cima porém pelo id
// riot.request('BR1', 'encryptedSummonerId', `/lol/summoner/v4/summoners/${id}`, async function (err, data) {
//         console.log(data)
//     })