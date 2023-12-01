function validateRegCredentials(values){
const {email,username,password}=values
let errors=[]
const userRegex=/[^A-Za-z||0-9]/
const emailRegex=/[A-Za-z0-9]{5,}[@][a-z]*[.][a-z]*/gm
const emailValid=emailRegex.test(email)


if(!emailValid)
{
errors.push( "Email Should include @ alphabet chars,numbers and exclude whitespaces" )
}
if(username.length<8|| userRegex.test(username)===true){
errors.push( "The Username Should be atleast 8 char long and contain only letter or numbers" )
}
 
if(password.length<6){
    errors.push( "Password should be atleast 6 char long" )
}

return(errors)
}
export default validateRegCredentials