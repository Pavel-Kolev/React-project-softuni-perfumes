import { useContext } from "react"
import AuthContext from "../contexts/AuthContext"


export default function withOwner(Component){
    const EnchancedComponent=(props)=>{
        const auth=useContext(AuthContext)
        return<Component {...props}{...auth}/>
    }

    return EnchancedComponent
}