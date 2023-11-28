import { useState } from "react";
import { useEffect } from "react";
import "../public/styles.css";
import Navbar from "./Navbar";
import * as userService from "./services/userService";
import ProductSection from "./ProductSection";
import { CartContext } from "./CartContext";
import { Route, Routes } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Cart from "./cart";
import Home from "./Home";
import { ContextProvider } from "./CartContext";
import * as perfumeService from "./services/perfumeService";
 

function App() {
  const [err, setErr] = useState({});
 
  const registerSubmitHandler = async (values) => {
     
      const result = await userService.register(values)
      if(result.errorMessages){
        setErr(result.errorMessages)
      }
     
    else{

    }
     
   

     
     
    
  };
  
 
  return (
    <ContextProvider>
      <>
        <Navbar />
        <div className="space"></div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Catalog" element={<ProductSection />}></Route>

          <Route
            path="/register"
            element={<Register registerSubmitHandler={registerSubmitHandler}   arr={err}  />}
          ></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </>
    </ContextProvider>
  );
}

export default App;
