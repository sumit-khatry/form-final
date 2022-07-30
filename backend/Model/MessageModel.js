const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
Id:{
    type:Number,
    default:1,

},
  Types: {
      type: String,
      required: true,
    },
    message:{
        type:String,
        required:true,
    }
});

module.exports=mongoose.model('Message',messageSchema)