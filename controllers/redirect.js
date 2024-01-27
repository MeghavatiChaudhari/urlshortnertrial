const URL = require('../models/url');

async function HandlereceiveShortidasqueryparameter(req,res){
    const {shortId} = req.params;
    // console.log(req)
    console.log("Received shortId:", shortId);
    try{
  const entry =  await URL.findOneAndUpdate({
     shortId
    },
   { $push:{
    visitHistroy:{
        timestamp:Date.now(),
    },
   },},
   { new: true });
   if(entry){
    res.redirect(entry.redirectURL);
   }else{
    console.log(shortId);
    res.status(404).send('not found');
   }
  //  res.redirect(entry.Redirectedurl);
}
catch(error){
console.log(error);
res.status(500).send('internal error');
}
};

module.exports={
    HandlereceiveShortidasqueryparameter
}










