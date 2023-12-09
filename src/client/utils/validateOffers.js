 




function validateOffer(values){
  
    const {counterPrice}=values
    let errors=[]
 
   
    if(isNaN(Number(counterPrice)))
    {
    errors.push( "The price should be a number" )
    return(errors)
    }
     
   
}
export default validateOffer