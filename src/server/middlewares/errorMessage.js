const {exactErrorMsg}=require('../utils/errHandle')

module.exports=(err,req,res,next)=>{
    const errorMessages=exactErrorMsg(err)
 
    res.json("404",{errorMessages})
 

}