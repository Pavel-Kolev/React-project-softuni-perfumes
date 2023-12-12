import validator from "validator";
function validateRegCredentials(values){
const {email,username,password,repeatPassword}=values
let errors=[]
const userRegex=/[^A-Za-z||0-9]/
 
const emailValid=validator.isEmail(email)


if(!emailValid)
{
errors.push( "Invalid Email" )
}
if(username.length<8|| userRegex.test(username)===true){
errors.push( "The Username Should be atleast 8 char long and contain only letter or numbers" )
}
 
if(password.length<8){
    errors.push( "Password should be atleast 6 char long" )
}
if(password!==repeatPassword){
    errors.push("Passwords don't match")
}
return(errors)
}
export default validateRegCredentials