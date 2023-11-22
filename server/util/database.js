const sql = require("mssql/msnodesqlv8");

const config = {
    server: 'localhost',
    user: 'NGUYENCONGHIEU',
    password: 'buaconhachuc1',
    database: 'QUANLYBDS_SIXlEOPARD',
    driver: 'msnodesqlv8'
}
const connect = new sql.ConnectionPool(config).connect();
module.exports = {
    sql,
    connect
}

