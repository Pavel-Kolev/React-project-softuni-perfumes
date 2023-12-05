import {useEffect, useContext} from "react"

import { useNavigate } from "react-router-dom"
 import AuthContext from"./contexts/AuthContext"
 



function Logout(){
    const navigate=useNavigate()
    const {logoutHandler}=useContext(AuthContext)
useEffect(()=>{
logoutHandler()
 


},[])

    return null
}

export default Logout