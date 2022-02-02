let RiotRequest = require('riot-lol-api');
const {
    api
} = require("../../configs/api");

let riot = new RiotRequest(api.key);

let puuid = "vjRJfvaqhlIcNlGJ9sE4KX-ObBulmn6r_4Vf4Ua9l68Lk71_OmffVwiViq97miDwF7YvkL5Q5nmW2w";

// retorna id das últimas partidas jogadas
// riot.request('americas', 'puuid', `/lol/match/v5/matches/by-puuid/${puuid}/ids`, async function (err, data) {
//     console.log(data)
// })