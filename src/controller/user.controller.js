const userModel = require('../model/user.model');
const { success, failed, succesWithToken } = require('../helper/response');
const jwtToken = require('../helper/generateJWT');
const cloudinary = require("../helper/cloudinary");

const bcyrpt = require('bcrypt');

module.exports = {
    register: (req, res) => {
        try {
            const { full_name, email, password } = req.body;
            bcyrpt.hash(password, 10, (err, hash) => {
                if (err) {
                    failed(res, err.message, 'failed', 'fail hash password');
                }

                const data = {
                    full_name,
                    email,
                    phone: null,
                    password: hash,
                }
                console.log(data);
                userModel.register(data).then((result) => {
                    success(res, result, "success", "register success")
                }).catch((err) => {
                    console.log(err)
                    failed(res, err.message, 'failed', "register fail")
                })
            })
        } catch (err) {
            failed(res, err.message, 'failed', 'internal server error');
        }

    },

    login: async (req, res) => {
        const { email, password } = req.body;
        userModel.checkEmail(email).then((result) => {
            // console.log(res);
            const user = result.rows[0];
            if (result.rowCount > 0) {
                bcyrpt.compare(password, result.rows[0].password).then(async (result) => {
                    if (result) {
                        const token = await jwtToken({
                            email: user.email,
                        });
                        console.log(token);
                        // delete password
                        delete user.password;
                        success(res, {
                            token,
                            data: user
                        }, "success", "login success");
                    } else {
                        // ketika password salah
                        failed(res, null, 'failed', 'email atau password salah');
                    }
                })
            } else {
                // ketika email salah
                failed(res, null, 'failed', 'email atau password salah');
            }
        }).catch((err) => {
            failed(res, err.message, 'failed', 'internal server error');
        })
    },

    list: (req, res) => {
        userModel.selectAll()
            .then((results) => {
                success(res, results, 'success', 'get all user success');
            }).catch((err) => {
                failed(res, err.message, 'failed', 'get all user failed');
            })
    },

    detail: (req, res) => {
        const id = req.params.id
        userModel.selectDetail(id).then((results) => {
            res.json(results)
        }).catch((err) => {
            res.json(err)
        })
    },

    updateAvaCloud: async (req, res) => {
        try {
            const id = req.params.id;
            let avatar;

            if (req.file) {
                avatar = await cloudinary.uploader.upload(req.file.path);
            }
            console.log("avatar");

            userModel.selectDetail(id)
                .then(async (result) => {
                    const data = await result.rows[0];
                    if (data.ava_pub_id) {
                        const public_id = data.ava_pub_id;
                        await cloudinary.uploader.destroy(public_id);
                    }
                    const updateData = {
                        id,
                        avatar,
                        ava_pub_id: avatar.public_id || data.ava_pub_id,
                        ava_url: avatar.url || data.ava_url,
                        ava_secure_url: avatar.secure_url || data.ava_secure_url
                    }
                    console.log("updateData", updateData)

                    userModel
                        .updateAva(updateData)
                        .then(async () => {
                            console.log(avatar);
                            console.log('lolos controller')
                            const result = await userModel.selectDetail(id);
                            success(res, result.rows[0], "success", "data has been update");
                        })
                        .catch((err) => {
                            failed(res, err.message, "failed", "failed to update data, something went wrong")
                        })

                })
                .catch((err) => {
                    failed(res, err.message, "failed", `user id: ${id} not valid`);
                })
        } catch (err) {
            failed(res, err.message, "failed", "internal server error");
        }
    },
    updateUsers: (req, res) => {
        try {
            const id = req.params.id;
            const updateData = {
                full_name: req.body.full_name,
                phone: req.body.phone,
                id,
            }

            console.log(updateData)
            userModel
                .updateUsers(updateData)
                .then((result) => {
                    success(res, result, "success", "success update data")
                })
                .catch((err) => {
                    failed(res, err.message, "failed", "failed update data")
                })
        }
        catch (err) {
            failed(res, err.message, "failed", "internal server error")
        }
    },
    deleteUser: (req, res) => {
        try {
            const id = req.params.id;

            userModel
                .deleteUser(id)
                .then((result) => {
                    success(res, result, "success", "success delete data")
                })
                .catch((err) => {
                    failed(res, err.message, "fail", "gagal delete data")
                })
        } catch (error) {
            failed(res, error.message, "failed", "internal server error")
        }

    }

}
