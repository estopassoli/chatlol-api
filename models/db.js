const {connect} =require('../configs/connect')

async function getStage(chatid){
  const conn = await connect();
  const sql = `SELECT stage FROM users WHERE chatid = '${chatid}';`;
  let [res] = await conn.query(sql);

  return res[0]['stage'];
}

async function setStage(chatid, stage){
  const conn = await connect();
  const sql = `UPDATE users SET stage = '${stage}' WHERE chatid = '${chatid}';`

  return await conn.query(sql);
}

async function getCustomerData(chatid,value){
    const conn = await connect();
    const sql = `SELECT ${value} FROM users WHERE chatid = '${chatid}';`
    let [res] = await conn.query(sql);
    
    return res;
  }

async function createSummoner(chatid, stage){
  const conn = await connect();
  const sql = `INSERT INTO users (chatid, stage) values('${chatid}','${stage}')`;
  await conn.query(sql);
  return;
}

module.exports = {
  getCustomerData,
  getStage,
  setStage,
  createSummoner
}