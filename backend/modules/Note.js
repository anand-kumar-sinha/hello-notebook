const mongoose = require('mongoose');
const { Schema } = mongoose;


const notesSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'note'
    },
    tittle:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true,
    },
    tag:{
        type: String,
    },
    timestamp:{
        type: Date,
        default: Date.now
    }
  });
  
  module.exports = mongoose.model('note',notesSchema);