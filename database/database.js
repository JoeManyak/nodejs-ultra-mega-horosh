const mysql = require('mysql')

//getConnecting — is using for creating connection to mysql server
function getConnection() {
    return mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "password",
        database: "lab",
        insecureAuth: true
    })
}

//query is using to send query to mysql server and returning promise with result data
function query(query, args) {
    const con = getConnection()
    return new Promise((resolve, reject) => {
        con.connect(function (err) {
            if (err) return reject(err);
            con.query(query, args, function (err, result, fields) {
                if (err) return reject(err);
                return resolve(result)
            })
        })
    })
}

module.exports = {query}