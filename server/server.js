const express = require('express'); 
const server = express(); 
server.use(express.static(__dirname + '/SGT'));


var insults = [
    'you smell... bad', 
    'your mom',
    'no you',
    'i know you are but what am I'
]


server.get('/', function(request, response){
    response.send('Carrier has Arrived');
})

server.get('/time', (request, response)=>{
    var now = new Date();
    response.send( now.toLocaleDateString() )
})

server.get('/insult', (request, response)=>{
    var randomInsult = insults[Math.floor(Math.random()*insults.length)]
    response.send(randomInsult);
})



server.listen(3001, ()=>{
    console.log('Battlecruiser Operational');
})
//where am i setting up shop and what am i going to call when i'm set up