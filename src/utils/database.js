const mariadb = require('mariadb')

const pool = mariadb.createPool({
    host: "127.0.0.1",
    user: "root",
    password: "root01",
    database: "ptdataimpianbangsadb"
})

module.exports = pool