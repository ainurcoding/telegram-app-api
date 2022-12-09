const db = require('../config/db')

const userModel = {
    // router list
    selectAll: () => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM users ORDER by full_name ASC', (err, res) => {
                if (err) {
                    reject(err)
                }
                resolve(res)
            })
        })
    },
    // router - details
    selectDetail: (id) => {
        return new Promise((resolve, reject) => {
            db.query(`SELECT * FROM users WHERE id=${id}`, (err, res) => {
                if (err) {
                    reject(err)
                }
                resolve(res)
            })
        })
    },

    // router - insert
    store: (username, phone, password) => {
        return new Promise((resolve, reject) => {
            db.query(`
            INSERT INTO users (username, phone, password)
            VALUES
            ('${username}', '${phone}', '${password}')
            `, (err, res) => {
                if (err) {
                    reject(err)
                }
                resolve(res)
            })
        })
    },

    // model register
    register: (data) => {
        return new Promise((resolve, reject) => {
            db.query(`INSERT INTO users(full_name, email, phone, password)
      VALUES
      ('${data.full_name}', '${data.email}', '${data.phone}', '${data.password}')`, (err, res) => {
                if (err) {
                    reject(err)
                }
                resolve(res)
            })
        })
    },

    // model login
    checkEmail: (email) => {
        return new Promise((resolve, reject) => {
            db.query(`SELECT * FROM users WHERE email = '${email}'`, (err, res) => {
                if (err) {
                    reject(err)
                }
                resolve(res);
            })
        })
    },
    updateAva: (updateData) => {
        return new Promise((resolve, reject) => {
            updated_at = 'now()';
            const query = {
                text: `UPDATE users SET 
                        avatar = $1, 
                        ava_pub_id = $2, 
                        ava_url = $3, 
                        ava_url_secure = $4,
                        updated_at = $6 
                        WHERE id = $5`,
                values: [
                    updateData.avatar,
                    updateData.ava_pub_id,
                    updateData.ava_url,
                    updateData.ava_url_secure,
                    updateData.id,
                    updated_at,
                ]
            }
            db.query(query, (err, res) => {
                if (err) {
                    reject(err)
                }
                console.log('lolos model');
                resolve(res)
            })
        })
    },
    updateUsers: (updateData) => {
        return new Promise((resolve, reject) => {
            const updated_at = 'now()';
            const query = {
                text: `
                    UPDATE users SET
                    full_name = $1,
                    phone = $2,
                    updated_at =  $3
                    WHERE id = $4
                `,
                values: [
                    updateData.full_name,
                    updateData.phone,
                    updated_at,
                    updateData.id
                ]
            }
            db.query(query, (err, res) => {
                if(err) {
                    reject(err)
                } else {
                    resolve(res)
                }
            })
        })
    },
    deleteUser: (id) => {
        return new Promise((resolve, reject) => {
            db.query(`delete from users where id=${id}`, (err, res) => {
                if(err) {
                    reject(err)
                } else {
                    resolve(res)
                }
            })
        })
    }
}

module.exports = userModel
