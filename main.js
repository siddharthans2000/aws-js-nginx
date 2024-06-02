const express=require('express');
const app=express()
const port=3000

app.get('/hello',function(req,res){
    res.status(200).json({msg:"The nginx works fine"})
});
app.all('*',function(req,res){
    res.status(200).json({msg:"Try /hello dUm6a$$."})
});
app.listen(port,function(){
    console.log(`Listenting to port ${port}`)});