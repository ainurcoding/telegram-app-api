const { store, list } = require('../model/chat.model')

module.exports = (io, socket) => {
    socket.on("ping", (data) => {
        socket.emit('ping-response', data);
    });
    // private chat
    socket.on("join-room", (data) => {
        const { id, full_name, phone, password } = data
        socket.join(id)
    })

    // send messages
    socket.on("send-message", (data) => {
        console.log("send message",data)
        store(data).then(async () => {
            const listChats = await list(data.sender, data.receiver)
            io.to(data.receiver).emit('send-message-response', listChats.rows)
        }).catch((err) => {
            console.log(err)
        })
    });

    //history chat
    socket.on("chat-history", async (data) => {
        console.log("chat history",data)
        try {
            const listChats = await list(data.sender, data.receiver)
            io.to(data.sender).emit('send-message-response', listChats.rows)
        }
        catch (err) {
            console.log('Error chat-history')
        }
    })
}