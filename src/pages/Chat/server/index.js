const express = require('express');
const app = express()
const http = require('http');
const cors = require('cors');
const {Server} = require("socket.io")
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
	    origin : "http://13.209.67.178:3000", // 통신할 주소
        methods : ["GET","POST"],
    }
});

io.on("connection", (socket)=>{
    console.log(`User Connect : ${socket.id}`);

    socket.on("join_room",(data)=>{
        socket.join(data);
        console.log(`User with ID: ${socket.id} joined room : ${data}`)
    });

    socket.on("send_message",(data) => {
        socket.to(data.room).emit("receive_message",data);
    }) // 같은방에 있는 사람들에게 메시지를 보여줌

    socket.on("disconnect",()=>{
        console.log("User Disconneced", socket.id);
    })
});




server.listen(3001,()=>{
    console.log("SERVER RUNNING");
});
