var express = require('express'); 
const mobile_controlers= require('../controllers/mobile'); 
var router = express.Router(); 
 
/* GET costumes */ 
router.put('/mobile/:id', mobile_controlers.mobile_update_put); 
module.exports = router; 