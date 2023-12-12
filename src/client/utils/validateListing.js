function validateListing(values){
    const {brand,model,img,price,disc}=values
    let errors=[]
    
const isValidImageUrl = validator.isURL(img, { protocols: ['http', 'https'], require_tld: true });
   
    if(brand.length<2||model.length<5||disc.length<10)
    {
    errors.push( "Provide input that is a bit longer" )
    }
    if(Number(price)>1500){
        errors.push( "We are sorry, but such expensive products shoudn't be sold on here " )
    }
    if(!isValidImageUrl){
        errors.push("please provide a valid url")
    }
    return(errors)
    }
   
    export default validateListing