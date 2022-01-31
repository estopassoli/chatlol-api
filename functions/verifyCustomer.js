const db = require('./db-functions');

async function verifyCustomer(message){
    const id = await db.getCustomerData(message.from,'id');
    if (typeof id[0] !== 'undefined'){
        //return true; // já existia o cadastro do cliente no banco
    }
    else{
        await db.createCustomer('','',message.from,'cadastro-nome');
        // não existia o cadastro mas foi criado
    }
    let res = await db.getStage(
        message.from
        );
    return res;
}

exports.verifyCustomer = verifyCustomer;