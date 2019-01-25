var express=require('express');
var app=express();

//comment
app.set('view engine','ejs');
app.set('views','views');

app.use(express.static('public'));

app.use(require('./routes/index'))
app.use(require('./routes/singers'))
app.use(require('./routes/feedback'))
app.use(require('./routes/chat'))
app.listen(4000)

