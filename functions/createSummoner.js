let {tmp_db} = require("../models/temp-db");
let db = require("../models/db");

async function createSummoner(chatid){

    let json = tmp_db[chatid];

    // falta wins, losses, role
    
    return;
    
}

exports.createSummoner = createSummoner;