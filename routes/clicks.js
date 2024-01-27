const express = require('express');
const router = express.Router();
const {Handleclicks} = require('../controllers/click');

router.get('/url/analytics/:shortId',Handleclicks);

module.exports=router;
