var express = require('express')
var router = express.Router()
var dataFile =require('../data/data.json');
router.get('/chat',(req,res)=>{
    var pagesingers=dataFile.singers
    res.render('chat',{
        singers:pagesingers
    })
})

module.exports=router