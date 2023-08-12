const mongodb=require('mongodb')
const MongoClient = mongodb.MongoClient
const connectionUrl='mongodb://127.0.0.1:27017'
const dbname="task-6"
MongoClient.connect(connectionUrl,(error,res1)=>{
    if(error){
        return console.log('error has occured')
    }
    console.log('All pref')
    const db =res1.db(dbname)

////////////////////////////insertOne two document/////////////////////////////
db.collection('user1').insertOne({
    name:'zezo',
    age:24
},(error,data)=>{
    if(error){
        console.log('unable to insert data')
    }
    console.log(data.insertedId)
})
////////////////////////////
db.collection('user2').insertOne({
    name:'esraa',
    age:21
},(error,data)=>{
    if(error){
        console.log('unable to insert data')
    }
    console.log(data.insertedId)
})

////////////////////////////////insertmany 10 persons/////////////////////////////
db.collection('user1').insertMany(
    [
      {
          name:'zezo',
          age: 25
      },
      {
          name:'israa',
          age: 25
      },
      {
          name:'aser',
          age: 25
      },
      {
          name:'rawan',
          age:25
      },
      {
        name:'eman',
        age:25
      },
      {
        name:'hany',
        age:21
      },
      {
        name:'asmaa',
        age:11
      },
      {
        name:'rawda',
        age:13
      },
      {
        name:'yousef',
        age:14
      },
      {
        name:'hana',
        age:15
      }
      
  ],(error,data)=>{
      if(error){
          console.log('unable to insert data')
      }
     console.log(data.insertedCount)
  })


  //////////////////////////////find match age=25///////////////////////////////
  db.collection('user1').find({age:25}).toArray((error,users)=>{
    if(error){
        console.log('error has occured')
    }
    console.log(users)
   })
      
  ////////////////////////////find limit(3) age=25////////////////
  db.collection('user1').find({age:25}).limit(3).toArray((error,users)=>{
    if(error){
        console.log('error has occured')
    }
    console.log(users)
   })

////////////////////////////////////set name for 4 persons//////////////////////////////

db.collection("user1").updateOne({_id: mongodb.ObjectId("64d6aca2499bee6f7bc74462")},
{
    $set:{name:"mohamed"},
   
}).then((data1)=>{console.log(data1.modifiedCount)})
  .catch((error)=>{console.log(error)})

//////////////////////////

  db.collection("user1").updateOne({_id: mongodb.ObjectId("64d6aca2499bee6f7bc74463")},
{
      $set:{name:"hend"},
     
  }).then((data1)=>{console.log(data1.modifiedCount)})
    .catch((error)=>{console.log(error)})

////////////////////////
   db.collection("user1").updateOne({_id: mongodb.ObjectId("64d6aca2499bee6f7bc74464")},
   {
       $set:{name:"ahmed"},
       
   }).then((data1)=>{console.log(data1.modifiedCount)})
     .catch((error)=>{console.log(error)})
  


///////////////////////////
    db.collection("user1").updateOne({_id: mongodb.ObjectId("64d6aca2499bee6f7bc74465")},
     {
        $set:{name:"fayrouz"},
         
    }).then((data1)=>{console.log(data1.modifiedCount)})
       .catch((error)=>{console.log(error)})
      
//////////////////////////////////////////////////////ubdateone for one person inc age =20//////////////

db.collection("user1").updateOne({_id: mongodb.ObjectId("64d6ba8ce4d9c8efe47772a3")},
{
   $set:{name:"zezo"},
   $inc:{age:20}
   
}).then((data1)=>{console.log(data1.modifiedCount)})
  .catch((error)=>{console.log(error)})

//////////////////////////////////////ubdatemany for all= age 10////////////////////////////////
db.collection("user1").updateMany({},
{

   $inc:{age:10}
   
}).then((data1)=>{console.log(data1.modifiedCount)})
  .catch((error)=>{console.log(error)})
////////////////////////////////////////////////deleteOne 1/////////////////////////////////////////////////////////////////


db.collection("user1").deleteOne({_id: mongodb.ObjectId("64d6beccbb488745ae57ffbc")})
.then((data1)=>{console.log(data1.modifiedCount)})
 .catch((error)=>{console.log(error)})


////////////////////////////////////////////////////////deleteMany   age  35///////////////////////////////////////////////////////////
db.collection("user1").deleteMany({age:35})
.then((data1)=>{console.log(data1.modifiedCount)})
 .catch((error)=>{console.log(error)})









































})