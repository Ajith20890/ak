const path = require('path');

const http = require('http');

const socketIo = require('socket.io');

const express = require('express');

const publicpath =path.join(__dirname,'../public');

const port = process.env.PORT || 3000

var app = express();

var server=http.createServer(app);

var io = socketIo(server);

app.use(express.static(publicpath));

io.on('connection',(socket)=>{
  console.log('New User Connected');
});

// console.log(__dirname + '/../public');
//
// console.log(publicpath);

server.listen(port,()=>{
  console.log(`server is up and running in ${port}`);
});
