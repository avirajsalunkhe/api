const {MongoClient}=require('mongodb');
const url="mongodb://localhost:27017"
const database='student';
const Client=new MongoClient(url);

const dbconnect=async()=>{
    const result=await Client.connect();
    const db= result.db(database);
    return db.collection('profile')
}

module.exports=dbconnect;