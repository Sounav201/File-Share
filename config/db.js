 const mongoose = require('mongoose');
 require('dotenv').config();
 function connectDb(){
     //Database connection 
     mongoose.connect(process.env.MONGODB_CONNECTION_URL, {useNewUrlParser: true , useCreateIndex:true , useUnifiedTopology:true , useFindAndModify:true})
     
     const connection = mongoose.connection;

     connection.once('open' , () => {
         console.log('Database connected...')
     }).catch(error=>{
         console.log("Couldn't connect to Database!")
     })
 }


 module.exports = connectDb;
 //Gw7eaccjdgvDV83r