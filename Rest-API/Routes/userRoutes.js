const express = require("express");
const path = require("path");


const { allUsers, createUser, updateUsers, deleteUser } = require("../controller/userController");

const router = express.Router();

router.get("/",allUsers);
router.post("/",createUser);
router.put("/:id",updateUsers);
router.delete("/:id",deleteUser);

module.exports = router;