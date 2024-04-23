var mysql = require('mysql2');

const db_info = {
    host     : 'svc.sel5.cloudtype.app',
    user     : 'root',
    password : process.env.password,
    database : 'test',
    port:'30749'
  }

module.exports = {
    queryExecute : async (query, values)=>{
        
        const connection = mysql.createConnection(db_info);
              connection.connect();
        
        return await new Promise((resolve,reject)=>{
            connection.query(query,values, function (error, results, fields) {
                if(error){
                    console.log('에러',error)
                }
                // console.log('d',resolve(results))
                resolve(results);
                connection.end();
            });
        })
    }
};



