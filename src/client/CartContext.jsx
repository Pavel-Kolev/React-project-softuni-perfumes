import { createContext, useState } from "react";
import { useEffect } from "react";
import * as perfumeService from "./services/perfumeService";
 
const CartContext = createContext({
  items: [],
  getProductQuantity: () => {},
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {},
});

  
  


export function ContextProvider(props) {
  const [cartProducts, setCartProducts] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
   
    perfumeService.getAllParfumes().then(productwithquant=>(productwithquant.map((cartProducts)=> ({...cartProducts , quantity:0})   ))).then(productswithquant=>setCartProducts(productswithquant))
   setLoading(false)
   
  }, [])
 


  
   
  function getProductQuantity(id) {
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
  function deleteFromCart(id) {
    setCartProducts((cartProducts) =>
      cartProducts.filter((currentProduct) => {
        return currentProduct.id != id;
      })
    );
  }
  function removeOneFromCart(id) {
    if (quantity === 1) {
      deleteFromCart(id);
    } else {
      setCartProducts(
        cartProducts.map((product) =>
          product._id === id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
      );
    }
  }
  
  const contextValue = {
    items: cartProducts,
    getProductQuantity,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
     loading:loading,
    
  };
 
  return (<>
    <CartContext.Provider value={{contextValue}}>{props.children}</CartContext.Provider>
    </>
  );
}
export { CartContext };
