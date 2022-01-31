async function createCustomer(nome_completo, cpf, chatid, stage){
  const conn = await connect();
  const sql = `INSERT INTO cliente (nome_completo, cpf, chatid, stage) values('${nome_completo}','${cpf}','${chatid}','${stage}')`
  await conn.query(sql);

  return;
}

async function updateCustomer(chatid,field,value){
  const conn = await connect();
  const sql = `UPDATE cliente SET ${field} = '${value}' WHERE chatid = '${chatid}';`
  await conn.query(sql);

  return;
}

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

/// agendamentos ///

async function pegarHorariosCadastradosDiaEspecifico(input){
  const conn = await connect();
  const sql = 'select TIME_FORMAT(horario,"%k:%i") as `horario` from horarios_cadastrados where data = ?;';
  const values = [input.data]

  const [res] = await conn.query(sql,values)
  
  return await res;
}

async function pegarHorariosPossiveis(){
  const conn = await connect();
  const [rows] = await conn.query('select TIME_FORMAT(horario,"%k:%i") as `tempo_formatado` from horarios_possiveis;');
  return await rows;
}

async function criarAgendamento(idcliente, nomecliente, data, horario){
  const conn = await connect();
  const sql = `insert into horarios_cadastrados (idcliente, nomecliente, data, horario, confirmado) values('${idcliente}','${nomecliente}','${data}','${horario}',false)`;
  return await conn.query(sql);
}

async function meusAgendamentos(idcliente){
  const arr_id = await getCustomerData(idcliente,'id');
  let idC = arr_id[0]['id'];
  const conn = await connect();
  const sql = `select * from horarios_cadastrados where idcliente = '${idC}';`;
  const [query] = await conn.query(sql);

  return await query
}
async function deletarAgendamento(idcliente, num){
  const arr_id = await getCustomerData(idcliente,'id');
  let idC = arr_id[0]['id'];
  const conn = await connect();
  const sql = `DELETE FROM horarios_cadastrados WHERE idpedido = ${num} AND idcliente = ${idC};`;
  return await conn.query(sql);
}


module.exports = {
  getStage,
  setStage,
  getCustomerData,
  createCustomer,
  deletarAgendamento,
  updateCustomer,
  pegarHorariosCadastradosDiaEspecifico,
  pegarHorariosPossiveis,
  criarAgendamento,
  meusAgendamentos
}