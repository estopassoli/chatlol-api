const {connect} =require('../configs/connect')

async function getStage(chatid){
  const conn = await connect();
  const sql = `SELECT stage FROM summoner WHERE chatid = '${chatid}';`;
  let [res] = await conn.query(sql);

  return res[0]['stage'];
}

async function setStage(chatid, stage){
  const conn = await connect();
  const sql = `UPDATE summoner SET stage = '${stage}' WHERE chatid = '${chatid}';`

  return await conn.query(sql);
}

async function getSummonerData(chatid,value){
    const conn = await connect();
    const sql = `SELECT ${value} FROM summoner WHERE chatid = '${chatid}';`
    let [res] = await conn.query(sql);
    
    return res;
  }

async function createSummoner(chatid, stage){
  const conn = await connect();
  const sql = `INSERT INTO summoner (chatid, stage) values('${chatid}','${stage}')`;
  await conn.query(sql);
  return;
}
async function createSmurf(chatid, summonerid, nickname, level, elosoloq, winrate){
  const conn = await connect();
  const sql = `INSERT INTO smurfs (summonerid, chatid, nickname, level, elosoloq, winrate) values('${summonerid}','${chatid}','${nickname}','${level}','${elosoloq},'${winrate})`;
  await conn.query(sql);
  return;
}

async function updateSummoner(chatid,field,value){
  const conn = await connect();
  const sql = `UPDATE summoner SET ${field} = '${value}' WHERE chatid = '${chatid}';`
  await conn.query(sql);

  return;
}


module.exports = {
  getSummonerData,
  getStage,
  createSmurf,
  setStage,
  createSummoner,
  updateSummoner
}