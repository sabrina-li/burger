const mysql = require('mysql');
let conn;

if(process.env.JAWSDB_URL){
    conn = mysql.createConnection(process.env.JAWSDB_URL);
}else{
    conn = mysql.createConnection({
        connectionLimit : 10,
        host            : 'localhost',
        user            : 'root',
        password        : 'root',
        database        : 'burgers_db'
      });
}
   
conn.connect();
module.exports = conn;