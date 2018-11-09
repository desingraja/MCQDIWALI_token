var express=require('express');

var jwt=require('jsonwebtoken');

var app=express();

app.get('/',function(err,res)
{

res.json({message:"connected"})
	

})
app.post('/api/posts',verify,function(err,res)
{
    jwt.verify(req.token,'secret',(err,authdata)=> {

if(err) {
res.sendStatus(403);
}
else {
res.json({
message:'Post created...',
authData
});

}
});	

});

app.post('/api/login',function(err,res)
{
var username="kalaiDesing";
jwt.sign({username},'secret',(err,token)=>
{
res.json(token);
});
})

function verify(req,res){

    const bearerHeader= req.headers['authorization'];
if(typeof bearerHeader !='undefined'){

const bearer=bearerHeader.split('');
const bearerToken=bearer[1];
req.token=bearerToken;




}
else{
res.send("err");}



}



app.listen(4000)
