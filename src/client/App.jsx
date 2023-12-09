

import "../public/styles.css";
import Navbar from "./Navbar";

import ProductSection from "./ProductSection";

import { Route, Routes} from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Cart from "./Cart";
import Home from "./Home";
import { ContextProvider } from "./CartContext";


import Logout from "./Logout";

import CreateOffer from "./CreateOffer";
import UsersParfumes from "./UsersParfumes";
import { AuthProvider } from "./contexts/AuthContext";
import DetailsPage from "./DetailsPage";
import EditOffer from "./EditOffer";

function App() {
  
  
 

  return (
    <AuthProvider>
      <ContextProvider>
     
        <>
          <Navbar />
          <div className="space"></div>
    
          <Routes>
            <Route path="/" element={<Home />}></Route>
       
            <Route path="/Catalog" element={<ProductSection />}></Route>

            <Route
              path="/register"
              element={
                <Register
                 
                />
              }
            ></Route>
            <Route
              path="/login"
              element={
                <Login
                
                />
              }
            ></Route>
         
            <Route path="/Logout" element={<Logout />}></Route>
            <Route
              path="/Create"
              element={
                <CreateOffer
                   
                />
              }
            ></Route>
            <Route
              path="/UserParfumes"
              element={<UsersParfumes></UsersParfumes>}
            ></Route>
           
            <Route path="/parfume/:ParfumeId" element={<DetailsPage/>}></Route>
            <Route path="/parfume/:ParfumeId/edit" element={<EditOffer/>}></Route>
          </Routes>
         
        </>
      </ContextProvider>
    </AuthProvider>
  );
}

export default App;
