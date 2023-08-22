//module exports and import


const s1 = require('./student') //for accesing every function from student .

const {getName} = require('./student') //for accessint only one function


console.log(getName());
console.log(s1.result); 


