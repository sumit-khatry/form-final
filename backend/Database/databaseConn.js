const mongoose = require("mongoose");
//this is the process of connecting with the mongodb database.
const connectDatabase =( )=>{
    mongoose.connect(process.env.URL,{useNewUrlParser:true,useUnifiedTopology:true}).then((data)=>{
        console.log(`mongodb connected with server:${data.connection.host}`);
    
    }).catch((err)=>{
        console.log(err)
    })
  
}

module.exports= connectDatabase