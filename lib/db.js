const mysql = require('mysql')
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '!2216Colo',
    database: 'crud_books'
})

connection.connect(function (error) {
    if (!error) {
        console.log(error)
    } else {
        console.log('Connected..! to Database')
    }
})

module.exports = connection

// mysql://b16bcc09fc394e:9389808a@us-cdbr-east-05.cleardb.net/heroku_38ca7980edbfae2?reconnect=true

