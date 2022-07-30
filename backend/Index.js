const express=require('express');
const dotenv=require('dotenv')
const cors=require('cors');
const connectDatabase=require('./Database/databaseConn')
const Message=require('./Routes/MessageRoute')

const app=express();
dotenv.config();
connectDatabase();
app.use(cors());
app.use(express.json({limit:"1000MB"}));

app.use('/',Message)

app.listen(process.env.PORT,()=>console.log("server is running on port:",process.env.PORT))