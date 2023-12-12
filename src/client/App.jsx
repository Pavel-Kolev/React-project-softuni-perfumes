

import "../public/styles.css";
import Navbar from "./Navbar";
import 'bootstrap/dist/css/bootstrap.min.css'
import ProductSection from "../Parfume/ProductSection";

import { Route, Routes} from "react-router-dom";
import Register from "./User/Register";
import Login from "./User/Login";
 
import Home from "./Home";
 


import Logout from "./User/Logout";

import CreateOffer from "../Parfume/CreateListing";
import UsersParfumes from "./User/UsersParfumes";
import { AuthProvider } from "./contexts/AuthContext";
import DetailsPage from "../Parfume/DetailsPage";
import EditOffer from "./Offers/EditOffer";

function App() {
  
  
 

  return (
    <AuthProvider>
    
     
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
      
    </AuthProvider>
  );
}

export default App;
