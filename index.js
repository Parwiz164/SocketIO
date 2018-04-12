var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var people = {};

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

http.listen(3000, function(){
    console.log('listening on *:3000');
});

//when socket is connected
io.on('connection', function(socket){

    socket.on("join", function(name){
        people[socket.id] = name;
        socket.emit("update", "You have connected to the server.");
        socket.broadcast.emit("update", name + " has joined the server.")
        // socket.broadcast.emit("update-people", people);
    });

    socket.on("send", function(msg){
        io.emit("chat message", people[socket.id], msg);
    });

    socket.on("disconnect", function(){
        io.emit("update", people[socket.id] + " has left the server.");
        delete people[socket.id];
        // io.emit("update-people", people);
    });
    // //handling disconnects
    // socket.on('disconnect', function() {
    //     io.emit('chat message', 'some user disconnected');
    // });
});




