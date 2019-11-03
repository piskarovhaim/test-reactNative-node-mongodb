const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    passport: {type:Number , required : true},
    seat: {type:String},
    name:{type:String}
});

module.exports = new mongoose.model('User',userSchema);