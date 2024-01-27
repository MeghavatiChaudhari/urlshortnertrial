
const express = require('express');
const router = express.Router();
const {HandlereceiveShortidasqueryparameter} = require('../controllers/redirect');
router.get('/:shortId',HandlereceiveShortidasqueryparameter);
module.exports=router;


