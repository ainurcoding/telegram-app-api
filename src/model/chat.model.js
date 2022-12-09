const db = require('../config/db')

module.exports = {
    store: (data) => {
        const now = new Date();
        const withPmAm = now.toLocaleTimeString('en-US', {
            // en-US can be set to 'default' to use user's browser settings
            hour: '2-digit',
            minute: '2-digit',
          });

        //   console.log("timeWithPmAm", typeof withPmAm)
        const { sender, receiver, message } = data
        return new Promise((resolve, reject) => {
            db.query(`INSERT INTO chats (sender, receiver, message, time_send) 
            VALUES (${sender}, ${receiver}, '${message}', '${withPmAm}')`, (err, res) => {
                if (err) {
                    reject(err)
                }
                resolve(res)
            })
        })
    },

    list: (sender, receiver) => {
        return new Promise((resolve, reject) => {
            db.query(`SELECT chats.id, chats.message, chats.time_send, userSender.email AS sender, userReceiver.email AS receiver
            FROM chats
            LEFT JOIN users AS userSender ON chats.sender=userSender.id
            LEFT JOIN users AS userReceiver ON chats.receiver=userReceiver.id
            WHERE
            (sender=${sender} AND receiver=${receiver})
            OR (sender=${receiver} AND receiver=${sender})`, (err, res) => {
                if (err) {
                    reject(err)
                }
                resolve(res)
            })
        })
    }
}
