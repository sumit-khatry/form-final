const Loyality=require("../Model/LoyalityModel")
const Message=require("../Model/MessageModel")


exports.newMessage=async(req,res,next)=>{
    const {Types,message,Id}=req.body;

  const nmessage=new Message({
   Types,message,Id
  });
  try{
const savedMessage=await nmessage.save();
 res.send(savedMessage)  
}
  catch(err){
    res.status(400).send(err);
    
  }
  

}


exports.newLoyality=async(req,res,next)=>{
    const {Id,Customer,color}=req.body;

    const loyality=new Loyality({
        Id,Customer,color
    })

    try{
        const saveLoyality=loyality.save();
        res.send(saveLoyality);
    }
    catch(err){
        res.status(400).send(err);
    }
}



exports.UpdateMessage=async(req,res,next)=>{
  try{
    const id=req.params.id;

    const result=await Message.findByIdAndUpdate(id,req.body,{new:true,useFindAndModify:false}).
    then((data)=>{
        if(!data) {res.status(404).send("error")}
        else{
            res.send(data);
        }

       
    }).catch(err=>{
        res.status(500).send("didnt update data");
    })
res.send(result);
}
catch(err){
    res.status(400).send(err);
    console.log(err)
}
}


exports.getMessage=async(req,res,next)=>{
    const data=Message.find().then(message=>{
        res.send(message);
    })
}



exports.deleteMessage=async(req,res,next)=>{
    const id=req.params.id;
    Message.findByIdAndDelete(id)
    .then(data=>{
        if(!data){
            res.status(404).send("not deleted")
        }else{
            res.send("id sucessfully deleted")
        }
    }).catch(err=>{
        res.staus(500).send(err)
    })
    
}








exports.updateLoyality=async(req,res,next)=>{
    try{
      const id=req.params.id;
  
      const result=await Message.findByIdAndUpdate(id,req.body,{new:true,useFindAndModify:false}).
      then((data)=>{
          if(!data) {res.status(404).send("error")}
          else{
              res.send(data);
          }
  
         
      }).catch(err=>{
          res.status(500).send("didnt update data");
      })
  res.send(result);
  }
  catch(err){
      res.status(400).send(err);
  }
  }
  
  
  exports.getLoyality=async(req,res,next)=>{
      const data=Loyality.find().then(message=>{
          res.send(message);
      })
  }
  
  
  
  exports.deleteLoyality=async(req,res,next)=>{
      const id=req.params.id;
      console.log(id);
      Loyality.findByIdAndDelete(id)
      .then(data=>{
          if(!data){
              res.status(404).send("not deleted")
          }else{
              res.send("id sucessfully deleted")
          }
      }).catch(err=>{
          res.staus(500).send(err)
      })
      
  }