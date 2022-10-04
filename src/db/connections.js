const mongooes = require('mongoose');


mongooes.connect("mongodb://localhost:27017/customerDB").then(() =>{
    console.log("Connected to MongoDB");
}).catch(error => console.log(`No Connection! ${error}`));