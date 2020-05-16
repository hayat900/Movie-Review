var express=require('express');
var app=express();
app.get('/',function(request,response){
        response.render('home.handlebars',{msg:"trendy"});
        })
        app.listen(3000,function(request,response){
            console.log("running successfully");
        })
var exhs=require('express-handlebars');
app.set('view engine','handlebars');
app.engine('handlebars',exhs({defaultLayout:'main'}));
