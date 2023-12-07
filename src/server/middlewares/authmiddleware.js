const jwt = require("../lib/jwt");
 

exports.auth = async (req, res, next) => {
  
 
 
  const token =  req.body.token 
  if (token) {
    try{
   
        const decodeToken=await jwt.verify(token,"atanas")
        
        req.user=decodeToken
        res.locals.user=decodeToken
        res.locals.isAuthenticated=true;
        
    }
    catch(error){
        throw new Error(error)
         
         
    }
  
  } 
  else {
    
   
  }

 
 next();
 
 

  
};
exports.isAuthenticated=(req,res,next)=>{
    if(!req.user){
    
      res.locals.isAuthenticated=false;
    }
    next()
}