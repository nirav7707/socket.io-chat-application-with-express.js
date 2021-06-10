var express = require("express");
var socket  = require("socket.io");

// App setup
var app = express();
var server = app.listen(4000,()=>{
    console.log('listening to request on port 4000...'); 
});

// static file setup
app.use(express.static('public'));

// socket setup
var io = socket(server);

io.on('connection',(socket)=>{
    console.log("connected");

    socket.on('chat',(data)=>{
        io.sockets.emit('chat',data);
    })

    socket.on('typing',(data)=>{
        socket.broadcast.emit('typing',data);
    })
});