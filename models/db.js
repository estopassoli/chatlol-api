const {
  connect
} = require('../configs/connect')

async function getStage(chatid) {
  const conn = await connect();
  const sql = `SELECT stage FROM summoner WHERE chatid = '${chatid}';`;
  let [res] = await conn.query(sql);

  return res[0]['stage'];
}

async function setStage(chatid, stage) {
  const conn = await connect();
  const sql = `UPDATE summoner SET stage = '${stage}' WHERE chatid = '${chatid}';`

  return await conn.query(sql);
}

async function getSummonerData(chatid, value) {
  const conn = await connect();
  const sql = `SELECT ${value} FROM summoner WHERE chatid = '${chatid}';`
  let [res] = await conn.query(sql);

  return res;
}

async function createSummoner(chatid, stage) {
  const conn = await connect();
  const sql = `INSERT INTO summoner (chatid, stage) values('${chatid}','${stage}')`;
  await conn.query(sql);
  return;
}
async function createSmurf(summonerid, accountId, puuid, chatid, nickname, profileIconId, level) {
  const conn = await connect();
  const sql = `INSERT INTO smurfs (summonerid, accountId, puuid, chatid, nickname, profileIconId, level) values('${summonerid}', '${accountId}', '${puuid}', '${chatid}', '${nickname}','${profileIconId}', '${level}')`;
  await conn.query(sql);
  return;
}

async function updateSummoner(chatid, field, value) {
  const conn = await connect();
  const sql = `UPDATE summoner SET ${field} = '${value}' WHERE chatid = '${chatid}';`
  await conn.query(sql);

  return;
}

// specific mode functions tables

async function createRankedData(mode, chatid, summonerId, queueType, tier, elo, leaguePoints, wins, losses) {
  const conn = await connect();
  const sql = `INSERT INTO summonerData${mode} (chatid, summonerId, queueType, tier, elo, leaguePoints, wins, losses) values('${chatid}','${summonerId}','${queueType}','${tier}','${elo}',${leaguePoints},${wins},${losses});`;
  await conn.query(sql);
}

module.exports = {
  getSummonerData,
  getStage,
  createSmurf,
  setStage,
  createSummoner,
  updateSummoner,
  createRankedData
}