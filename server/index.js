const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const port = 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});
// middlewares
const bodyParser = require('body-parser');
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));


// const { connect, sql } = require('./util/database')
// console.log(connect)
// connect.then((pool) => {
//     pool.request().query("SELECT * FROM Full_Contract", (err, data) => {
//         if (err) {
//             console.log('err rồi kìa', err)
//         }
//         console.log('data nè', data)
//     })
// })
//     .catch()



const sql = require("msnodesqlv8");

const connectionString = "server=LAPTOP-6K768AE2\\NGUYENCONGHIEU;username=NGUYENCONGHIEU;password=buaconhachuc1;Database=QUANLYBDS_SIXlEOPARD;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}";
const query = "SELECT * FROM Full_Contract";

sql.open(connectionString, function (err, conn) {
    if (err) {
        console.log("Error while connecting to DB :: " + err);
    }
})

let dataContract;

const connectDatabase = () => {
    sql.query(connectionString, query, (err, rows) => {
        // console.log(rows);
        dataContract = rows
        return dataContract
    });
}

connectDatabase();

// apis



app.post('/contract', (req, res) => {
    console.log(req.body)
    const data = req.body
    var insertData = `INSERT INTO Full_Contract(Customer_Name,Year_Of_Birth,SSN,Customer_Address,Mobile,Property_ID,Price,Deposit,Remain,Status) 
VALUES (N'${data.Customer_Name}',${data.Year_Of_Birth}, N'${data.SSN}', N'${data.Customer_Address}', N'${data.Mobile}', ${data.Property_ID},  ${data.Price}, ${data.Deposit},${data.Remain},${data.Status})`;
    const result = sql.query(connectionString, insertData, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
        connectDatabase();

    });
    res.json('chuẩn r đấy')
})
app.delete('/contract/:id', (req, res) => {
    // console.log(req.params.id)
    const id = req.params.id

    var insertData = `DELETE FROM Full_Contract WHERE ID = ${id}`;
    const result = sql.query(connectionString, insertData, function (err, result) {
        if (err) throw err;
        console.log("1 record delete");
        connectDatabase();

    });
    res.json('Xóa rồi nhá')

});
app.get('/contract', (req, res) => {
    res.json(dataContract);

})
// app.get('/contract', async function (req, res) {





var path = require('path');
// console.log('__dirname',__dirname)
// '/admin' serve the files at client-admin/build/* as static files
app.use('/home', express.static(path.resolve(__dirname, '../client/build')));
app.get('home/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
});
// '/' serve the files at client-customer/build/* as static files
// app.use('/', express.static(path.resolve(__dirname, '../client-customer/build')));
// app.get('/*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, '../client-customer/build', 'index.html'));
// });