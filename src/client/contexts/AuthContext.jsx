import { createContext } from "react";
import { useState } from "react";
import * as userService from "../services/userService";
const AuthContext=createContext()
import { useNavigate } from "react-router-dom";
import * as parfumeService from "../services/perfumeService";
import usePersistedState from "../hooks/usePersistedState";

export const AuthProvider=({children})=>{
    const [auth, setAuth] = usePersistedState('auth',{})
    const navigate = useNavigate();
    const [err, setErr] = useState([]);
    const [loginErrs, setLoginErrs] = useState([]);
  
  
  
    const registerSubmitHandler = async (data) => {
      const result = await userService.register(data);
      if (result.errorMessages) {
        setErr(result.errorMessages);
      } else {
        setErr();
  
        setAuth(result);
        localStorage.setItem("token", result.token);
        navigate("/");
      }
    };
    const loginSubmitHandler = async (data) => {
      const result = await userService.login(data);
      if (result.errorMessages) {
        setLoginErrs(result.errorMessages);
      } else {
     
        setLoginErrs();
        setAuth(result);
        localStorage.setItem("token", result.token);
        navigate("/");
      }
    };
  
    const logoutHandler = () => {
      setAuth({});
      localStorage.removeItem("token");
      navigate("/");
    };
    const createOfferHandler = async (data) => {
      const result = await parfumeService.CreateParfume(data);
   
      if (result.errorMessages) {
        setErr(result.errorMessages);
      } else {
        setErr();
        navigate("/");
      }
    };
    
   
    const values = {
      createOfferHandler,
      registerSubmitHandler,
      loginSubmitHandler,
      logoutHandler,
     
      username: auth.username,
      email: auth.email,
      token: auth.token,
      isAuthenticated: !!auth.token,
      err:err,
      loginErrs:loginErrs,
      id:auth.id

    };
return(
    
    <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
)
}
export default AuthContext