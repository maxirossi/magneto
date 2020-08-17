const dotenv = require('dotenv');
dotenv.config();

let config = {
    port : 3030
}

let dbConfig = {
    user : process.env.DB_USER ,
    pwd : process.env.DB_PWD,
    host : process.env.DB_HOST,
    port : process.env.DB_PORT || 27017,
    database : process.env.DB_NAME
}

module.exports = {
    config,
    dbConfig
}

