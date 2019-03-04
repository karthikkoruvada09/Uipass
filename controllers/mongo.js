const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let data = new Schema({
    name : String,
    gid : String
})

module.exports=mongoose.model('user',data);