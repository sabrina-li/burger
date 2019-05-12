const conn = require('./connection');
const orm = {
    selectAll:_=>{
        return new Promise((res,rej)=>{
            conn.query('SELECT * FROM ??',['burgers'], function (error, results, fields) {
                if (error) rej(error);
                res(results);
              });
        })
    },
    insertOne:data=>{
        return new Promise((res,rej)=>{
            conn.query('INSERT INTO ?? SET ?',['burgers',data], function (error, results, fields) {
                if (error) rej(error);
                res(results.insertId);
              });
        })
    },
    updateOne:(data,id)=>{
        return new Promise((res,rej)=>{
            conn.query('UPDATE ?? SET ? WHERE ?',['burgers',data,{id:id}], function (error, results, fields) {
                if (error) rej(error);
                res(results);
              });
        })
    }
}

//TEST:
// orm.selectAll().then(console.log);
// data={
//     devoured: 0
// }
// orm.insertOne(data).then(console.log)
// orm.updateOne(data,4).then(console.log)

module.exports = orm;
