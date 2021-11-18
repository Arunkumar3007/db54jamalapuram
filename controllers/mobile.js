var Mobile = require('../models/mobile');
const mobiles = require('../models/mobile');
 
// List of all Mobile s
exports.mobile_list = async function(req, res) { 
    try{ 
        theMobiles = await Mobile.find(); 
        res.send(theMobiles); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

exports.mobile_view_all_Page = async function(req, res) { 
    try{ 
        theMobiles = await mobiles.find(); 
        res.render('mobile', { title: 'Mobile Search Results', results: theMobiles}); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

exports.mobile_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Mobile(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"costume_type":"goat", "cost":12, "size":"large"} 
    document.name = req.body.name; 
    document.type = req.body.type; 
    document.cost = req.body.cost; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

exports.mobile_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await mobiles.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 
 
exports.mobile_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await mobiles.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 
 
// Handle Mobile update form on PUT. 
exports.mobile_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await mobiles.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.name)  
               toUpdate.name = req.body.name; 
        if(req.body.type) toUpdate.type = req.body.type; 
        if(req.body.cost) toUpdate.cost = req.body.cost; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 

// Handle a show one view with id specified by query 
exports.mobile_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await mobiles.findById( req.query.id)
    res.render('mobiledetail',
   { title: 'mobile Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };
   exports.mobile_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('mobilecreate', { title: 'mobile Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };
   exports.mobile_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await mobiles.findById(req.query.id)
    res.render('mobileupdate', { title: 'Mobile Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };
   exports.mobile_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await mobiles.findById(req.query.id)
    res.render('mobiledelete', { title: 'mobile Delete', toShow:
   result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };