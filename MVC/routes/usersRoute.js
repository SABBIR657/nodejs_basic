const express = require('express');
const { getUsers, saveUsers } = require('../controller/usersController');
const router = express.Router();



router.get("/users",getUsers); //getUsers is a controller

router.post("/users",saveUsers);

module.exports = router;