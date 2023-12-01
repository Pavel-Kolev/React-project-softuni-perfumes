import { useEffect } from "react"
import { useForm } from "./hooks/useForm"
import * as userService from "./services/userService"

export default function Login({loginSubmitHandler,errs}){
    const{values,onSubmit,onChange,errors}= useForm(loginSubmitHandler,{
        email:"",
        username:"",
        password:"",
    },[],"login")

useEffect(()=>{




},errs)

    return (
            <form onSubmit={onSubmit}>
                {errs&&errs.map((error)=><p>{error}</p>)}
                   <label htmlFor="email">email</label>
                <input type="text" name="email" id="email"  onChange={onChange} value={values.email}  />
                <label htmlFor="username">username</label>
                <input type="text"  name="username" id="username" onChange={onChange} value={values.username}/>
                <label htmlFor="password">password</label>
                <input type="text" name="password" id="password"  onChange={onChange} value={values.password}/>
             
                <input type="submit" />




            </form>


    )
}