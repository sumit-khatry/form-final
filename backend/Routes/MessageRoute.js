const express=require('express').Router();

const router=express;
const {newMessage,newLoyality,UpdateMessage, getMessage, deleteMessage, updateLoyality, getLoyality, deleteLoyality}=require('../Controller/LoyalityController')


router.route("/message").post(newMessage)

router.route('/loyality').post(newLoyality);


router.route("/message/:id").put(UpdateMessage);


router.route("/getmessage").get(getMessage);

router.route("/delete/:id").delete(deleteMessage);





router.route("/loyality/:id").put(updateLoyality);


router.route("/getloyality").get(getLoyality);

router.route("/api/delete/:id").delete(deleteLoyality);


module.exports=router;