const express = require('express'); //load the express library into the file
const server = express(); //calling function to run server
server.use(express.static(__dirname + '/html'));
//middleware -> runs in between 2 points. otherwise known as the middle

var insults = [
    'you smell... bad', 
    'your mom',
    'no you',
    'i know you are but what am I'
]


server.get('/', function(request, response){
    response.send('Carrier has Arrived');
})
//two arguments that this takes
//1. path/url to listen for
//2. callback function to call once that path has been received
//function is going to receive 2 things.
//1. object reprsenting all of the data coming from the client to the server (req)
//2. an object representing all of the data going from the server to the client (res)
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