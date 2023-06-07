const mariadb = require('mariadb')

const pool = mariadb.createPool({
    host: "10.10.20.57",
    user: "root",
    password: "",
    database: "testdb"
})

module.exports = pool