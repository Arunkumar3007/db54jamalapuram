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
 
// for a specific Mobile. 
exports.mobile_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Mobile detail: ' + req.params.id); 
}; 
 
// Handle Mobile delete form on DELETE. 
exports.mobile_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Mobile delete DELETE ' + req.params.id); 
}; 
 
// Handle Mobile update form on PUT. 
exports.mobile_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Mobile update PUT' + req.params.id); 
};