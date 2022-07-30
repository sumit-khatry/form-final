const mongoose=require('mongoose');



const loyalitySchema=new mongoose.Schema({
Id:{
    type:Number,
    default:1,
},
Customer:{
    type:String,
    required:true,
},
color:{
type:String,
required:true,
}
})


module.exports=mongoose.model('Loyality',loyalitySchema);