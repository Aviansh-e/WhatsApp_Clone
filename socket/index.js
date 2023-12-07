import { Server, Socket } from "socket.io";
const io = new Server(9000, {
    cors: {
        origin: 'http://localhost:3000'
    }
});

let users = [];

const addUser = (userData, socketId) => {
    !users.some(user => user.sub === userData.sub) && users.push({ ...userData, socketId });
};

const getUser = (userID) => {
    return users.find(user => user.sub === userID);
}
io.on("connection", (socket) => {
    console.log("user connected");

    socket.on("addUsers", userData => {
        addUser(userData, socket.id);
        io.emit("getuser", users);
    });

    // socket.on('sendMessage', data => {
    //     const user = getUser(data.receiverId);
    //     // io.to(user.socketId).emit('getMessage', data);
    // })
    // socket.on('sendMessage', data => {
    //     const user = getUser(data.receiverId);
    //     if (user && user.socketId) { // Check if user and socketId exist
    //         io.to(user.socketId).emit('getMessage', data);
    //     } else {
    //         // Handle case where user is not found or socketId is missing
    //     }
    // });
});
