var express = require('express'); 
const mobile_controller = require('../controllers/mobile'); 
var router = express.Router(); 
 
// router.get('/delete', mobile_controller.mobile_delete_Page);
router.get('/', mobile_controller.mobile_view_all_Page);
router.get('/update', mobile_controller.mobile_update_Page);

module.exports = router;