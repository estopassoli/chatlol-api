const {connect} = require('../configs/connect')
async function createUser(chatid, stage){
  const conn = await connect();
  const sql = `INSERT INTO users (chatid, stage) VALUES ('${chatid}', '${stage}');`;
  await conn.query(sql);

  return;
}
async function updateSummoner(chatid, nickname, level, rank, winrate) {
  const conn = await connect();
  const sql = `UPDATE users SET (nickname, rank, level, winrate) values ('${nickname}','${rank}','${level}','${winrate}') WHERE chatid ='${chatid}';`
  await conn.query(sql);

  return;
}
async function updateUser(chatid, field, value) {
  const conn = await connect();
  const sql = `UPDATE users SET ${field} = '${value}' WHERE chatid = '${chatid}';`
  await conn.query(sql);

  return;
}
async function updateUser(chatid, field, value) {
  const conn = await connect();
  const sql = `UPDATE users SET ${field} = '${value}' WHERE chatid = '${chatid}';`
  await conn.query(sql);

  return;
}
async function getStage(chatid) {
  const conn = await connect();
  const sql = `SELECT stage FROM users WHERE chatid = '${chatid}';`;
  let [res] = await conn.query(sql);
  return res[0]['stage'];
}
async function setStage(chatid, stage) {
  const conn = await connect();
  const sql = `UPDATE users SET stage = '${stage}' WHERE chatid = '${chatid}';`

  return await conn.query(sql);
}
async function getSummonerData(chatid, value) {
  const conn = await connect();
  const sql = `SELECT ${value} FROM users WHERE chatid = '${chatid}';`
  let [res] = await conn.query(sql);

  return res;
}
module.exports = {
  getStage,
  createUser,
  setStage,
  updateSummoner,
  getSummonerData,
  updateUser
}