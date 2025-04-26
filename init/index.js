const mongoose=require("mongoose");
const initdata=require("./data.js");
const Listing=require("../models/listing.js");

const Mongo_url="mongodb://127.0.0.1:27017/wanderlust";
main().then(()=>{
    console.log("connected to db");
}).catch((err)=>{
    console.log(err);
});

 async function main(){
    await mongoose.connect(Mongo_url);
 }
 const initDB=async()=>{
    await Listing.deleteMany({});
    initdata.data=initdata.data.map((obj)=>({...obj,Owner:"67f94cc790e54a47152d5e48"}))
    await Listing.insertMany(initdata.data);
    console.log("data was initialised");
 }
 initDB();


