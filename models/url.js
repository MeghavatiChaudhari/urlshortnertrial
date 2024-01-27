const mongoose = require('mongoose');

const urlScahema = new mongoose.Schema({
   shortId:{
    type:String,
    required:true,
    unique:true,
   },
   redirectURL:{
    type:String,
    required:true,
   },
   visitHistroy:[{
    timestamp:{type:Number}
   }],
},
{timestamps:true}
);

const URL = mongoose.model('url',urlScahema);

module.exports=URL;