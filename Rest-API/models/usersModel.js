const {v4: uuidv4} = require("uuid");

const users = [
    {
        id: uuidv4(),
        userName: "sabbir rahman",
        userEmail: "mdsabbirrahman2025@gmail.com"
    },
    {
        id: uuidv4(),
        userName: "sanzidul islam",
        userEmail: "sanzidul@gmail.com"
    }
]

module.exports = users;