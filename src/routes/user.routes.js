const express = require('express')
const { 
    login, 
    register, 
    list, 
    detail,
    updateAvaCloud,
    updateUsers,
    deleteUser
} = require('../controller/user.controller')
const router = express.Router()

// upload ava
const uploadAva = require("../middleware/upload.ava.js")

// const upload = require('../middleware/upload');

// const jwtAuth = require('../middleware/jwtAuth');

// API GET users - list
router
    .get('/user', list)
    .get('/user/:id', detail)
    .post('/register', register)
    .post('/login', login)
    .delete('/delete_user/:id', deleteUser)
    .put('/user/update_ava_cloudinary/:id', uploadAva, updateAvaCloud)
    .put('/update_data_user/:id', updateUsers);

module.exports = router
