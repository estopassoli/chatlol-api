const mysql = require('mysql2/promise');

function connect() {
    if (global.connection && global.connection.state !== 'disconnected') {
        return global.connection
    }
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '12345678',
        database: 'chatlol-api'
    });
    console.log('[INI] Banco de dados iniciado com sucesso!');
    global.connection = connection;
    return connection;
}


module.exports = {
    connect
}