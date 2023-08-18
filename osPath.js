const os = require('os');
const path = require('path');

const hostname = os.hostname();
console.log(hostname);

console.log(os.homedir());

console.log(__dirname);

const directory = path.join(__dirname + "/view"); //joining the url
console.log(directory);

