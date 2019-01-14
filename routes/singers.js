var express =require('express')
var router =express.Router()

var dataFile=require('../data/data.json');
router.get('/singers',(req,res)=>{
    var pagesingers=dataFile.singers
    var pageAlbums=[];
    dataFile.singers.forEach(element => {
        pageAlbums=pageAlbums.concat(element.albums)
        
    });

    res.render('singers',{
        albums:pageAlbums,
        singers:pagesingers

    }) 

//  router.get('/singers/:singerid',(req,res)=>{

   });


module.exports =router;