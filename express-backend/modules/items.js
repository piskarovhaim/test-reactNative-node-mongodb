const mongoose = require('mongoose');
const itemSchema = new mongoose.Schema({
    name: {type:String , default : "item" , required : true},
    price : Number,
    img: Buffer
});

module.exports = new mongoose.model('item',itemSchema);