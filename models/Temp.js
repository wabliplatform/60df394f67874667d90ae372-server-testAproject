
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tempSchema = new Schema({
Underscoreid:String , 


tempName:String 



})

module.exports = {
  Temp : mongoose.model('temp', tempSchema),
}

