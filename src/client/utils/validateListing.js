function validateListing(values){
    const {brand,model,img,price,disc}=values
    let errors=[]
    
   
    if(brand.length<7||model.length<7||img.length<7||disc.length<7)
    {
    errors.push( "Provide input that is a bit longer" )
    }
    if(Number(price)>1500){
        errors.push( "We are sorry, but such expensive products shoudn't be sold on here " )
    }
    return(errors)
    }
    export default validateListing