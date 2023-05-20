const mongoose = require('mongoose');
const { Schema } = mongoose;


const userSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    timestamp:{
        type: Date,
        default: Date.now
    }
  });
  
  
  module.exports = mongoose.model('user',userSchema);