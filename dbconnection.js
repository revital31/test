const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 12,
    host: 'localhost',
    user: 'server_1',
    password: '1234',
    database: 'servers_info'
    //insecureAuth : true
});



pool.on('connection',(db)=>{
    console.log(`New connection id:${db.threadId}`)
    });

    
pool.on('acquire',(db)=>{
    console.log(`Acquire connection id:${db.threadId}`)
    });
    

    pool.on('enqueue',()=>{
        console.log('waiting for available connection slot');
    });

    
   
   pool.on('release', (db) => {
    console.log('Connection ${db.threadId} released');
  });


 
  module.exports = {pool}