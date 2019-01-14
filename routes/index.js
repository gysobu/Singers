var express =require('express')
var router= express.Router()
var dataFile=require('../data/data.json');
router.get('/',(req,res)=>{
    var pagesingers=dataFile.singers
    var pageAlbums=[];
    dataFile.singers.forEach(element => {
        pageAlbums=pageAlbums.concat(element.albums)
        
    });

    res.render('index',{
        albums:pageAlbums,
        singers:pagesingers

    }) 

})
module.exports =router;