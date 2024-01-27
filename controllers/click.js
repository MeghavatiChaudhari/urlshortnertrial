
const URL = require('../models/url');
async function Handleclicks(req,res){
    try{
        console.log(req)
        console.log(req.params.shortId);
    const shortId=req.params.shortId;
    const result = await URL.findOne({
        shortId
    })
   return res.json({totalclicks:result.visitHistroy.length,
    analytics:result.visitHistroy});
    }
    catch(error){
      console.log(error);
    }
}
module.exports={
   Handleclicks,
}