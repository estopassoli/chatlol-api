function connect() {
    if (global.connection && global.connection.state !== 'disconnected') {
        return global.connection
    }

    const mysql = require('mysql2/promise');


    const connection = mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: '12345678',
        database: 'summoners'
    });
    console.log('Conectou no banco de dados!');

    global.connection = connection;

    return connection;
}

module.exports = {
    connect
}