const dbconnect=require('./mongodb')
const express=require('express');
const app=express();
app.use(express.json())
//get api 


app.get('/show/',async(req,res)=>{
    let result=await dbconnect()
    result=await result.find().toArray();
    res.send(result);
})

//post api 

app.post('/insert/',async(req,res)=>{
    let result=await dbconnect()
    result=await result.insertOne(req.body);
    res.send("Data Inserted Successfully")
})

//put api
app.put('/update/:name',async(req,res)=>{
    let result=await dbconnect()
    result=await result.updateOne({name:req.params.name},{$set:req.body});
    res.send("Data Updated Successfully")

})

//Delete api

app.delete('/delete/:name',async(req,res)=>{
    let result=await dbconnect()
    result=await result.deleteOne({name:req.params.name});
    res.send("Data Deleted Successfully")
})


app.listen(3000);