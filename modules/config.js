require('dotenv').config();

const config = {
    db: { 
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DB,
        port: process.env.MYSQL_PORT,
        waitForConnections: true,
        connectionLimit: 1,
        queueLimit: 0,
        dateStrings:true,
        multipleStatements: true
    }
}

module.exports = config
