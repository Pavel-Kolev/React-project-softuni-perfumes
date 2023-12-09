import { createContext, useContext, useState } from "react";
import { useEffect } from "react";
import * as perfumeService from "./services/perfumeService";
import AuthContext from "./contexts/AuthContext";
 
const CartContext = createContext({
  items: [],
  getProductQuantity: () => {},
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {},
  getProductDetails:()=>{}
});

  
  


export function ContextProvider(props) {
  const [cartProducts, setCartProducts] = useState();
  const [loading, setLoading] = useState(true);
const token=localStorage.getItem("token")
  const {email}=useContext(AuthContext)
  useEffect(() => {
   
      perfumeService.getAllParfumes().then(productwithquant=>(productwithquant.map((cartProducts)=> ({...cartProducts , quantity:0})   ))).then(productswithquant=>setCartProducts(productswithquant))
      setLoading(false)
      
 
   
  },[email])
 


  
   
  function getProductQuantity(_id) {
    const quantity = cartProducts.find(
      (product) => (product._id = id)
    )?.quantity;

    return quantity;
  }
  function addOneToCart(_id) {
    
      
      setCartProducts(
        cartProducts.map((product) =>
          product._id === _id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )
      );
    
  }
  function deleteFromCart(_id) {
     
    setCartProducts(cartProducts.map((product) =>
          product._id === _id
            ? { ...product, quantity: 0 }
            : product
        )
    )
    ;
  }
  function removeOneFromCart(_id) {
    if (quantity === 1) {
      deleteFromCart(_id);
    } else {
      setCartProducts(
        cartProducts.map((product) =>
          product._id === _id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
      );
    }
  }
  function getProductDetails(_id) {
 
    const product = cartProducts.find(
      (product) => (product._id = _id)
    )?.product;

    return product;
  }
  const contextValue = {
    items: cartProducts,
    getProductQuantity,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    getProductDetails,
     loading:loading,
    
  };
 
  return (<>
    <CartContext.Provider value={{contextValue}}>{props.children}</CartContext.Provider>
    </>
  );
}
export { CartContext };
