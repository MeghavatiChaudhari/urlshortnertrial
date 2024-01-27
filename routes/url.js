const express = require('express');
const { Handlegeneratenewshorturl} = require('../controllers/url');
const router = express.Router();


router.post('/',Handlegeneratenewshorturl);
module.exports=router;

