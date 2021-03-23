var express=require('express');
var app = express();

// when visit $HOSTIP/ send hello
app.Get('/',function(req,res){
    res.send('hello')
});

app.listen(80);
console.log('express started');
