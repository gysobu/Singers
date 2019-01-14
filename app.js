var express=require('express');
var app=express();


app.set('view engine','ejs');
app.set('views','views');

app.use(express.static('public'));

app.use(require('./routes/index'))
app.use(require('./routes/singers'))
app.listen(4000)

