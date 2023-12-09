const { MongooseError } = require("mongoose")

exports.exactErrorMsg=(error)=>{
    console.log(error)
   const isInstanceOfMongoose= error instanceof MongooseError
   if(isInstanceOfMongoose){
    const errors=Object.values(error.errors)
    return errors.map(e=>e.message)
   }
 
}