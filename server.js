const express = require('express');
const useSocket = require('socket.io')
const app = express();

const server = require('http').Server(app);
const io = useSocket(server);

const rooms = new Map();

app.get('/rooms', (req, res) => {
    res.json(rooms)
})

io.on('connection', socket => {
    console.log('user connected', socket.id)
})

server.listen(8888, (err) => {
    if(err) {
        throw Error(err)
        console.log('some error with start server');
    }
    console.log('Server started')
});