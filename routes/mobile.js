var express = require('express'); 
const mobile_controller = require('../controllers/mobile'); 
var router = express.Router(); 
 
/* GET costumes */ 
router.get('/detail', mobile_controller.mobile_view_one_Page);
module.exports = router; 