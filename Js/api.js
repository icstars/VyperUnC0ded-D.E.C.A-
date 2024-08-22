const client = require('./dataconnection.js')
const express = require('express');

const app = express();

app.listen(5501, ()=>{
    console.log("Server is now listening at port 5501")
});

client.connect();

app.get('/staff', (req, res)=>{
    client.query(`Select * from staff`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
});