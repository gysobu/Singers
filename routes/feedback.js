var express =require('express')
var router =express.Router();
var dataFile=require('../data/data.json');
router.get('/feedback',function(req,res){
    var pagesingers=dataFile.singers
    res.render('feedback',{
         singers:pagesingers
        // pageTitle:'Feedback',
        // pageID:'feedback'
    });
});

module.exports =router