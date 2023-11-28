import { useForm } from "./hooks/useForm"
import * as userService from "./services/userService"




export default function Register({registerSubmitHandler,arr} ) {
  
const{values,onSubmit,onChange,errors}= useForm(registerSubmitHandler,{
    email:"",
    username:"",
    password:"",
},[],"register")
 
 
 
    

    return (

            <form onSubmit={onSubmit}>
                <label htmlFor="email">email</label>
                <input type="text" name="email" onChange={onChange} value={values.email} placeholder="something@smth.smth"/>
                {errors&&errors.map((error)=><p key={error}>{error}</p>
                )}
              
                <label htmlFor="username"> Username</label>
                <input type="text"  name="username" onChange={onChange} value={values.username} placeholder="something@smth.smth"/>
                <label htmlFor="password">Password</label>
                <input type="text" name="password" onChange={onChange} value={values.password} placeholder="something@smth.smth" />
                <input type="submit"/>




            </form>


    )
}