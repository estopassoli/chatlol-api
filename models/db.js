function connect(){
    if(global.connection && global.connection.state !== 'disconnected'){
        return global.connection}

    const mysql = require('mysql2/promise');


    const connection = mysql.createConnection({
      host: 'localhost',
      user: 'joelvasiliev',
      password: '123',
      database: 'clientes'
    });
    console.log('Conectou no banco de dados!');

    global.connection = connection;

    return connection;
}

// funções

async function getStage(chatid){
  const conn = await connect();
  const sql = `SELECT stage FROM cliente WHERE chatid = '${chatid}';`;
  let [res] = await conn.query(sql);

  return res[0]['stage'];
}

async function setStage(chatid, stage){
  const conn = await connect();
  const sql = `UPDATE cliente SET stage = '${stage}' WHERE chatid = '${chatid}';`

  return await conn.query(sql);
}

async function getCustomerData(chatid,value){
    const conn = await connect();
    const sql = `SELECT ${value} FROM cliente WHERE chatid = '${chatid}';`
    let [res] = await conn.query(sql);
    
    return res;
  }

async function createSummoner(chatid, stage){
  const conn = await connect();
  const sql = `INSERT INTO cliente (chatid, stage) values('${chatid}','${stage}')`;
  await conn.query(sql);
  return;
}

module.exports = {
  getCustomerData,
  getStage,
  setStage,
  createSummoner
}