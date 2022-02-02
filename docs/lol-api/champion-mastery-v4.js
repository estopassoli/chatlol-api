let RiotRequest = require('riot-lol-api');
const {
    api
} = require("../../configs/api");

let riot = new RiotRequest(api.key);

// puuid 'katarina'
let puuid = "vjRJfvaqhlIcNlGJ9sE4KX-ObBulmn6r_4Vf4Ua9l68Lk71_OmffVwiViq97miDwF7YvkL5Q5nmW2w"

// account id 'katarina'
let account_id = "GD_Hx_jOhjfLnL5dWIcDnPa8nt7b65EO_D14D2nXxd8"

// id 'katarina'
let id = "QIT98Umnob5jHyC8ZgAJsAM65wEpyw6DefjXq1Q5gqar"

// json com todas as maestrias por id pego no request anterior
// riot.request('BR1', 'encryptedSummonerId', `/lol/champion-mastery/v4/champion-masteries/by-summoner/${id}`, function (err, data) {
//     console.log(data)
// })

// o mesmo que o de cima mas só retorna os que tem nível de maestria igual a 7
// essa função retorna dos maiores para os menores, ou seja, o primeiro item será o de maior maestria daquele jogador.
// riot.request('BR1', 'encryptedSummonerId', `/lol/champion-mastery/v4/champion-masteries/by-summoner/${id}`, function (err, data) {
//     for (let i in data){
//         if(data[i]['championLevel'] == 7) {
//             console.log(data[i]);
//         }
//     }
// })

// pontuação total da maestria do jogador.
// riot.request('BR1', 'encryptedSummonerId', `/lol/champion-mastery/v4/scores/by-summoner/${id}`, async function (err, data) {
//     console.log(data);
// })