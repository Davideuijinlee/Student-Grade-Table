const express = require('express'); 
const mysql = require('mysql');
const mysqlcredentials = require('./mysqlcreds.js');
const db = mysql.createConnection(mysqlcredentials);
const server = express(); 
server.use(express.static(__dirname + '/html'));

server.get('/api/grades', (req, res)=> {
    res.send(`{
        "success": true,
        "data": [{
            "id": 10,
            "name": "David Lee",
            "course": "underwater weaving",
            "grade": 80
        }, {
            "id": 11,
            "name": "John Wee",
            "course": "high intensity rapping",
            "grade": 70
        }, {
            "id": 12,
            "name": "Javid Lwee",
            "course": "yarn tossing",
            "grade": 83
        }]
    }`)
})

server.listen(3001, ()=>{
    console.log('Battlecruiser Operational');
})
//where am i setting up shop and what am i going to call when i'm set up