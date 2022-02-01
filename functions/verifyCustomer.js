const db = require('../models/db');

async function verifyCustomer(message){
    const id = await db.getCustomerData(message.from,'id');
    if (typeof id[0] == 'undefined'){
        // não existe o cliente cadastrado
        await db.createSummoner(message.from,'menu-inicial');
    }
    else{
        // já existe cadastro
    }
    let res = await db.getStage(
        message.from
        );
    return res;
}

exports.verifyCustomer = verifyCustomer;