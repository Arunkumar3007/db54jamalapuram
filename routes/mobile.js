var express = require('express'); 
const mobile_controlers= require('../controllers/mobile'); 
var router = express.Router(); 
 
/* GET costumes */ 
router.get('/', mobile_controlers.mobile_view_all_Page ); 
module.exports = router; 