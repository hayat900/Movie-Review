module.exports=function(app,Moviereview){
app.get('/',function(request,response){
   Moviereview.find().lean().then(reviews=>{
                    response.render("reviews-index.handlebars",{reviews:reviews});
   }).catch(err=>{
       console.log(err);
   });
});
}

       