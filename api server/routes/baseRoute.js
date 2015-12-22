var express = require('express');
var router = express.Router();
var iot = require('../iot');

router.use('/publish/:id',function(req, res) {
   iot.publish(req,res,function(p){
       if(p===true){
           res.json(
    		{
    		"result":"success"
    		});
           }
       else{
           res.json(
    		{
    		"result":"failure"
    		});
        }
       
   });
   
});


module.exports = router;